import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Input from './index.js';

describe('Input', () => {
  it('renders input without crashing', () => {
    const div = document.createElement('div');
    render(<Input />, div);
    unmountComponentAtNode(div);
  });

  it('expect test something', () => {
    mount(<Input label="Theme"
      keyId="theme"
      onChange={(e) => e} />)
  });

  it('[snapshot] input when hovered', () => {
    const component = renderer.create(<Input label="Theme"
        keyId="theme"
        onChange={ (e) => e } />,
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    tree.children[1].props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    tree.children[1].props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
