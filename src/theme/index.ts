import {
  flexDirectionMap,
  flexWrapMap,
  justifyContentMap,
  alignItemsMap,
  flexMap,
} from './flex';
import {
  fontSizeMap,
  fontWeightMap,
  textAlignMap,
  textTransformMap,
} from './font';
import {gapMap, marginMap, paddingMap} from './spacing';
import {borderRadiusMap} from './radius';
import {borderColorMap, borderStyleMap, borderWidhtMap} from './border';
import {backgroundColorMap} from './bg-color';

export const themeMap = new Map();
const maps = [
  paddingMap,
  marginMap,
  gapMap,
  flexDirectionMap,
  flexWrapMap,
  justifyContentMap,
  alignItemsMap,
  flexMap,
  fontSizeMap,
  fontWeightMap,
  textAlignMap,
  textTransformMap,
  borderWidhtMap,
  borderColorMap,
  borderStyleMap,
  borderRadiusMap,
  backgroundColorMap,
];

for (const map of maps) {
  for (const [key, value] of map) {
    themeMap.set(key, value);
  }
}

export const theme = (...classes: any[]) => {
  let styles = [];
  for (const name of classes) {
    styles.push(themeMap.get(name));
  }
  console.log('THEME', styles);
  return styles;
};
