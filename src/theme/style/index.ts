import {gapMap, marginMap, paddingMap} from './view';
import {
  fontSizeMap,
  fontWeightMap,
  textAlignMap,
  textTransformMap,
} from './text';

type FontSize = keyof typeof fontSizeMap;
type FontWeight = keyof typeof fontWeightMap;
type TextAlign = keyof typeof textAlignMap;
type TextTransform = keyof typeof textTransformMap;

type Margin = keyof typeof marginMap;
type Padding = keyof typeof paddingMap;
type Gap = keyof typeof gapMap;

type UtilityFn = (value: string) => {[key: string]: string | number};
type Utilities = Record<string, UtilityFn>;

const utilities: Utilities = {
  // fontFamily: (value) => ({ fontFamily: value }),
  fontSize: (value: FontSize | string) => ({
    fontSize: fontSizeMap[value as FontSize] || value,
  }),
  fontWeight: (value: FontWeight | string) => ({
    fontSize: fontWeightMap[value as FontWeight] || value,
  }),
  textAlign: (value: TextAlign | string) => ({
    textAlign: textAlignMap[value as TextAlign] || value,
  }),
  textTransform: (value: TextTransform | string) => ({
    textAlign: textTransformMap[value as TextTransform] || value,
  }),

    // Margin utilities
  m: (value: Margin | string) => ({
    margin: marginMap[value as Margin] || value,
  }),
  //   mx: (value: any) => ({marginHorizontal: value}),
  //   my: (value: any) => ({marginVertical: value}),
  //   mt: (value: any) => ({marginTop: value}),
  //   mr: (value: any) => ({marginRight: value}),
  //   mb: (value: any) => ({marginBottom: value}),
  //   ml: (value: any) => ({marginLeft: value}),

    // Padding utilities
  p: (value: Padding | string) => ({
    padding: paddingMap[value as Padding] || value,
  }),
  //   px: (value: any) => ({paddingHorizontal: value}),
  //   py: (value: any) => ({paddingVertical: value}),
  //   pt: (value: any) => ({paddingTop: value}),
  //   pr: (value: any) => ({paddingRight: value}),
  //   pb: (value: any) => ({paddingBottom: value}),
  //   pl: (value: any) => ({paddingLeft: value}),

    // Gap utilities
  g: (value: Gap | string) => ({
    gap: gapMap[value as Gap] || value,
  }),
  //   rowGap: (value: any) => ({rowGap: value}),
  //   columnGap: (value: any) => ({columnGap: value}),
  //

  // Background color utilities
  // bg: (value) => ({ backgroundColor: value }),

  //   // Border utilities
  //   border: (value: any) => ({borderWidth: value}),
  //   borderTop: (value: any) => ({borderTopWidth: value}),
  //   borderRight: (value: any) => ({borderRightWidth: value}),
  //   borderBottom: (value: any) => ({borderBottomWidth: value}),
  //   borderLeft: (value: any) => ({borderLeftWidth: value}),
  //   // borderColor: (value: any) => ({ borderColor: colors[value] || value }),
  //   rounded: (value: any) => ({borderRadius: value}),
  //
  //   // Flex utilities
  //   flex: (value: any) => ({flex: value}),
  //   flexGrow: (value: any) => ({flexGrow: value}),
  //   flexShrink: (value: any) => ({flexShrink: value}),
  //   flexBasis: (value: any) => ({flexBasis: value}),
  //

  //   // Height and width utilities
  //   h: (value: any) => ({height: value}),
  //   w: (value: any) => ({width: value}),
  //   minHeight: (value: any) => ({minHeight: value}),
  //   minWidth: (value: any) => ({minWidth: value}),
  //   maxHeight: (value: any) => ({maxHeight: value}),
  //   maxWidth: (value: any) => ({maxWidth: value}),


  //   // Text color utilities
  //   // textColor: (value: any) => ({ color: colors[value] || value }),
  //
  //   // Text decoration utilities
  //   underline: (value: any) => ({textDecorationLine: value}),
  //   lineThrough: (value: any) => ({textDecorationLine: value}),
  //
  //   // Vertical alignment utilities
  //   items: (value: any) => ({alignItems: value}),
  //   alignContent: (value: any) => ({alignContent: value}),
  //   alignSelf: (value: any) => ({alignSelf: value}),
  //
  //   // White space utilities
  //   whitespace: (value: any) => ({whiteSpace: value}),
  //
  //   // Z-index utilities
  //   z: (value: any) => ({zIndex: value}),
  //
  //   // ...
};

type ClassName =
  // | keyof typeof bgColors
  // | keyof typeof borderWidths
  // | keyof typeof borderColors
  // | keyof typeof borderRadiuses
  // | keyof typeof flexValues
  // | keyof typeof fontFamilies
  | keyof typeof fontSizeMap
  | keyof typeof fontWeightMap
  | keyof typeof textAlignMap
  | keyof typeof textTransformMap
  | keyof typeof marginMap
  | keyof typeof paddingMap
  | keyof typeof gapMap
// | keyof typeof sizeValues
// | keyof typeof spacingValues
// | keyof typeof textColors
// | keyof typeof alignItemsValues
// | keyof typeof alignContentValues
// | keyof typeof alignSelfValues
// | keyof typeof whitespaceValues
// | keyof typeof zIndexValues;

const tw = (...classNames: ClassName[]) => {
  const styles = classNames
    .map((className: ClassName) => {
      const [property] = className.split('-');
      const utilityFn = utilities[property];
      return utilityFn ? utilityFn(className) : null;
    })
    .filter(Boolean);
  return styles;
};

console.log('res', tw());
