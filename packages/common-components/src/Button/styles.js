import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import {darken} from 'polished';

const {getColor, appendEasyTransition} = stylesHelper;

export const Button = css`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    outline: none !important;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    color:${getColor('light')};
    ${appendEasyTransition("background-color")}

    ${({primary, tone}) => primary && css`
        background-color: ${getColor('primary', tone)};
        border-color:  ${getColor('primary', tone)};
        
        &:hover {
            background-color: ${props => darken(0.05, getColor('primary', tone)(props))};
        }
    `}    
    
    ${({secondary}) => secondary && css`
        background-color: ${getColor('secondary')};
        border-color:  ${getColor('secondary')};
        
        &:hover {
            background-color: ${props => darken(0.05, getColor('secondary')(props))};
        }
    `}
    
    ${({success}) => success && css`
        background-color: ${getColor('success')};
        border-color:  ${getColor('success')};
        
        &:hover {
            background-color: ${props => darken(0.05, getColor('success')(props))};
        }
    `}
    
    ${({danger}) => danger && css`
        background-color: ${getColor('danger')};
        border-color:  ${getColor('danger')};
        
        &:hover {
            background-color: ${props => darken(0.05, getColor('danger')(props))};
        }
    `}
`;
