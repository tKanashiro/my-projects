import "./Card.scss";

type CardType = {
    title: string;
    link: string;
    image: string;
};

const Card = (props: CardType) => {
    const { title, link, image } = props;

    return (
        <div className="card">
            <a className="link" href={link}>
                <div className="imageContainer">
                    <img src={image} alt={title} />
                </div>

                <p>{title}</p>
            </a>
        </div>
    );
};

export default Card;
