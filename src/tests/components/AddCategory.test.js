import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe( 'Testing of AddCategory' , () => {

    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>)
    })
    
    test('should be correctly shown', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('should change the text box', () => {
        
        const value = 'Event content'
        const input = wrapper.find( 'input' );
        
        input.simulate( 'change', {target: { value }} )
        
        expect( wrapper.find( 'p' ).text().trim() ).toBe( value )
        
    });
    
    test('should NOT post the informaiton on submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} })
        
        expect( setCategories ).not.toHaveBeenCalled();
        
    });
    
    test('should call setCategories and clean the textbox', () => {
        
        const value = 'Event content'
        const input = wrapper.find( 'input' );

        input.simulate( 'change' , { target: { value }});

        wrapper.find( 'form' ).simulate( 'submit' , { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( input.props().value ).toBe ( '' ); 
        
    })
    

    
    
})