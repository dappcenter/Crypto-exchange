import React from 'react';

import styled from './header.scss';

console.log(styled);

export default () => {
    return(
        <div>
            <h1 className={styled.text}>Header is here</h1>
        </div>
    )
}