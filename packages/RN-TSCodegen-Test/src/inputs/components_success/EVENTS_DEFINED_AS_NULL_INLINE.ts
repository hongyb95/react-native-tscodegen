
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/EVENTS_DEFINED_AS_NULL_INLINE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {BubblingEventHandler} from 'react-native-tscodegen-types';
import {DirectEventHandler} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalValue: (ReactNull | DirectEventHandler<null>);
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullWithPaperName?: (ReactNull | DirectEventHandler<null, 'paperDirectEventDefinedInlineNullWithPaperName'>);
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalValue: (ReactNull | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullOptionalBoth?: (ReactNull | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullWithPaperName?: (ReactNull | BubblingEventHandler<null, 'paperBubblingEventDefinedInlineNullWithPaperName'>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


