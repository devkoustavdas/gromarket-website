import { getUrl } from "../../util";

const Gallery = ({ images, description }) => {
    return (
        <div>
            <p className="float-right italic">Swipe</p>
            <h3>{description}</h3>
            <section className="flex flex-row h-92 md:h-100 py-5 gap-6 overflow-x-scroll">
                {images.map((image, index) => (
                    <img key={index} src={getUrl(image)} alt={description} />
                ))}
            </section>
        </div>
    );
};

export default Gallery;
