import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import * as styles from './styles';

export const FieldLabel = styled(({className, children}) =>
    <label {...{className: classNames(className)}}>
        {children}
    </label>
)`${styles.Label}`;
