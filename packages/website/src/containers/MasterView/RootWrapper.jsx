import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import {helper as stylesHelper} from '@generic/styles';

const {useIsPhone} = stylesHelper;

export default styled(({className, children}) => {
    const isPhone = useIsPhone();
    if (isPhone)
        return children;

    return <div {...{className: classnames(className, 'root-wrapper')}}>
        {children}
    </div>
})`${styles.RootWrapper}`;
