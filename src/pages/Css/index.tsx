import { Fragment } from "react/jsx-runtime";
import Card from "../../components/Card";
import gridImage from "../../images/grid.png";

const Css = () => {
    return (
        <Fragment>
            <h1>Css</h1>

            <Card title="Grid" link="/css/grid" image={gridImage} />
        </Fragment>
    );
};

export default Css;
