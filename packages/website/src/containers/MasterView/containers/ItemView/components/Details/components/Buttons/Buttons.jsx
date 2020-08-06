import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import classNames from 'classnames';
import {Button} from '@front/common-components';
import translations from './translations';


export default styled(({className, onBuyNow, onAddToCart}) =>
    <div className={classNames(className, "item-view-buttons")}>
        <Button {...{primary: true, onClick: onBuyNow}}>{translations.BUY_NOW}</Button>
        <Button {...{primary: true, tone: 'light', onClick: onAddToCart}}>{translations.ADD_TO_CART}</Button>
    </div>
)`${styles.Buttons}`;
