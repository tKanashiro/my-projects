import Card from "../../components/Card";
import Title from "../../components/Title";
import cssImage from "../../images/css.jpeg";
import apolloImage from "../../images/apollographql.svg";

import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Title title="Home Page" />

            <div className="homeWrapper">
                <Card title="CSS" link="/css" image={cssImage} />
                <Card title="Apollo" link="/apollo" image={apolloImage} />
            </div>
        </div>
    );
};

export default Home;
