import {useState} from 'react';
import {useFetchMedications} from '../../hooks/useFetchMedications';

export const MedicationsLogic = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const {filteredDrugs} = useFetchMedications(searchTxt);
  const drugs = filteredDrugs;
  return {drugs, searchTxt, setSearchTxt};
};
