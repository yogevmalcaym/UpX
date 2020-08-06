import React, {memo, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import RootWrapper from '../../../../RootWrapper';
import * as styles from './styles';
import translations from './translations';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import * as selectors from "store/App/MasterView/Header/Menu/selectors";
import * as operations from "store/App/MasterView/Header/Menu/operations";
import {connect} from "react-redux";
import {wrapMenuItems} from "./menuUtils";
import {useSuspense} from "@generic/utils/src/hooks";


const onClickNavigationProvider = ({url, navigate}) => () => {
    const basePath = '/';
    const path = url === basePath ? url : [basePath, url].join('');
    navigate(path);
};

const Dropdown = ({text, items, navigate}) => {

    const navItems = useMemo(() =>
            items.map(({url, text}, index) =>
                <NavDropdown.Item {...{
                    key: index,
                    onClick: onClickNavigationProvider({url, navigate})
                }}>
                    {text}
                </NavDropdown.Item>)
        , [items]);

    return <NavDropdown {...{title: text, id: 'basic-nav-dropdown'}}>
        {navItems}
    </NavDropdown>
};

const NavigationList = ({menuItems, navigate}) => {
    const items = useMemo(() => menuItems.map(({text, url, children}, index) => {
            if (children)
                return <Dropdown {...{
                    key: index,
                    onClick: onClickNavigationProvider({url, navigate}),
                    href: '',
                    items: children,
                    text,
                    navigate
                }}/>;
            else
                return <Nav.Link {...{
                    key: index,
                    onClick: onClickNavigationProvider({url, navigate})
                }}>
                    {text}
                </Nav.Link>
        }
    ), [menuItems]);

    return <React.Fragment>
        {items}
    </React.Fragment>
};

const NavigationBar = styled(memo(({className, init, items, reset, initCompleted, navigate, onHomeClick}) => {

        const [menuItems, setMenuItems] = useState([]);
        useSuspense(async () => init(), initCompleted);

        useEffect(() => reset, []);
        useEffect(() => {
            const menuItems = wrapMenuItems({items});
            setMenuItems(menuItems);
        }, [items, setMenuItems]);

        return <Navbar {...{className, expand: "lg"}}>
            <RootWrapper>
                <Navbar.Brand {...{onClick: onHomeClick}} >
                    <img {...{
                        className: 'logo',
                        onClick: onHomeClick,
                        src: 'https://colleenkeith.com/wp-content/uploads/2017/01/spotify-logo-transparent-spotify2015.png'
                    }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav>
                        <NavigationList {...{menuItems, navigate}}/>
                    </Nav>
                    <Form {...{className: 'search-container mr-auto', onSubmit: e => e.preventDefault()}} inline>
                        <FormControl {...{type: 'text', placeholder: translations.SEARCH_ITEM, className: 'mr-sm-2'}}/>
                        <Button {...{variant: 'outline-primary'}}>{translations.SEARCH}</Button>
                    </Form>
                </Navbar.Collapse>
            </RootWrapper>
        </Navbar>
    }
))`${styles.NavigationBar}`;

const mapStateToProps = state => ({
    initCompleted: selectors.initCompleted({state}),
    items: selectors.getMenuItems({state}),
});

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(operations.init()),
    reset: () => dispatch(operations.reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
