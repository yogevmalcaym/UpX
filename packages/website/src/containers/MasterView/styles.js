import {css} from 'styled-components';

export const RootWrapper = css`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;
`;

export const MasterView = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    > .content {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        width: 100%;
        height: 100%;
        
        > .root-wrapper {
            max-width: 1000px;
        }
        
    }
`;
