import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe( 'Testing GifGrid', () => {

    const category = 'One Punch';

    test( 'should correctly show the component', () => {
        
        useFetchGifs.mockReturnValue({
            data: [], 
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show items when images are loaded from useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            tittle: 'Image tittle',
            url: 'https://localhost',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs, 
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem').length ).toBe( gifs.length );
    }) 
        
})