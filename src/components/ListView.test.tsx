import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ListView from './ListView';
import '@testing-library/jest-native/extend-expect';

let container: any = null;

const createTestProps = () => ({
  name: 'Levocabastine',
  releaseDate: '1981-10-30',
  relatedDiseases: ['blindness', 'color blindness', 'achromatopsia'],
  description:
    'Ad et blanditiis non similique natus ducimus non tenetur. Id voluptate commodi ut dolor fugit. Sed rerum aut enim unde blanditiis eaque saepe quaerat. Est at enim eveniet sequi qui sit est. Consequatur atque provident voluptate non laboriosam voluptates ullam dolorem asperiores.',
});

describe('<ListView /> Component', () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps();
    container = render(<ListView {...props} />);
  });

  it('check that title renders correctly', () => {
    let name = container.getByTestId('item-title');
    expect(name).toBeTruthy();
    expect(name).toHaveTextContent('Levocabastine');
  });

  it('check that release date renders correctly', () => {
    let releaseDate = container.getByTestId('item-release-date');
    expect(releaseDate).toBeTruthy();
    expect(releaseDate).toHaveTextContent('30/10/1981');
  });

  it('check that diseases render correctly', () => {
    let diseases = container.getAllByTestId('item-disease');
    expect(diseases.length).toBeGreaterThan(0);
    expect(diseases[0]).toHaveTextContent('blindness');
  });

  it('check that description renders correctly', () => {
    let description = container.getByTestId('item-description');
    expect(description).toBeTruthy();
    expect(description).toHaveTextContent(
      'Ad et blanditiis non similique natus ducimus non tenetur. Id voluptate commodi ut dolor fugit. Sed rerum aut enim unde blanditiis eaque saepe quaerat. Est at enim eveniet sequi qui sit est. Consequatur atque provident voluptate non laboriosam voluptates ullam dolorem asperiores.',
    );
  });
});
