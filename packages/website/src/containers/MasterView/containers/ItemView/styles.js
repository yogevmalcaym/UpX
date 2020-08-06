import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import {isDesktop} from "@generic/styles/src/helper";

const {isPhone} = stylesHelper;

export const ItemView = css`
    padding: 10px;
    width: 100%;
    display: flex;
    
    ${isPhone(css`
        flex-direction: column-reverse;   
    `)};
    
`;
