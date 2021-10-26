import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../config/color';
import {KeyboardTypeOptions} from 'react-native';

interface InputFieldProps {
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  value?: string;
  onChangeText?: any;
}

const InputField: FC<InputFieldProps> = ({
  keyboardType,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <Container>
      <CustomInput
        testID="input"
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={primary.light}
      />
    </Container>
  );
};

export default InputField;

const Container = styled.View`
  background: ${background.main};
  border: 1px solid ${primary.light};
  border-radius: 8px;
  margin-top: 15px;
  padding-left: 20px;
  height: 50px;
  width: 90%;
`;

// Input Field
const CustomInput = styled.TextInput`
  width: 100%;
  height: 100%;
  margin-top: 0px;
  color: ${primary.text};
`;
