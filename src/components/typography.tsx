import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type TypographyProps = TextProps & {
  size?: number;
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
  color?: string;
  align?: 'left' | 'center' | 'right';
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
  const styles = StyleSheet.create({
    text: {},
  });

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

  const _style = [
    styles.text,
    {
      fontSize: size,
      fontWeight: weightMap[weight],
      color,
      textAlign: align,
    },
    style,
  ];

  return (
    <Text style={_style} {...rest}>
      {children}
    </Text>
  );
};
