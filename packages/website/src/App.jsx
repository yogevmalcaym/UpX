import {Loader} from '@front/common-components';
import React, {Suspense} from "react";
import {connect} from "react-redux";
import {ThemeProvider} from 'styled-components';
import {theme} from '@generic/styles';
import {hooks} from '@generic/utils';
import * as operations from './store/App/operations';
import * as selectors from './store/App/selectors';
import MasterView from './containers/MasterView/MasterView';
import * as styles from './styles';

const {useSuspense} = hooks;

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.error(error)
    }

    render() {
        return this.props.children;
    }
}

const App = ({init, initCompleted}) => {

    useSuspense(init, initCompleted);

    return <>
        <ErrorBoundary>
            <ThemeProvider {...{theme}}>
                <styles.GlobalStyle/>
                <MasterView/>
            </ThemeProvider>
        </ErrorBoundary>
    </>;
};

export const mapStateToProps = (state, ownProps) => ({
    initCompleted: selectors.initCompleted({state})
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
    init: () => dispatch(operations.init())
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default () =>
    <Suspense fallback={<Loader abs size="big"/>}>
        <ConnectedApp/>
    </Suspense>;
