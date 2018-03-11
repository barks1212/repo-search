import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

describe('<Search>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});