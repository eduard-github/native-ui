import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {theme} from '../theme';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  color?: string;
  style?: ViewStyle;
  leftIcon?: any;
  rightIcon?: any;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  leftIcon,
  rightIcon,
  variant = 'contained',
  color = '#ccc',
  onPress,
  ...rest
}: ButtonProps) => {
  const getButtonVariantStyle = (): ViewStyle | any => {
    if (variant === 'contained') {
      return {
        ...theme('p-2.5', 'bg-current', 'rounded-xxl'),
      };
    }
    if (variant === 'outlined') {
      return {
        ...theme('p-2.5', 'border-1', 'border-black', 'rounded-xxl'),
      };
    }
  };

  const getPressableStyle = (isPressed: boolean): ViewStyle => {
    if (isPressed) {
      return {
        opacity: 0.5,
      };
    }
    return {};
  };

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        theme('flex-row', 'justify-center', 'align-center'),
        getButtonVariantStyle(),
        getPressableStyle(pressed),
        style,
      ]}
      {...rest}>
      {leftIcon && {leftIcon}}
      {children}
      {rightIcon && {rightIcon}}
    </Pressable>
  );
};

export default Button;
