import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {blockSeparation} = stylesHelper;

export const Buttons = css`
    display: flex;
    justify-content: flex-start;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    ${blockSeparation};
    
    > button {
        margin: 10px 5px;
        
            &:first-child {
                margin-right: 0;
            }
    }
`;
