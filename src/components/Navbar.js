

import React from 'react';

const Navbar = ({setPage} ) => {
    return (
        <nav>
            <button onClick={() => setPage('collection') }>Decouvrez la collection</button>
        </nav>
    );
};

export default Navbar;