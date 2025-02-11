import "./Card.scss";

type CardDataType = {
    image: string;
    title: string;
    description: string;
    author: string;
};

const data = [
    {
        image: "/images/image1.jpg",
        title: "Lorem ipsum photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est 
            consectetur temporibus repellendus repellat architecto ut 
            doloribus impedit tempore perspiciatis dolorem commodi, ea dicta!`,
        author: "Author A",
    },
    {
        image: "/images/image1.jpg",
        title: "Lorem ipsum dolor, sit amet consectetur photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est.`,
        author: "Author B",
    },
    {
        image: "/images/image1.jpg",
        title: "Lorem ipsum photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
        author: "Author C",
    },
    {
        image: "/images/image1.jpg",
        title: "Lorem ipsum dolor, sit amet photo",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius nostrum deserunt itaque nisi fugiat odio est 
            consectetur temporibus repellendus repellat architecto ut!`,
        author: "Author D",
    },
    {
        image: "/images/image1.jpg",
        title: "Lorem photo",
        description: `Lorem ipsum dolor.`,
        author: "Author E",
    },
];

const cardContent = (info: CardDataType) => {
    console.log({ info });
    return (
        <li key={info.title}>
            <p>{info.title}</p>
        </li>
    );
};

const Card = () => {
    return <ul>{data.map((cardDetails) => cardContent(cardDetails))}</ul>;
};

export default Card;
