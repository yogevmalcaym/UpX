import React, {memo, useCallback, useEffect, useMemo} from "react";
import {connect} from "react-redux";
import classNames from 'classnames';
import {hooks} from '@generic/utils';
import {ItemCard, List} from '@front/common-components';
import * as selectors from "store/App/MasterView/CategoryView/selectors";
import * as operations from "store/App/MasterView/CategoryView/operations";

const {useSuspense} = hooks;

const ListItem = memo(({
                           id,
                           name,
                           imageURL,
                           description,
                           priceRange,
                           navigateToItem
                       }) => {

    const onClick = useCallback(() => navigateToItem(id), [navigateToItem, id]);

    return <ItemCard {...{
        name,
        imageURL,
        description,
        priceRange,
        onClick,
    }}/>
});

export const CategoryView = memo(({className, category, init, initCompleted, items, reset, navigateToItem}) => {

    useSuspense(init, initCompleted);
    useEffect(() => reset, [reset]);

    const itemsList = useMemo(() =>
        items.map(item => <ListItem {...{key: item.id, ...item, navigateToItem}}/>
        ), [items, navigateToItem]);

    return <List {...{className: classNames(className, 'category-view')}}>
        {itemsList}
    </List>
});

const mapStateToProps = state => ({
    initCompleted: selectors.initCompleted({state}),
    items: selectors.getItems({state}),
});

const mapDispatchToProps = (dispatch, {category}) => ({
    init: () => dispatch(operations.init({category})),
    reset: () => dispatch(operations.reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
