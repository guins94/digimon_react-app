import React from 'react';
import ImageCard from './ImageCard';
import './imageList.css';

const ImageList = (props) =>{
    const images = props.images.map((image) => {
        return<ImageCard key={image.lenght} element={image} digimage={image.img} name={image.name} level={image.level}/>;
        
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;