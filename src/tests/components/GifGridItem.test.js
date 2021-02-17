import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GridGifItem', () => {

    const tittle = 'A tittle';
    const url = 'https://localhost.algo.jpg';
    const wrapper = shallow( <GifGridItem tittle={ tittle } url={ url }/>);

    test('It must show the component correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'It must have a paragraph with the tittle', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( tittle );
        
    });

    test( 'It must have the image equal to the url and alt of the props', () => {
        const img = wrapper.find( 'img' );
        expect( img.props().src ).toBe( url )
        expect(img.props().alt ).toBe( tittle );
    })

    test('should have animate_fadeIn', () => {
        const div = wrapper.find( 'div' );
        const className = div.props().className
        expect( className.includes( 'animate__fadeIn ') ).toBe( true );
    })
    

})