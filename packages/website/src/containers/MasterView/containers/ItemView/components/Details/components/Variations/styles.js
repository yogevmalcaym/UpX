import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {blockSeparation} = stylesHelper;

export const Variation = css`
    display: flex;
    flex-direction: column;
    margin: 10px 0px 20px 0px;
`;


export const Variations = css`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 10px;
    ${blockSeparation};
           
    > h4 {
        text-align: center;
        margin: 10px 0;
    }
    
    > .variations-list {
        justify-content: flex-start;
        flex-direction: column;
    }
    
`;
