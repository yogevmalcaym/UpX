import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {getColor} = stylesHelper;

export default css`
    .btn-outline-primary {
        color: ${getColor('primary')};
        border-color: ${getColor('primary')};
        
        &:hover {
            color: ${getColor('light')};
            border-color: ${getColor('primary')};
            background-color: ${getColor('primary')};
        }
        
        &:active {
            color: ${getColor('light')} !important;
            border-color: ${getColor('primary')} !important;
            background-color: ${getColor('primary')} !important;
        }
    }
    
    
    .form-control {
        direction: rtl;
        
        &:focus {
            border-color: ${getColor('secondary')};
        }
    }
`;
