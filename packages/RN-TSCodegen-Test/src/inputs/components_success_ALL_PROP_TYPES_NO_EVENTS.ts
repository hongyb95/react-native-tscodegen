import {Float} from '../lib/CodegenTypes';import {Double} from '../lib/CodegenTypes';import {Int32} from '../lib/CodegenTypes';import {Stringish} from '../lib/CodegenTypes';import {ReactNull} from '../lib/CodegenTypes';import {WithDefault} from '../lib/CodegenTypes';import {NativeComponent} from '../lib/codegenNativeComponent';import codegenNativeComponent from '../lib/codegenNativeComponent';
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




import {ImageSource} from '../lib/ImageSource';
import {ColorValue, ColorArrayValue, PointValue} from '../lib/StyleSheetTypes';
import {ViewProps} from '../lib/ViewPropTypes';


type ModuleProps = Readonly<ViewProps & {

  // Props
  // Boolean props
  boolean_required: boolean;
  boolean_optional_key?: WithDefault<boolean, true>;
  boolean_optional_both?: WithDefault<boolean, true>;

  // String props
  string_required: string;
  string_optional_key?: WithDefault<string, ''>;
  string_optional_both?: WithDefault<string, ''>;

  // String props, null default
  string_null_optional_key?: WithDefault<string, null>;
  string_null_optional_both?: WithDefault<string, null>;

  // Stringish props
  stringish_required: Stringish;
  stringish_optional_key?: WithDefault<Stringish, ''>;
  stringish_optional_both?: WithDefault<Stringish, ''>;

  // Stringish props, null default
  stringish_null_optional_key?: WithDefault<Stringish, null>;
  stringish_null_optional_both?: WithDefault<Stringish, null>;

  // Double props
  double_required: Double;
  double_optional_key?: WithDefault<Double, 1.1>;
  double_optional_both?: WithDefault<Double, 1.1>;

  // Float props
  float_required: Float;
  float_optional_key?: WithDefault<Float, 1.1>;
  float_optional_both?: WithDefault<Float, 1.1>;

  // Int32 props
  int32_required: Int32;
  int32_optional_key?: WithDefault<Int32, 1>;
  int32_optional_both?: WithDefault<Int32, 1>;

  // String enum props
  enum_optional_key?: WithDefault<'small' | 'large', 'small'>;
  enum_optional_both?: WithDefault<'small' | 'large', 'small'>;

  // Object props
  object_optional_key?: Readonly<{ prop: string }>;
  object_optional_both?: ReactNull | Readonly<{ prop: string }>;
  object_optional_value: ReactNull | Readonly<{ prop: string }>;

  // ImageSource props
  image_required: ImageSource;
  image_optional_value: ReactNull | ImageSource;
  image_optional_both?: ReactNull | ImageSource;

  // ColorValue props
  color_required: ColorValue;
  color_optional_key?: ColorValue;
  color_optional_value: ReactNull | ColorValue;
  color_optional_both?: ReactNull | ColorValue;

  // ColorArrayValue props
  color_array_required: ColorArrayValue;
  color_array_optional_key?: ColorArrayValue;
  color_array_optional_value: ReactNull | ColorArrayValue;
  color_array_optional_both?: ReactNull | ColorArrayValue;

  // PointValue props
  point_required: PointValue;
  point_optional_key?: PointValue;
  point_optional_value: ReactNull | PointValue;
  point_optional_both?: ReactNull | PointValue;
}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
) as NativeComponent<ModuleProps>);
