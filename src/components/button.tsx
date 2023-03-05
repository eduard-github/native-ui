import React, {useMemo} from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
} from 'react-native';

type PressableButtonProps = PressableProps & {
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: string;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
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
  const styles = useMemo(
    () => createStyles(variant, color, fullWidth),
    [variant, color, fullWidth],
  );

  const _style = ({pressed}: any) => [
    styles.container,
    {
      opacity: pressed || disabled ? 0.7 : 1,
    },
    style,
  ];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={_style as StyleProp<ViewStyle>}
      {...rest}>
      <>
        {startIcon && {startIcon}}
        {children}
        {endIcon && {endIcon}}
      </>
    </Pressable>
  );
};

const createStyles = (variant: string, color: string, fullWidth: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: variant === 'contained' ? color : 'transparent',
      borderColor: variant === 'outlined' ? color : 'transparent',
      borderWidth: variant === 'outlined' ? 1 : 0,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignSelf: fullWidth ? 'auto' : 'flex-start',
    },
  });
