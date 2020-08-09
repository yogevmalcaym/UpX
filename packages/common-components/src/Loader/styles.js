import {css} from 'styled-components';

const dimensions = {
    big: "100px",
    medium: "50px",
    small: "30px"
};

const getDimensions = ({size}) => ({
    height: dimensions[size],
    width: dimensions[size]
});

export const LoaderWrapper = css`
    display: flex;
    height: 100%;
    width: 100%;
    ${({abs}) => abs && {position: 'absolute'}}

    > .loader {
        margin: auto;
        ${getDimensions}
    }
`;
