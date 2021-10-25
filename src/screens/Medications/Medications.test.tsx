import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import {useFetchMedications} from '../../hooks/useFetchMedications';
import Medications from './Medications';
import {QueryClient, QueryClientProvider} from 'react-query';
import {getMedications} from '../../api';

let container: any = null;

jest.mock('../../hooks/useFetchMedications', () => ({
  useFetchMedications: jest.fn(),
}));

const mockedMedications = useFetchMedications as jest.Mock;

describe('<Medications />', () => {
  beforeEach(async () => {
    mockedMedications.mockImplementation(() => ({
      data: getMedications(),
    }));

    const queryClient = new QueryClient();
    container = render(
      <QueryClientProvider client={queryClient}>
        <Medications />
      </QueryClientProvider>,
    );
    await act(async () => {});
  });

  it('Check that header displays', () => {
    //expect(mocked(useFetchMedications)).toHaveBeenCalled();
    expect(container.getByTestId('root')).toBeTruthy();
  });

  it('Check that logo displays', () => {
    expect(container.getByTestId('logo')).toBeTruthy();
  });

  it('Check that data renders properly in flatlist', () => {
    let flatlist = container.getByTestId('med-list');
    expect(flatlist).toBeTruthy();
    let data = getMedications();
    expect(flatlist.props.data).toEqual(data.drugs);
  });
});
