import Card from "../../components/Card";
import Title from "../../components/Title";
import cssImage from "../../images/css.jpeg";
import "./Home.scss";

const Home = () => {
    return (
        <div className="homeWrapper">
            <Title title="Home Page" />

            <Card title="CSS" link="/css" image={cssImage} />
        </div>
    );
};

export default Home;
