import React, {memo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import classNames from 'classnames';

export const Icon = styled(memo(({className, icon: Icon}) =>
    <Icon {...{className: classNames('icon', className)}}/>
))`${styles.Icon}`;
