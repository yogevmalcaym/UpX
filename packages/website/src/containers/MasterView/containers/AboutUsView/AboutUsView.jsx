import React, {useEffect} from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";
import styled from 'styled-components';
import {Loader} from '@front/common-components';
import * as styles from './styles';
import * as operations from 'store/App/MasterView/AboutUs/operations';
import * as selectors from 'store/App/MasterView/AboutUs/selectors';
import translations from './translations';
import {hooks} from "@generic/utils";

const {useSuspense} = hooks;

const aboutUsComponent = styled(({className, init, reset, initCompleted, description, imageURL}) => {

    useSuspense(init, initCompleted);
    useEffect(() => reset, []);

    if (!initCompleted)
        return <Loader size='big'/>;

    return <div {...{className: classnames(className, 'about-us-view')}}>
        <div className="content">
            <div className='image-container'>
                <img {...{src: imageURL}} />
                <div className='title'>
                    <h1>{translations.TITLE}</h1>
                </div>
            </div>

            <div className='description'>
                <p>{description}</p>
            </div>

        </div>

    </div>
})`${styles.AboutUsView}`;


const mapStateToProps = state => {

    const {
        description,
        imageURL,
    } = selectors.getContext({state}) || {};

    return {
        initCompleted: selectors.initCompleted({state}),
        description,
        imageURL,
    };
};

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(operations.init()),
    reset: () => dispatch(operations.reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(aboutUsComponent);
