import React from 'react';
import LinkDemo from './Link';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered',() =>{
    const component = renderer.create(<LinkDemo page="https://www.google.com/">Google nEw</LinkDemo>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger the callback
    tree.props.onMouseEnter();
    //re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger the callback
    tree.props.onMouseLeave();
    //re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
