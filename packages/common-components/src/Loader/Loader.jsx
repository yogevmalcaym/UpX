import React from 'react';
import classnames from 'classnames';
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components';
import * as styles from './styles';

export const Loader = styled(({className}) =>
    <div {...{className: classnames(className, 'loader-wrapper')}}>
        <Spinner className="loader" animation="grow" variant="primary" />
    </div>
)`${styles.LoaderWrapper}`;