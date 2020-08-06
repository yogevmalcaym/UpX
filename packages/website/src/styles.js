import {createGlobalStyle} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import bootstrapStyles from './bootstrapStyles';
import {css} from 'styled-components';

const {getColor, isPhone} = stylesHelper;

export const GlobalStyle = createGlobalStyle`
    
    ::-webkit-scrollbar {
        width: 14px;
        height: 14px;
    }

    ::-webkit-scrollbar-thumb {
        height: 6px;
        width: 6px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        background-color: #757576;
        -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
    
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }
    
    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    html,body {
        height: 100%;
        width: 100%;
        margin: 0px;
    }
  
    body {
        background-color: ${getColor('light')};

        font-family: 'Tinos', 'Roboto', sans-serif !important;
          direction: rtl;
    } 
    
    #app {
        height: 100%;
        width: 100%;
        overflow: hidden;
        
        > * {
            height: 100%;
            width: 100%;
        }
    }
    
    ${bootstrapStyles};
`;
