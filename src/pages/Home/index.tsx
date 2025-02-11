import Card from "components/Card";
import Title from "components/Title";
import cssImage from "images/css.jpeg";
import apolloImage from "images/apollographql.svg";
import tsImage from "images/TS.png";
import reactImage from "images/react.svg";
import a11yImage from "images/a11y.png";

import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Title title="Home Page" />

            <div className="bodyWrapper">
                <Card title="CSS" link="/css" image={cssImage} />
                <Card title="Apollo" link="/apollo" image={apolloImage} />
                <Card title="Typescript" link="/typescript" image={tsImage} />
                <Card title="React" link="/react" image={reactImage} />
                <Card title="A11y" link="/a11y" image={a11yImage} />
            </div>
        </div>
    );
};

export default Home;
