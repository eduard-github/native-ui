import {fontSizeMap, fontWeightMap} from './font';
import {gapMap} from './gap';

export const themeMap = new Map();
const maps = [fontSizeMap, fontWeightMap, gapMap];

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
