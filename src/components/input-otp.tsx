import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface OTPInputProps {
  length: number;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onCodeChanged?: (code: string) => void;
}

export const OTPInput: React.FC<OTPInputProps & TextInputProps> = ({
  length,
  style,
  inputStyle,
  onCodeChanged,
  ...rest
}) => {
  const [code, setCode] = useState(new Array(length).fill(''));
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus on the next input if the current input is filled
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call the onCodeChanged prop with the updated code
    if (onCodeChanged) {
      onCodeChanged(newCode.join(''));
    }
  };

  return (
    <View
      style={[
        {flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
        style,
      ]}>
      {code.map((value, index) => (
        <TextInput
          key={index}
          style={[
            {
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              padding: 10,
              margin: 10,
              width: 40,
              textAlign: 'center',
            },
            inputStyle,
          ]}
          value={value}
          onChangeText={value => handleCodeChange(value, index)}
          keyboardType="number-pad"
          maxLength={1}
          autoFocus={index === 0}
          ref={ref => {
            inputRefs.current[index] = ref;
          }}
          {...rest}
        />
      ))}
    </View>
  );
};
