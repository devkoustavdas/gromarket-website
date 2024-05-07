import { getUrl } from "../../util";
import PropTypes from 'prop-types';

const Gallery = ({ images, description }) => {
    return (
        <section className="my-8">
            <h3>{description}</h3>
            <section className="flex flex-row py-5 gap-6 overflow-x-scroll">
                {images.map((image, index) => (
                    <img key={index} src={getUrl(image)} alt={description} className="w-5/6 md:w-2/5" />
                ))}
            </section>
        </section>
    );
};
Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
};
export default Gallery;
