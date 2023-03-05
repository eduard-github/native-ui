import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface InputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  startIcon?: ImageSourcePropType;
  endIcon?: ImageSourcePropType;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  containerStyle,
  inputStyle,
  labelStyle,
  startIcon,
  endIcon,
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {startIcon && <Image source={startIcon} style={styles.icon} />}
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {endIcon && <Image source={endIcon} style={styles.icon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
