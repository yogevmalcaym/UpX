import React from "react";
import classnames from 'classnames';
import {Carousel} from 'react-bootstrap';
import {urls} from '@front/router';
import styled from 'styled-components';
import {translator} from '@generic/utils';
import * as styles from './styles';

const galleryItems = [
    {
        category: "after-birth",
        image: 'https://cf.ltkcdn.net/family/images/orig/200821-2121x1414-family.jpg',
        // url: urls.BIRTH_CATEGORY_VIEW_ROUTE
    },
    {
        category: "birthday",
        image: 'https://cdn.shopify.com/s/files/1/0040/3098/8386/articles/receivingfeedback_2048x.progressive.png.jpg?v=1538851729',
        // url: urls.BIRTHDAY_CATEGORY_VIEW_ROUTE
    }
];

const CarouselItem = styled(({className, categoryTexts, image, navigate, url}) => {
        // const onClick = useCallback(() => navigate(url), [navigate, url]);
        return <Carousel.Item {...{className}}>
            <div className="itemContentWrapper">
                <div {...{className: 'shape'}} />
                <styles.Image {...{url: image}} />
                <div className="text-wrapper">
                    <h1>{categoryTexts.heading}</h1>
                    <h3>{categoryTexts.subHeading}</h3>
                </div>
            </div>
        </Carousel.Item>
    }
)`${styles.CarouselItem}`;

export default styled(({className, navigate}) =>
    <div {...{className: classnames(className, 'gallery')}}>
        <Carousel>
            {galleryItems.map(item =>
                <CarouselItem {...{
                    ...item,
                    navigate,
                    key: item.image,
                    categoryTexts: translator('categories')[item.category],
                }} />)}
        </Carousel>
    </div>
)`${styles.Gallery}`;
