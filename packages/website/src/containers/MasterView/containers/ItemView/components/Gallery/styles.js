import {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';

const {isPhone, isDesktop, getColor} = stylesHelper;

const mainHeaderHeight = () => document.getElementById("main-header").offsetHeight;

export const GalleryWrapper = css`
    display: flex;
    padding: 10px;
    min-height: 280px;
    
    ${isDesktop(css`
        width: 50%;
        position: sticky;
        top:0;
        height: calc(100vh - ${mainHeaderHeight}px - 20px); 
    `)};
    
    > .item-images {
        height: 100%;
        width: 100%;
        margin: auto;
        display: flex;
        padding: 10px;
        justify-content: center;
        flex-direction: column;
        
        ${isPhone(css`
            flex-direction: row;
        `)};
        
        
        > .main-image-wrapper {
            display: flex;
            padding: 10px;
            
            ${isDesktop(css`
                margin-bottom: 10px;
                flex-grow: 1;
                width: 100%;
            `)};
            
            ${isPhone(css`
                width: 250px;
                margin-left: 10px;
            `)};
            
            > img {
                height: auto;
                width: auto;
                max-height: 100%;
                max-width: 100%;
                margin: auto;
            }
            
        }
        
        > .images-list {
            overflow-x: auto;
            overflow-y: hidden;
            flex-shrink: 0;
            flex-wrap: initial;
            justify-content: space-between;
            height: 64px;
            width: 100%;
            align-items: center;
            
            ${isPhone(css`
                overflow-x: initial;
                overflow-y: auto;
                flex-direction: column;
                height: 100%;
                max-height: 250px;
                width: 64px;
            `)};
            
        }
    }
`;

const getIsMainStyles = ({isMain}) =>
    isMain ?
        css`box-shadow: 0px 0px 4px 3px ${getColor("dark", 'highlight')};`
        : null;

export const ImagesListItem = css`
    cursor: pointer;
    display: flex;
    min-width: 40px;
    height: 40px;
    margin: 5px;
    padding: 5px;
    ${getIsMainStyles};
    
        &:hover {
            box-shadow: 0px 0px 2px 2px ${getColor("dark", "highlight")};
            ${getIsMainStyles};
        }
    
    > img {
        height: auto;
        width: auto;
        max-height: 100%;
        max-width: 100%;
        margin: auto;
    }
    
`;
