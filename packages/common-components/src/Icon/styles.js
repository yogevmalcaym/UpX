import {css} from 'styled-components';

const dimensions = {
    big: "64",
    med: "32",
    sm: "24"
};

export const Icon = css`
    ${({style}) => style};
    
    ${({size}) => {
        const translatedSize = dimensions[size || 'sm'];
        return css`
            width: ${translatedSize}px;
            height: ${translatedSize}px;
        `;
    }};
`;