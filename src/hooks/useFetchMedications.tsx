import {useQuery} from 'react-query';
import {getMedications} from '../api';
import {Medication} from '../config/interfaces';

export const useFetchMedications = (searchTxt: string) => {
  const {data} = useQuery('medications', getMedications);
  let drugs = data?.drugs;
  let filteredDrugs = [];
  if (searchTxt !== '') {
    filteredDrugs = drugs?.filter(
      (medication: Medication) =>
        medication.name.includes(searchTxt) ||
        medication.diseases.some((disease: string) =>
          disease.includes(searchTxt.toLowerCase()),
        ),
    );
  }
  return {filteredDrugs};
};
