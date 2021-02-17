import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( { id, tittle, url } ) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ tittle } />
            <p>{ tittle }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    tittle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
