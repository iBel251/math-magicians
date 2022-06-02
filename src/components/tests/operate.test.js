import React from 'react';
import renderer from 'react-test-renderer';
import operate from '../../logic/operate'

test('renders correctly', () => {
  const tree = renderer.create(<operate />).toJSON();
  expect(tree).toMatchSnapshot();
});

