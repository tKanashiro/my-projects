import Card from "components/Card";
import Title from "components/Title";
import { Fragment } from "react/jsx-runtime";
import CardsImage from "./images/cards.jpg";
import NotificationsImage from "./images/notifications.jpg";

const A11y = () => {
    return (
        <Fragment>
            <Title title="A11y" />
            <div className="bodyWrapper">
                <Card title="Card" link="/a11y/card" image={CardsImage} />
                <Card
                    title="Notifications"
                    link="/a11y/notifications"
                    image={NotificationsImage}
                />
            </div>
        </Fragment>
    );
};

export default A11y;
