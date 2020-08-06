import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import {transparentize} from 'polished';

const {getColor, appendEasyTransition} = stylesHelper;

export const ItemCard = css`
    position: relative;
    height: 380px;
    width: 280px;
    display: flex;
    flex-direction: column;
    background-color: ${getColor('light')};
    border-radius: 5px;
    transform-style: preserve-3d;
    margin: 10px 5px;
    box-shadow: 0 0 6px -2px ${getColor('dark', 'highlight')};
    
    > .more-details {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        opacity: 0;
        background-color: ${props => transparentize(0.5, getColor('light', 'dark')(props))};
        ${appendEasyTransition("opacity", "box-shadow")};
        
        &:hover {
            box-shadow: 0 0 10px 5px ${getColor('dark', 'light')};
            opacity: 1;
            cursor: pointer;
        }
        
        > span {
          color: ${props => transparentize(0.2, getColor('dark', 'dark')(props))};
          font-size: 1.5em;
          margin: auto;
        }
    }
    
    img {
        width: 100%;
        height: 165px;
        flex-shrink: 0;
    }
    
    > .title {
        color: ${getColor('dark')};
        padding: 10px 0;
        text-align: center;
        font-size: 20px;
        
        p {
            margin: 0;
        }
    }
    
    > .content {
        flex-grow: 1;
        padding: 10px;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-y: auto;
        
        > .description {
            color: ${getColor('dark')};
            margin: 0;
            height: 100%;
            overflow: hidden;
        }
    }
    
    > .footer {
        display: flex;
        direction: ltr;
        padding: 10px;
        
        > .price-wrapper {
            flex-grow: 1;
            display: flex;
            direction: rtl;
            justify-content: center;
            
            > span:last-child {
                color: ${getColor('dark', 'light')};
            }
            
            > span:first-child {
                margin-left: 10px;
                color: ${getColor('dark')};
            }
        }
    } 
`;
