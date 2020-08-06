import React, {useState, useCallback, useMemo, useEffect} from 'react';
import Gallery from './components/Gallery/Gallery';
import Details from "./components/Details/Details";
import {hooks} from '@generic/utils';
import * as operations from 'store/App/MasterView/ItemView/operations';
import * as selectors from 'store/App/MasterView/ItemView/selectors';
import {connect} from 'react-redux';
import * as styles from './styles';
import styled from 'styled-components';
import classNames from 'classnames';
import {getAppContext} from 'store/App/AppContext/selectors';
import * as checkoutOperations from 'store/App/MasterView/Checkout/operations';

const {useSuspense} = hooks;

const ItemView = styled(({className, init, initCompleted, itemDetails, onAddToCart, basePublicUrl}) => {
        useSuspense(init, initCompleted);

        const [mainImageId, setMainImageId] = useState(null);

        const currentMainImage = useMemo(() =>
            ({
                id: mainImageId,
                ...itemDetails.images[mainImageId],
                url:
                //TODO: uncomment when there is S3 Buckets
                // basePublicUrl +
                mainImageId && itemDetails.images[mainImageId].urlSuffix
            }), [mainImageId]);

        useEffect(() => {
            const defaultImageId = Object.keys(itemDetails.images).filter((imageId) =>
                itemDetails.images[imageId].isDefault)[0];
            setMainImageId(defaultImageId);
        }, []);

        const onBuyNow = useCallback(() => {
            // TODO: implement this when the checkout page is done.
            console.log("onBuyNow");
        }, []);

        const onAddToCartHandler = useCallback(detailsData =>
                onAddToCart({...detailsData, imageURL: currentMainImage.url})
            , [currentMainImage]);

        return <div {...{className: classNames(className, "itemView")}}>
            <Details {...{...itemDetails, setMainImageId, onBuyNow, onAddToCart: onAddToCartHandler}} />
            <Gallery {...{
                currentMainImage,
                setMainImageId,
                itemImages: itemDetails.images,
                basePublicUrl // TODO: basePublicUrl should be sent with 'items' (S3 folder in the bucket)
            }}/>
        </div>;
    }
)`${styles.ItemView}`;

const mapStateToProps = state => ({
    initCompleted: selectors.initCompleted({state}),
    itemDetails: selectors.itemDetails({state}),
    basePublicUrl: getAppContext({state} || {}).basePublicUrl,
});

const mapDispatchToProps = (dispatch, {id}) => ({
    init: () => dispatch(operations.init({id})),
    reset: () => dispatch(operations.resetData()),
    onAddToCart: cartModel => dispatch(checkoutOperations.addToCart(cartModel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
