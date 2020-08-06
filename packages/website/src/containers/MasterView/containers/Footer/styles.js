import {css} from 'styled-components'
import {helper as stylesHelper} from '@generic/styles';

const {getColor} = stylesHelper;

export const Footer = css`
    height: fit-content;
    align-self: flex-end;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${getColor('secondary')};
    padding: 10px;
    flex-wrap: wrap;
    
    > .details {
        position: relative;
        width:300px;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 30px;
        min-height: 200px;
        
        > .field {
            display: flex;
            color: ${getColor('dark')};
            
            
            > .name {
                margin-left: 10px;
            }
        }
    }
    
    > .mapouter {
        margin: auto;
        position: relative;
        text-align: right;
        height: 250px;
        flex: 1 1 0px;
        min-width: 300px;
    }
    
    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 249px;
        width: 100%;
    }
`;

