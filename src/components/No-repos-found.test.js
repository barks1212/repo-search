import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import NoReposFound from './No-repos-found';

describe('<NoReposFound>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<NoReposFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});