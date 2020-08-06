import {css} from 'styled-components'

export const NavigationBar = css`

    > .root-wrapper {
        flex-direction: row;
    }
    
    .navbar-brand {
        width: fit-content;
        margin-left: 20px;
        
        > .logo {
            height: 60px;
            width: 200px;
            cursor: pointer;
        }
    }
    
    
    .navbar-nav {
        > * {
            text-align: center;
        }
    }
    
    .form-inline {
        flex-flow: row;
        
        > button {
            margin-left: 10px;
        }
    }
    
    .dropdown.nav-item {
        direction: ltr;
    }
    
    .search-container {
        direction: ltr;
        
        > .text {
            direction: rtl;
        }
    }
`;
