import React, {useState, useCallback, memo, useEffect, useMemo} from 'react';
import Variations from "./components/Variations/Variations";
import * as styles from './styles';
import styled from 'styled-components';
import classNames from 'classnames';
import translations from './translations';
import {FieldLabel} from '@front/common-components';
import Buttons from './components/Buttons/Buttons';

const AmountAndTotalPrice = memo(({onChange, totalPrice, selectedAmount}) =>
    <div className="amount-and-total-price">
        <div className="amount">
            <FieldLabel>{translations.AMOUNT}</FieldLabel>
            <input {...{
                className: "form-control",
                min: "1",
                onChange,
                type: "number",
                value: selectedAmount,
            }}/>
        </div>
        <div className="total-price-wrapper">
            <span>{translations.TOTAL_PRICE}:</span>
            <span>{totalPrice}</span>
        </div>
    </div>);

export default styled(({className, name, description, basePrice, discounts, amount, variations, setMainImageId, onBuyNow, onAddToCart, id}) => {

    const [selectedAmount, setSelectedAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(basePrice);

    const defaultVariation = useMemo(() =>
            Object.keys(variations).reduce((acc, variationId) => {
                const defaultOptionId = Object.keys(variations[variationId].options).filter((optionId) =>
                    variations[variationId].options[optionId].isDefault)[0];
                if (defaultOptionId) return [...acc, `${variationId}/${defaultOptionId}`];
                return acc;
            }, [])
        , [variations]);

    const [selectedVariations, setSelectedVariations] = useState(defaultVariation);

    const onSetVariationHandler = useCallback(({variationId, optionId}) => {
        let isExist = false;
        const currentVariations = [...selectedVariations];
        const newOptionKey = `${variationId}/${optionId}`;

        for (let i = 0; i < selectedVariations.length; i++)
            if (selectedVariations[i].split('/')[0] === variationId) {
                currentVariations[i] = newOptionKey;
                isExist = true;
                break;
            }

        if (!isExist) currentVariations.push(newOptionKey);

        setSelectedVariations(currentVariations);
    }, [setSelectedVariations, selectedVariations]);

    const onSetMainImageIdHandler = useCallback(({variationId, optionId}) =>
        variations[variationId].options[optionId].imageId &&
        setMainImageId(variations[variationId].options[optionId].imageId)
        , [variations, setMainImageId]);


    useEffect(() => {
        let totalPrice = basePrice;
        selectedVariations.forEach((optionKey) => {
            const [variationId, optionId] = optionKey.split('/');
            totalPrice += variations[variationId].options[optionId].extraPrice || 0;
        })
        setTotalPrice(totalPrice);
    }, [selectedVariations]);

    const onAmountChangeHandler = useCallback(e =>
            !e.target.value || parseInt(e.target.value) <= 0 ?
                setSelectedAmount(1) :
                setSelectedAmount(e.target.value)
        , [setSelectedAmount]);

    const getCartModelVariations = () => selectedVariations.map(key => {
        const [variationId, optionId] = key.split('/');
        return {
            id: variationId,
            name: variations[variationId].name,
            option: {
                id: optionId,
                name: variations[variationId].options[optionId].name
            }
        }
    })

    const onAddToCartHandler = useCallback(() =>
            onAddToCart({
                id,
                name,
                variations: getCartModelVariations(),
                price: totalPrice,
                amount: selectedAmount,
            })
        , [onAddToCart, selectedVariations, totalPrice, selectedAmount, name, id]);

    return <div className={classNames(className, "details")}>
        <h1>{name}</h1>
        <Variations {...{variations, onSetVariationHandler, selectedVariations, onSetMainImageIdHandler}} />
        <AmountAndTotalPrice {...{onChange: onAmountChangeHandler, selectedAmount, totalPrice}}/>
        <Buttons {...{onBuyNow, onAddToCart: onAddToCartHandler}}/>
        <div className="description-wrapper">
            <h4>{translations.DESCRIPTION_HEADING}</h4>
            <p className="description">
                {description}
            </p>
        </div>
    </div>;

})`${styles.OrderDetails}`;
