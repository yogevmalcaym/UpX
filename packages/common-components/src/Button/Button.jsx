import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export const Button = styled(({className, onClick, children}) =>
    <button {...{className, onClick}}>
        {children}
    </button>
)`${styles.Button}`;