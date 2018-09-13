import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import MochaDemo from './MochaDemo';

const wrapper = shallow( <MochaDemo heading="Mocha test Demo" paragraph="This is a sample paragraph"/>)
describe('Mocha Test Demo',()=>{
    it('render heading ',() => {
        const textMocha = wrapper.find('h1').text();
        console.log('----->',wrapper.find('h1').text());
        expect(textMocha).toEqual('Mocha test Demo')
    })
    it('render p ',() => {
        expect(wrapper.find('p').text()).toEqual('This is a sample paragraph')
    })
})