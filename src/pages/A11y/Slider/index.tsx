import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import "./Slider.scss";

const Slider = () => {
    return (
        <>
            <a href="https://inclusive-components.design/a-content-slider/">
                <h1 className="a11yTitle">A Content Slider</h1>
            </a>

            <ul role="region" aria-label="gallery" className="sliderWrapper">
                <li className="slideImage">
                    <img src={image1} alt="" />
                </li>

                <li className="slideImage">
                    <img src={image2} alt="" />
                </li>

                <li className="slideImage">
                    <img src={image3} alt="" />
                </li>

                <li className="slideImage">
                    <img src={image4} alt="" />
                </li>

                <li className="slideImage">
                    <img src={image5} alt="" />
                </li>
            </ul>
        </>
    );
};

export default Slider;
