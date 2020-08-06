import React, {useCallback} from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar/NavigationBar';
import * as styles from './styles';
import {urls} from '@front/router';

export default styled(({className, navigate}) => {

    const onHomeClick = useCallback(() => navigate(urls.HOME_VIEW_ROUTE), []);
    return <div {...{className: classnames(className, 'header'), id: "main-header"}}>
        <NavigationBar {...{navigate, onHomeClick}} />
    </div>
})`${styles.Header}`
