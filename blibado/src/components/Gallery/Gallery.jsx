import { useState } from 'react';
import s from './Gallery.module.scss';

export const Gallery = (props) => {
    const [mainImage, setMainImage] = useState(`./${props.img1}`);

    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <section id='gallery-1-images' className={s.galleryStyle}>
            <img id='imgLarge' src={mainImage} alt="Main large display" />
            <div className={s.galleryImages}>
                <img src={`./${props.img2}`} onClick={() => handleThumbnailClick(`./${props.img2}`)} alt="Thumbnail 1" />
                <img src={`./${props.img3}`} onClick={() => handleThumbnailClick(`./${props.img3}`)} alt="Thumbnail 2" />
                <img src={`./${props.img4}`} onClick={() => handleThumbnailClick(`./${props.img4}`)} alt="Thumbnail 3" />
                <img src={`./${props.img5}`} onClick={() => handleThumbnailClick(`./${props.img5}`)} alt="Thumbnail 4" />
            </div>
        </section>
    );
};
