import {useFetchMedications} from '../../hooks/useFetchMedications';

export const MedicationsLogic = () => {
  const {data} = useFetchMedications();
  const drugs = data?.drugs;
  return {drugs};
};
