import React, {memo} from 'react';
import styled from 'styled-components';
import ReactImageFallback from "react-image-fallback";
import classNames from 'classnames';
import T from './translations';
import * as styles from './styles';


const fallbackImage = 'https://semantic-ui.com/images/wireframe/image.png';

export default styled(memo(({
                                className,
                                name,
                                imageURL,
                                description,
                                priceRange,
                                onClick,
                            }) => {

        return <div {...{className: classNames(className, 'item-card')}}>

            <div {...{className: 'more-details', onClick}}>
                <span>{T.MORE_DETAILS}</span>
            </div>

            <div className='title'>
                <p>{name}</p>
            </div>

            <ReactImageFallback {...{src: imageURL, alt: name, fallbackImage}} />

            <div {...{className: 'content'}}>
                <p className='description'>{description}</p>
            </div>

            <div {...{className: 'footer'}}>
                <div className='price-wrapper'>
                    <span>{priceRange.length === 2 ? T.PRICE_RANGE : T.PRICE}</span> <span>₪ {priceRange.join(" ~ ")}</span>
                </div>

            </div>
        </div>
    }
))`${styles.ItemCard}`;
