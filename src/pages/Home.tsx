import Card from "../components/Card";
import cssImage from "../images/css.jpeg";
import "./Home.scss";

const Home = () => {
    return (
        <div className="homeWrapper">
            <h1 className="title">Home Page</h1>
            <Card title="CSS" link="/css" image={cssImage} />
        </div>
    );
};

export default Home;
