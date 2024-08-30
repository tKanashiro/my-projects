import { Fragment } from "react/jsx-runtime";
import Card from "../../components/Card";
import gridImage from "../../images/grid.png";
import Title from "../../components/Title";

const Css = () => {
    return (
        <Fragment>
            <Title title="Css" />

            <Card title="Grid" link="/css/grid" image={gridImage} />
        </Fragment>
    );
};

export default Css;
