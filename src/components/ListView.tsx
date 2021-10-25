import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../config/color';
import {restructureDate} from '../helpers/utils';

export interface ListViewProps {
  name: string;
  releaseDate: string;
  relatedDiseases: Array<string>;
  description: string;
}

const ListView: FC<ListViewProps> = ({
  name,
  releaseDate,
  relatedDiseases,
  description,
}) => {
  return (
    <Container testID="contact-item">
      <Title>{name}</Title>
      <DateTxt>{restructureDate(releaseDate)}</DateTxt>
      <Hint>Diseases</Hint>
      <Row>
        {relatedDiseases.map((disease, index) => (
          <DiseaseTxt key={index}>{disease}, </DiseaseTxt>
        ))}
      </Row>
      <Hint>Description</Hint>
      <DiscribeTxt>{description}</DiscribeTxt>
    </Container>
  );
};

export default ListView;

const Container = styled.View`
  width: 90%;
  background: ${background.light};
  border-radius: 5px;
  margin-top: 10px;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 18px;
  margin-left: 3%;
  font-weight: 500;
  margin-top: 15px;
`;

const Row = styled.Text`
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  margin-left: 3%;
  margin-top: 3px;
`;

// Texts
const DateTxt = styled.Text`
  color: ${primary.text};
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const DiseaseTxt = styled.Text`
  color: ${primary.text};
  font-size: 13px;
  font-weight: 400;
`;

const Hint = styled.Text`
  color: ${primary.main};
  font-size: 13px;
  font-weight: 400;
  margin-top: 7px;
  margin-left: 3%;
`;

const DiscribeTxt = styled.Text`
  color: ${primary.text};
  font-size: 13px;
  font-weight: 400;
  width: 90%;
  margin-left: 3%;
`;
