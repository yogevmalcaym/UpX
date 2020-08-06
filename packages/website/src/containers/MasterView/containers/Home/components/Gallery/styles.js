import styled, {css} from 'styled-components';
import {helper as stylesHelper} from '@generic/styles';
import {transparentize} from 'polished';

const {getColor, isPhone} = stylesHelper;

const heightWidthRatio = 2;
const maxGalleryWidth = 750;

export const Gallery = css`
    --height: min(100vw / ${heightWidthRatio}, ${maxGalleryWidth / heightWidthRatio}px);
    cursor: pointer;
    width: min(100vw, ${maxGalleryWidth}px);
    height: var(--height);
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 12px 24px ${getColor('dark', 'light')};
    margin: auto;
    
    ${isPhone(css`
        border-radius: 0;
    `)};
    
    > .carousel {
        height: 100%;

        > .carousel-inner {
            height: 100%;
            width: 100%;
        }
    }
    
`;


export const CarouselItem = css`
    height: 100%;
    > .itemContentWrapper {
        height: 100%;
        width: 100%;

        > .shape {
            position: absolute;
            width: 0;
            height: 0;
            border-top: var(--height) solid ${props => transparentize(0.5, getColor("dark", "dark")(props))};
            border-left: var(--height) solid transparent;
        }

        > .text-wrapper {
            padding: 20px;
            position: absolute;
            right:0;
            top: 0;
            width: 40%;
            height: 100%;
            text-align: right;
            color: ${getColor("light")};

            ${isPhone(css`
                > h1 {
                    font-size: 15px;
                }
                
                > h3 {
                    font-size: 10px;
                }
            `)}
        }
`;

const getImageUrl = ({url}) => url;

export const Image = styled.div`
    background-image: url(${getImageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
`;
