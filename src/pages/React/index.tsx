import Card from "components/Card";
import Title from "components/Title";
import { Fragment } from "react/jsx-runtime";
import reactImage from "images/react.svg";

const React = () => {
    return (
        <Fragment>
            <Title title="React" />
            <div className="bodyWrapper">
                <Card
                    title="Scroll Spy"
                    link="/react/scrollspy"
                    image={reactImage}
                />
            </div>
        </Fragment>
    );
};

export default React;
