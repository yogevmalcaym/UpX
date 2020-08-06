import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import {transparentize} from 'polished';

const {getColor} = stylesHelper;

export const AboutUsView = css`
    
    > .content {
        display: flex;
        flex-direction: column;
        height: 100%;
             
             
        > .image-container {    
            position: relative;
            
            
            img {
                width: 100%;
            }   
            
            > .title {
                position: absolute;
                right: 0;
                bottom: 12px;
                width: 200px;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                text-align: right;
                padding-right: 10px;       
                background-color: ${props => transparentize(0.4, getColor('dark','dark')(props))};
                color: ${getColor('light')};
                
                h1 {
                    margin: 0;                
                }
            }
        }     
             
        > .description {
            flex-grow: 1;
            color: ${getColor('dark')};
            max-width: 600px;
            text-align: right;
            padding: 20px;
        }
    }
`;
