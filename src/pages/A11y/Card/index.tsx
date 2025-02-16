import "./CardA11y.scss";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

type CardDataType = {
    image: string;
    title: string;
    description: string;
    author: string;
};

const data = [
    {
        image: image1,
        title: "Lorem ipsum photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est 
            consectetur temporibus repellendus repellat architecto ut 
            doloribus impedit tempore perspiciatis dolorem commodi, ea dicta!`,
        author: "Author A",
    },
    {
        image: image2,
        title: "Lorem ipsum dolor, sit amet consectetur photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est.`,
        author: "Author B",
    },
    {
        image: image3,
        title: "Lorem ipsum photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
        author: "Author C",
    },
    {
        image: image4,
        title: "Lorem ipsum dolor, sit amet photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est 
            consectetur temporibus repellendus repellat architecto ut!`,
        author: "Author D",
    },
    {
        image: image5,
        title: "Lorem photo",
        description: `Lorem ipsum dolor.`,
        author: "Author E",
    },
];

const cardContent = (info: CardDataType) => {
    const { author, description, image, title } = info;

    return (
        <li key={title} className="cardA11y">
            <div className="imageWrapper">
                <img src={image} alt="" />
            </div>

            <div className="a11yBody">
                <h2>
                    <a
                        aria-describedby="desc-card-design"
                        className="a11yLink"
                        href="/a11y/card"
                    >
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
                <span
                    className="readoMore"
                    aria-hidden="true"
                    id="desc-card-design"
                >
                    read more
                </span>
                <small>{author}</small>
            </div>
        </li>
    );
};

const Card = () => {
    return (
        <>
            <a href="https://inclusive-components.design/cards/">
                <h1 className="a11yTitle">Card</h1>
            </a>

            <ul className="cardsWrapper">
                {data.map((cardDetails) => cardContent(cardDetails))}
            </ul>

            <div className="keyPoints">
                <p>
                    <b>Card link:</b>{" "}
                    <a href="https://www.notion.so/Cards-197291d3d515808bbfd8f1d66a882c27">
                        more info
                    </a>
                </p>
            </div>
        </>
    );
};

export default Card;
