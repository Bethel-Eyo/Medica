import React, {FC} from 'react';
import styled from 'styled-components/native';
import ListView from '../../components/ListView';
import {background, primary} from '../../config/color';
import {Medication} from '../../config/interfaces';
import {MedicationsLogic} from './MedicationsLogic';

interface MedicationsProps {}

const Medications: FC<MedicationsProps> = () => {
  const {drugs} = MedicationsLogic();
  return (
    <Container testID="root">
      <HomeHeader>
        <Logo testID="logo" source={require('../../assets/logo.png')} />
        <Title>Medica</Title>
      </HomeHeader>
      <MedList<any>
        data={drugs}
        testID="med-list"
        renderItem={({item}: {item: Medication}) => (
          <ListView
            releaseDate={item.released}
            name={item.name}
            relatedDiseases={item.diseases}
            description={item.description}
          />
        )}
      />
    </Container>
  );
};

export default Medications;

// Flatlist component
const MedList = styled.FlatList`
  width: 100%;
  margin-left: 10%;
`;
// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  width: 100%;
  background: ${background.main};
`;

const HomeHeader = styled.View`
  height: 150px;
  width: 90%;
  background: ${primary.light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 5px;
  align-items: center;
  border-bottom: 5px solid red;
`;

const Logo = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
`;

// Text Components
const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-top: 2%;
  color: ${background.main};
`;
