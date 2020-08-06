import React from 'react';
import classnames from 'classnames';
import {Router as _Router} from '@reach/router';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className, children}) => {
    return <_Router {...{className: classnames(className, 'route')}}>
        {children}
    </_Router>
})`${styles.Router}`;
