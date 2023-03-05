import React, {useMemo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type FontWeightType =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';
type TextAlignType = 'left' | 'center' | 'right';

type TypographyProps = TextProps & {
  size?: number;
  weight?: FontWeightType;
  color?: string;
  align?: TextAlignType;
};

const weightMap = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  size = 16,
  weight = 'normal',
  color = '#333',
  align = 'left',
  style,
  ...rest
}) => {
  const styles = useMemo(
    () => createStyles(size, weightMap[weight], color, align),
    [size, weight, color, align],
  );
  const _style = [styles.container, style];

  return (
    <Text style={_style} {...rest}>
      {children}
    </Text>
  );
};

const createStyles = (
  size: number,
  weight: any,
  color: string,
  align: TextAlignType,
) => {
  return StyleSheet.create({
    container: {
      fontSize: size,
      fontWeight: weight,
      color,
      textAlign: align,
    },
  });
};
