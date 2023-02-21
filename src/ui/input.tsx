import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  leftIcon?: any;
  rightIcon?: any;
  iconStyle?: ImageStyle;
  spacing?: number;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  iconStyle,
  spacing = 0,
  ...rest
}: InputProps) => {
  return (
    <View style={[defaultContainerStyle(spacing), containerStyle]}>
      {leftIcon && (
        <Image source={leftIcon} style={[defaultIconStyle, iconStyle]} />
      )}
      <RNTextInput
        style={[
          defaultInputStyle,
          inputStyle,
          leftIcon && {paddingLeft: 40},
          rightIcon && {paddingRight: 40},
        ]}
        {...rest}
      />
      {rightIcon && (
        <Image source={rightIcon} style={[defaultIconStyle, iconStyle]} />
      )}
    </View>
  );
};

const defaultContainerStyle = (spacing: number): ViewStyle => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: spacing,
});

const defaultInputStyle: TextStyle = {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  fontSize: 16,
  color: '#000',
  flex: 1,
};

const defaultIconStyle: ImageStyle = {
  position: 'absolute',
  left: 10,
};

export default Input;
