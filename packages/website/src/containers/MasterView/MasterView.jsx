import classnames from 'classnames';
import React, {Suspense, useCallback} from 'react';
import {Router} from '@front/router';
import {urls} from '@front/router';
import styled from 'styled-components';
import {Loader} from '@front/common-components';
import CategoryView from './containers/CategoryView/CategoryView';
import ItemView from './containers/ItemView/ItemView';
import AboutUsView from './containers/AboutUsView/AboutUsView';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home';
import RootWrapper from './RootWrapper';
import * as styles from './styles';

const MasterView = styled(({className, navigate}) => {
        const navigateToItem = useCallback(id =>
                navigate(`/${urls.ITEM_VIEW_ROUTE}/${id}`)
            , [navigate]);

        return <div {...{className: classnames(className, 'master-view')}}>
            <Header {...{navigate}} />

            <div {...{className: 'content'}}>
                <RootWrapper>
                    <Suspense {...{fallback: <Loader size='big'/>}}>
                        <Router>
                            <Home {...{path: '/'}} default/>
                            <CategoryView {...{path: `${urls.CATEGORY_VIEW_ROUTE}/:category/*`, navigateToItem}}/>
                            <ItemView {...{path: `${urls.ITEM_VIEW_ROUTE}/:id`}}/>
                            <AboutUsView {...{path: urls.ABOUT_US_VIEW_ROUTE}}/>
                        </Router>
                    </Suspense>
                </RootWrapper>
                <Footer/>
            </div>

        </div>
    }
)`${styles.MasterView}`;

export default () => {
    return <Router>
        <MasterView {...{path: './*'}} default/>
    </Router>
};
