import React from 'react';
import {css} from 'styled-components';
import MediaQuery, {useMediaQuery} from 'react-responsive';
import {transparentize} from 'polished';

const phoneMaxWidth = 1000;

export const getColor = (key, tone = 'main') => ({theme}) => theme.colors[key][tone];

export const PhoneMediaQuery = ({children}) => <MediaQuery {...{maxDeviceWidth: phoneMaxWidth}}>{children}</MediaQuery>;

export const PCMediaQuery = ({children}) => <MediaQuery {...{minDeviceWidth: phoneMaxWidth}}>{children}</MediaQuery>;

export const useIsPhone = () => useMediaQuery({query: `(max-width: ${phoneMaxWidth}px)`});

export const isPhone = style => () => css`
    @media (max-width: ${phoneMaxWidth}px) {
        ${style};
    }
`;

export const isDesktop = style => () => css`
    @media (min-width: ${phoneMaxWidth}px) {
        ${style};
    }
`;

const easyTransitionProperties = "0.15s ease-in-out";
export const appendEasyTransition = (...attrs) => () => css`
    transition: ${attrs.join(" " + easyTransitionProperties + ", ") + " " + easyTransitionProperties};
    `;

// When using this, parent should be relative positioned.
export const blockSeparation = () => css`
    &::after {
        position: absolute;
        content: '';
        width: 80%;
        border-bottom: 2px solid ${props => transparentize(0.4, getColor('dark', 'light')(props))};
        bottom:0;
        right: 10%;
    }
`;

export const shekelAssignee = ()=> css`
    &::after {
        content: '₪';
        color: ${getColor('dark', 'dark')};
        align-self: center;
    }    

`;
