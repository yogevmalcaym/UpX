import {Loader} from '@front/common-components';
import classNames from 'classnames';
import React, {Suspense} from "react";
import {connect} from 'react-redux';
import * as operations from 'store/App/MasterView/Home/operations';
import * as selectors from 'store/App/MasterView/Home/selectors';
import styled from 'styled-components';
import {hooks} from '@generic/utils';
import Gallery from './components/Gallery/Gallery';
import * as styles from './styles';

const {useSuspense} = hooks;

const Home = styled(({className, navigate, init, initCompleted}) => {
    useSuspense(init, initCompleted);

    return <div {...{className: classNames(className, 'home')}}>
        <Gallery {...{navigate}} />
        <Suspense fallback={<Loader size="big"/>}>
        </Suspense>
    </div>
})`${styles.Home}`;

const mapStateToProps = state => ({
    initCompleted: selectors.initCompleted({state}),
});

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(operations.init())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
