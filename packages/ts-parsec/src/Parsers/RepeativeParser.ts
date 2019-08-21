// tslint:disable:no-constant-condition
// tslint:disable:no-increment-decrement
// tslint:disable:prefer-for-of

import { Token } from '../Lexer';
import { apply } from './ApplyParser';
import { betterError, ParseError, Parser, ParseResult, ParserOutput, resultOrError, succeeded } from './ParserInterface';
import { seq } from './SequencialParser';

export function rep<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    const reprParser = repr(p);
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            const result = reprParser.parse(token);
            return succeeded(result) ? result.reverse() : result;
        }
    };
}

export function rep_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            let error: ParseError | undefined;
            let result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            while (true) {
                const steps = result;
                result = [];
                for (const step of steps) {
                    const followings = p.parse(step.nextToken);
                    if (succeeded(followings)) {
                        for (const following of followings) {
                            result.push({
                                nextToken: following.nextToken,
                                result: step.result.concat([following.result])
                            });
                        }
                    } else {
                        error = betterError(error, followings);
                    }
                }

                if (result.length === 0) {
                    result = steps;
                    break;
                }
            }
            return resultOrError(result, error);
        }
    };
}

export function repr<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            let error: ParseError | undefined;
            const result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            for (let i = 0; i < result.length; i++) {
                const step = result[i];
                const followings = p.parse(step.nextToken);
                if (succeeded(followings)) {
                    for (const following of followings) {
                        result.push({
                            nextToken: following.nextToken,
                            result: step.result.concat([following.result])
                        });
                    }
                } else {
                    error = betterError(error, followings);
                }
            }
            return resultOrError(result, error);
        }
    };
}

function applyList<TResult, TSeparator>(value: [TResult, [TSeparator, TResult][]]): TResult[] {
    return [value[0]].concat(value[1].map((pair: [TSeparator, TResult]) => { return pair[1]; }));
}

export function list<TKind, TResult, TSeparator>(p: Parser<TKind, TResult>, s: Parser<TKind, TSeparator>): Parser<TKind, TResult[]> {
    return apply(seq(p, rep(seq(s, p))), applyList);
}

export function list_sc<TKind, TResult, TSeparator>(p: Parser<TKind, TResult>, s: Parser<TKind, TSeparator>): Parser<TKind, TResult[]> {
    return apply(seq(p, rep_sc(seq(s, p))), applyList);
}

function applyLrec<TResult, TFirst extends TResult, TSecond>(callback: (a: TResult, b: TSecond) => TResult): (value: [TFirst, TSecond[]]) => TResult {
    return (value: [TFirst, TSecond[]]): TResult => {
        let result: TResult = value[0];
        for (const tail of value[1]) {
            result = callback(result, tail);
        }
        return result;
    };
}

export function lrec<TKind, TResult, TFirst extends TResult, TSecond>(p: Parser<TKind, TFirst>, q: Parser<TKind, TSecond>, callback: (a: TResult, b: TSecond) => TResult): Parser<TKind, TResult> {
    return apply(seq(p, rep(q)), applyLrec(callback));
}

export function lrec_sc<TKind, TResult, TFirst extends TResult, TSecond>(p: Parser<TKind, TFirst>, q: Parser<TKind, TSecond>, callback: (a: TResult, b: TSecond) => TResult): Parser<TKind, TResult> {
    return apply(seq(p, rep_sc(q)), applyLrec(callback));
}
