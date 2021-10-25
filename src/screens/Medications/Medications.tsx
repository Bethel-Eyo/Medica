import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../../config/color';

interface MedicationsProps {}

const Medications: FC<MedicationsProps> = () => {
  return (
    <Container>
      <Title>Welcome to the Medications Screen</Title>
    </Container>
  );
};

export default Medications;

// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  width: 100%;
  background: ${background.main};
`;

// Text Components
const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-top: 7%;
  color: ${primary.text};
`;
