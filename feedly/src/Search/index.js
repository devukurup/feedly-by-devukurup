import React from 'react';
import ReactDOM from 'react-dom';

function Search() {
return ReactDOM.createPortal(
    <div style={{position: 'absolute'}}>
        
    </div>,
    document.getElementById('search-portal-root')
)
}

export default Search
