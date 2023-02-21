import React from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image,
} from 'react-native';

interface ButtonProps extends PressableProps {
  children: React.ReactNode,
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
  variant,
  color = '#000',
  ...rest
}: ButtonProps) => {
  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case 'text':
        return {
          ...defaultButtonStyle,
          ...buttonStyle,
        };
      case 'contained':
        return {
          backgroundColor: color,
          borderRadius: 10,
          padding: 10,
          ...defaultButtonStyle,
          ...buttonStyle,
        };
      case 'outlined':
        return {
          borderWidth: 1,
          borderColor: color,
          borderRadius: 10,
          padding: 10,
          ...defaultButtonStyle,
          ...buttonStyle,
        };
      default:
        return {
          ...defaultButtonStyle,
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
      style={({pressed}) => [getButtonStyle(), getPressableStyle(pressed)]}
      {...rest}>
      {/* {leftIcon && <Image source={leftIcon} style={defaultIconStyle} />} */}
      {children}
      {/* {rightIcon && <Image source={rightIcon} style={defaultIconStyle} />} */}
    </Pressable>
  );
};

const defaultButtonStyle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

const defaultIconStyle: ViewStyle = {
  width: 20,
  height: 20,
  marginRight: 5,
  marginLeft: 5,
};

export default Button;
