import React, {useCallback, memo} from 'react';
import * as styles from './styles';
import styled from 'styled-components';
import classNames from 'classnames';
import {List, Loader} from '@front/common-components';

const GalleryWrapper = styled(({className, children}) =>
    <div {...{className: classNames(className, "gallery-wrapper")}}>
        {children}
    </div>
)`${styles.GalleryWrapper}`;

const ImagesListItem = styled(memo(({className, imageId, setMainImageId, imageURL}) => {
    const onClick = useCallback(() => setMainImageId(imageId), [setMainImageId, imageId]);

    return <div {...{className, onClick}} >
        <img src={imageURL}/>
    </div>;
}))`${styles.ImagesListItem}`;

const ImagesList = memo(({itemImages, currentMainImage, setMainImageId, basePublicUrl}) =>
    <List className='images-list'>
        {Object.keys(itemImages).map(imageId => {
                const image = itemImages[imageId];
                const isMain = currentMainImage ? imageId === currentMainImage.id : image.isDefault;

                return <ImagesListItem {...{
                    key: imageId,
                    isMain,
                    imageURL:
                    // TODO: uncomment when there is Buckets
                    // basePublicUrl +
                    image.urlSuffix,
                    setMainImageId,
                    imageId
                }}/>;
            }
        )}
    </List>);

export default memo(({itemImages, basePublicUrl, currentMainImage, setMainImageId}) =>
    <GalleryWrapper>
        <div className="item-images">
            <div className="main-image-wrapper">
                {currentMainImage.id ?
                    <img src={currentMainImage.url}/> :
                    <Loader size="medium"/>}
            </div>
            <ImagesList {...{
                itemImages,
                currentMainImage,
                setMainImageId,
                basePublicUrl
            }}/>
        </div>
    </GalleryWrapper>
);
