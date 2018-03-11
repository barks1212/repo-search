import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});