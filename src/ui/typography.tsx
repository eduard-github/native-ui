import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {theme} from '../theme';

type TypographyProps = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
};

const Typography: React.FC<TypographyProps> = ({children, style, ...rest}) => {
  return (
    <Text
      // adjustsFontSizeToFit
      style={[theme('text-md', 'font-normal', 'text-left'), style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
