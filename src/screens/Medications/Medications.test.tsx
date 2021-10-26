import 'react-native';
import React from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {useFetchMedications} from '../../hooks/useFetchMedications';
import Medications from './Medications';
import {QueryClient, QueryClientProvider} from 'react-query';

let container: any = null;

jest.mock('../../hooks/useFetchMedications', () => ({
  useFetchMedications: jest.fn(),
}));

const mockedMedications = useFetchMedications as jest.Mock;

const mockedData = [
  {
    id: 'df4b747e-dffc-440c-a431-067fdbd2be39',
    diseases: ['blindness', 'color blindness', 'achromatopsia'],
    description:
      'Ad et blanditiis non similique natus ducimus non tenetur. Id voluptate commodi ut dolor fugit. Sed rerum aut enim unde blanditiis eaque saepe quaerat. Est at enim eveniet sequi qui sit est. Consequatur atque provident voluptate non laboriosam voluptates ullam dolorem asperiores.',
    name: 'Levocabastine',
    released: '1981-10-30',
  },
];

describe('<Medications /> Screen', () => {
  beforeEach(async () => {
    mockedMedications.mockImplementation(() => ({}));

    const queryClient = new QueryClient();
    container = render(
      <QueryClientProvider client={queryClient}>
        <Medications />
      </QueryClientProvider>,
    );
    await act(async () => {});
  });

  it('Check that header displays', () => {
    expect(container.getByTestId('root')).toBeTruthy();
  });

  it('Check that logo displays', () => {
    expect(container.getByTestId('logo')).toBeTruthy();
  });

  it('Check that the input field displays', () => {
    expect(container.getByTestId('input')).toBeTruthy();
  });

  it('test input event', () => {
    let searchInput = container.getByTestId('input');
    fireEvent(searchInput, 'onChangeText', 'Blindness');
    expect(searchInput.props.value).toBe('Blindness');
  });
});

describe('With Flatlist', () => {
  /** When a text is searched, a specific set of data that matches either the name or
   * the diseases in the entries should be returned, in our case, we will use the
   * search input "Blindness"*/
  beforeEach(async () => {
    mockedMedications.mockImplementation(() => ({
      filteredDrugs: mockedData,
    }));

    const queryClient = new QueryClient();
    container = render(
      <QueryClientProvider client={queryClient}>
        <Medications />
      </QueryClientProvider>,
    );
    await act(async () => {});
  });

  it('Check that data renders properly in flatlist', () => {
    let searchInput = container.getByTestId('input');
    fireEvent(searchInput, 'onChangeText', 'Blindness');
    let flatlist = container.getByTestId('med-list');
    expect(flatlist).toBeTruthy();
    expect(flatlist.props.data).toEqual(mockedData);
  });
});
