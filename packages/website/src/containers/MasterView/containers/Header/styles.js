import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {getColor} = stylesHelper;

export const Header = css`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 5px ${getColor('dark', 'light')};
    background-color: ${getColor('light','dark')};
    
    > .logo {
        height: 70px;
        width: 200px;
    }
`;
