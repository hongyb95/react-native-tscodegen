import {BubblingEventHandler} from '../lib/CodegenTypes';import {DirectEventHandler} from '../lib/CodegenTypes';import {Float} from '../lib/CodegenTypes';import {Double} from '../lib/CodegenTypes';import {Int32} from '../lib/CodegenTypes';import {ReactNull} from '../lib/CodegenTypes';import * as React from '../lib/React';import codegenNativeComponent = require('../lib/codegenNativeComponent');import codegenNativeCommands = require('../lib/codegenNativeCommands');
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';


import {ViewProps} from '../lib/ViewPropTypes';
import {NativeComponent} from '../lib/codegenNativeComponent';



export type EventInFile = Readonly<{
  
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: ReactNull | boolean;
  boolean_optional_both?: ReactNull | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: ReactNull | string;
  string_optional_both?: ReactNull | string;

  double_required: Double;
  double_optional_key?: Double;
  double_optional_value: ReactNull | Double;
  double_optional_both?: ReactNull | Double;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: ReactNull | Float;
  float_optional_both?: ReactNull | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: ReactNull | Int32;
  int32_optional_both?: ReactNull | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: ReactNull | ('small' | 'large');
  enum_optional_both?: ReactNull | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: ReactNull | {
    float_optional_value: ReactNull | Float;
  }

  object_optional_both?: ReactNull | {
    int32_optional_both?: ReactNull | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ReactNull | {
      boolean_required: Int32;
      string_optional_key?: string;
      double_optional_value: ReactNull | Double;
      float_optional_value: ReactNull | Float;
      int32_optional_both?: ReactNull | Int32;
    }
  }

}>;

export type Boolean = boolean;
export type Int = Int32;
export type Void = void;

export type ScrollTo = (viewRef: React.Ref<'RCTView'>, y: Int, animated: Boolean) => Void

interface NativeCommands {
  scrollTo: ScrollTo;
}

export type ModuleProps = Readonly<ViewProps & {

  // No props

  // Events defined inline
  onBubblingEventDefinedInline: BubblingEventHandler<EventInFile>;
  onBubblingEventDefinedInlineWithPaperName: BubblingEventHandler<EventInFile, 'paperBubblingEventDefinedInlineWithPaperName'>;
  onDirectEventDefinedInline: DirectEventHandler<EventInFile>;
  onDirectEventDefinedInlineWithPaperName: DirectEventHandler<EventInFile, 'paperDirectEventDefinedInlineWithPaperName'>;
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
