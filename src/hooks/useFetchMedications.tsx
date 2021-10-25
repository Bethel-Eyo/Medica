import {useQuery} from 'react-query';
import {getMedications} from '../api';

export const useFetchMedications = () => {
  const {data} = useQuery('medications', getMedications);
  return {data};
};
