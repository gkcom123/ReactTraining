import React from 'react'
import Stub from './stub';
import {shallow} from 'enzyme';
import Label from '../../Label';

describe('<Label /> Block testing',function(){
    //This is a actual component which you are going to test
    const component = shallow(<Label htmlFor='test' textLabel='This is a Label'></Label>);
    it('Should be a label',() =>{
        expect(component.find('label').length).toBe(1);
    })
    it('Should be a "for" attribute',() =>{
        expect(component.find('label[htmlFor="'+Stub.htmlFor+'"]').length).toBe(1);
    })
    it('Should have some text',() =>{
        expect(component.find('label').text()).toBe(Stub.textLabel)
    })

})
