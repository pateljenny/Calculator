import React from 'react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App  from './App';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
})

describe('App component', () =>{
     it('has button', () => {
        const buttons = wrapper.find('Button')
         expect(buttons.length).toEqual(18);
     })



//    it('has not found input',()=>{
//        const input =  wrapper.find('input')
//        expect(input.length).toEqual(0);
//    })
   
})