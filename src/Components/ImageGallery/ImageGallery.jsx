import css from "./ImageGallery.module.css"
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
    
export const ImageGallery = ({ data, onSelect }) => {
    return (
        <ul className={css.ImageGallery}>
            <ImageGalleryItem data={data} onSelect={onSelect}/>
        </ul>
    )
}

