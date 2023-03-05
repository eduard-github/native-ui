import React from 'react';
import {StyleSheet, Pressable, PressableProps, ViewStyle} from 'react-native';

type PressableButtonProps = PressableProps & {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: string;
  fullWidth?: boolean;
  style?: ViewStyle;
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Button: React.FC<PressableButtonProps> = ({
  children,
  variant = 'contained',
  color = 'aqua',
  fullWidth = true,
  style = {},
  startIcon = null,
  endIcon = null,
  disabled = false,
  onPress,
  ...rest
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: variant === 'contained' ? color : 'transparent',
      borderColor: variant === 'outlined' ? color : 'transparent',
      borderWidth: variant === 'outlined' ? 1 : 0,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      style,
    },
  });

  const _style = ({pressed}: any) => [
    styles.container,
    {
      alignSelf: fullWidth ? 'auto' : 'flex-start',
    },
    {
      opacity: pressed || disabled ? 0.7 : 1,
    },
  ];

  return (
    <Pressable onPress={onPress} disabled={disabled} style={_style} {...rest}>
      <>
        {startIcon && {startIcon}}
        {children}
        {endIcon && {endIcon}}
      </>
    </Pressable>
  );
};
