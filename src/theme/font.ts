export const fontSizeMap = new Map<string, {fontSize: number}>([
  ['text-xs', {fontSize: 12}],
  ['text-sm', {fontSize: 14}],
  ['text-md', {fontSize: 16}],
  ['text-lg', {fontSize: 20}],
  ['text-xl', {fontSize: 24}],
  ['text-xxl', {fontSize: 32}],
]);

export const fontWeightMap = new Map<string, {fontWeight: string}>([
  ['font-thin', {fontWeight: '100'}],
  ['font-extralight', {fontWeight: '200'}],
  ['font-light', {fontWeight: '300'}],
  ['font-normal', {fontWeight: '400'}],
  ['font-medium', {fontWeight: '500'}],
  ['font-semibold', {fontWeight: '600'}],
  ['font-bold', {fontWeight: '700'}],
  ['font-extrabold', {fontWeight: '800'}],
]);

export const textAlignMap = new Map<string, {textAlign: string}>([
  ['text-left', {textAlign: 'left'}],
  ['text-center', {textAlign: 'center'}],
  ['text-right', {textAlign: 'right'}],
]);

export const textTransformMap = new Map<string, {textTransform: string}>([
  ['normal-case', {textTransform: 'none'}],
  ['uppercase', {textTransform: 'uppercase'}],
  ['lowercase', {textTransform: 'lowercase'}],
  ['capitalize', {textTransform: 'capitalize'}],
]);
