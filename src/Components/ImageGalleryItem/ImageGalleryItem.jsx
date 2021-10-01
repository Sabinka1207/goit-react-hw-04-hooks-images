import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ data, onSelect }) => {
    return (
        <>
            {data.map(oneImageData => (
                <li className={css.ImageGalleryItem} key={oneImageData.id}>
                    <img onClick={() => onSelect(oneImageData.webformatURL)}
                        src={oneImageData.largeImageURL}
                        alt={oneImageData.tags}
                        className={css.ImageGalleryItemImage} />
                </li>
            ))} 
        </>

    )
}