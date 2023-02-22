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
import {gapMap} from './gap';

export const themeMap = new Map();
const maps = [
  flexDirectionMap,
  flexWrapMap,
  justifyContentMap,
  alignItemsMap,
  flexMap,
  fontSizeMap,
  fontWeightMap,
  textAlignMap,
  textTransformMap,
  gapMap,
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
