import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type TypographyProps = TextProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
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
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};

const Typography: React.FC<TypographyProps> = ({
  children,
  size = 'md',
  weight = 'normal',
  color = '#000',
  align = 'left',
  transform = 'none',
  style,
  ...rest
}) => {
  const sizeMap = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
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
  } as const;

  const transformMap = {
    none: 'none',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
  } as const;

  const defaultTypographyStyle: TextStyle = {
    fontSize: sizeMap[size],
    fontWeight: weightMap[weight],
    color,
    textAlign: align,
    textTransform: transformMap[transform],
  };

  return (
    <Text style={[defaultTypographyStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default Typography;
