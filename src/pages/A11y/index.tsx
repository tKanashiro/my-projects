import Card from "components/Card";
import Title from "components/Title";
import { Fragment } from "react/jsx-runtime";
import CardsImage from "./images/cards.jpg";

const A11y = () => {
    return (
        <Fragment>
            <Title title="A11y" />
            <div className="bodyWrapper">
                <Card title="Card" link="/a11y/card" image={CardsImage} />
            </div>
        </Fragment>
    );
};

export default A11y;
