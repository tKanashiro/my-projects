import { Fragment } from "react/jsx-runtime";
import Card from "components/Card";
import gridImage from "images/grid.png";
import Title from "components/Title";

const Css = () => {
    return (
        <Fragment>
            <Title title="Css" />

            <div className="bodyWrapper">
                <Card title="Grid" link="/css/grid" image={gridImage} />
            </div>
        </Fragment>
    );
};

export default Css;
