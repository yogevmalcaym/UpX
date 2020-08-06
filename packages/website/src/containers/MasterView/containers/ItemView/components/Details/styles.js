import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {isDesktop, getColor, blockSeparation, shekelAssignee,isPhone} = stylesHelper;

export const OrderDetails = css`
    display: flex;
    flex-direction: column;
    position: relative;
    
    > h1 {
        position: relative;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 30px;
        ${blockSeparation};
    }
    
    ${isDesktop(css`
        width: 50%;
    `)};
    
    > .amount-and-total-price {
        display: flex;
        margin: 10px 0px;
        padding: 5px 3px;
        
        ${isDesktop(css`
            overflow: auto;
            justify-content: flex-start;
        `)};
        
        ${isPhone(css`
            flex-direction: column;
            width: fit-content;
         `)};
        
        > .amount {
        
            ${isDesktop(css`
                flex-shrink: 0;
            `)};
            
            ${isPhone(css`
                flex-basis: 0;
                width: 100%;
            `)};
        }
        
        > .total-price-wrapper {
            display: flex;
            border-radius: 5px;
            box-shadow: 0px 0px 5px 3px ${getColor('light', 'dark')};
            width: fit-content;
            padding: 5px 3px;
            white-space: nowrap;
            ${shekelAssignee};
            
            ${isDesktop(css`
                margin: 0px 20px 0px 5px;
                align-self: flex-end;
                flex: 1 0 50%;
            `)};
            
            ${isPhone(css`
                margin: 10px 0px;
                width: 100%;
            `)};
            
            > span {
                &:first-child {
                margin-left: 10px;
            }
        }
            
        }
    }
    
    > .description-wrapper {
    
        > h4 {
            text-align: center;
        }
        
        > .description {
            text-align: justify;
            flex-grow: 1;
            padding: 5px;    
        }
        
    }
    
`;
