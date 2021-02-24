import { getGifs } from "../../helpers/getGifs";

describe( 'Testing getGifs Fetch', () => {

    test('should bring 10 elements', async () => {
         
        const gifs = await getGifs( 'Jujustsu Kaisen ');
        expect( gifs.length ).toBe( 10 );
    })
    
})