import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {theme} from '../theme';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  color?: string;
  buttonStyle?: ViewStyle;
  leftIcon?: any;
  rightIcon?: any;
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonStyle,
  leftIcon,
  rightIcon,
  variant = 'contained',
  color = '#ccc',
  onPress,
  ...rest
}: ButtonProps) => {
  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case 'text':
        return {
          ...buttonStyle,
        };
      case 'contained':
        return {
          backgroundColor: color,
          ...theme('p-2.5', 'bg-current', 'rounded-xxl'),
          ...buttonStyle,
        };
      case 'outlined':
        return {
          ...theme('p-2.5', 'border-1', 'border-black', 'rounded-xxl'),
          ...buttonStyle,
        };
      default:
        return {
          ...buttonStyle,
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
        getButtonStyle(),
        getPressableStyle(pressed),
      ]}
      {...rest}>
      {leftIcon && {leftIcon}}
      {children}
      {rightIcon && {rightIcon}}
    </Pressable>
  );
};

export default Button;
