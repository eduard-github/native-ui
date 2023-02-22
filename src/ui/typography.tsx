import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {theme} from '../theme';

// type TypographyProps = TextProps & {
//   size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-xxl';
//   weight?:
//     | 'font-thin'
//     | 'font-extralight'
//     | 'font-light'
//     | 'font-normal'
//     | 'font-medium'
//     | 'font-semibold'
//     | 'font-bold'
//     | 'font-extrabold';
//   color?: string;
//   align?: 'text-left' | 'text-center' | 'text-right';
//   transform?: 'normal-case' | 'uppercase' | 'lowercase' | 'capitalize';
// };

type TypographyProps = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
};

const Typography: React.FC<TypographyProps> = ({children, style, ...rest}) => {
  return (
    <Text
      style={[theme('text-md', 'font-normal', 'text-left'), style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
