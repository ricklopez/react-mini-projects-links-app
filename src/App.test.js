import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';


test('renders learn react Nav and List Item', () => {
  const component = renderer.create(<App/>);
                                  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
                               
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
