import React, {memo} from 'react';
import ClassNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export const List = styled(memo(({className, children}) =>
    <div {...{className: ClassNames(className, 'list')}}>
        {children}
    </div>
))`${styles.List}`;

export {default as ItemCard} from '../ItemCard/ItemCard';
