import React, {useEffect, memo, useCallback, useMemo} from 'react';
import translations from './translations';
import * as styles from './styles';
import styled from 'styled-components';
import {List, FieldLabel} from '@front/common-components';
import classNames from 'classnames';

const Variation = styled(memo(({className, name, options, onSetVariationHandler, defaultValue, onSetMainImageIdHandler, variationId}) => {

    const optionsList = useMemo(() =>
        Object.keys(options).map(id =>
            <option {...{key: id, value: id}}>
                {options[id].name}
            </option>
        ), [options])

    const onChange = useCallback(e => {
        onSetVariationHandler({variationId, optionId: e.target.value});
        onSetMainImageIdHandler({variationId, optionId: e.target.value});
    }, [onSetVariationHandler, onSetMainImageIdHandler]);

    return <div {...{className, key: name}}>
        <FieldLabel>{name}</FieldLabel>

        <select {...{onChange, className: "custom-select", defaultValue}}>
            {optionsList}
        </select>
    </div>;
}))`${styles.Variation}`;

export default styled(memo(({className, variations, selectedVariations, onSetVariationHandler, onSetMainImageIdHandler}) => {

    const defaultValues = useMemo(() =>
            selectedVariations.reduce((acc, key) => {
                const [variationId, optionId] = key.split('/');
                return {...acc, [variationId]: optionId};
            }, {})
        , []);

    return <div className={classNames(className, "variations")}>
        <h4>{translations.VARIATIONS_HEADING}</h4>
        <List className='variations-list'>
            {Object.keys(variations).map(variationId =>
                <Variation {...{
                    key: variationId,
                    onSetVariationHandler,
                    ...variations[variationId],
                    defaultValue: defaultValues[variationId],
                    onSetMainImageIdHandler,
                    variationId
                }}/>
            )}
        </List>
    </div>;

}))`${styles.Variations}`;
