import React from "react";
import "./Layout.scss";

type LayoutType = {
    children: React.ReactElement;
};

const Layout = (props: LayoutType) => {
    const { children } = props;

    return (
        <div className="layoutBody">
            <div className="layoutContainer">{children}</div>
        </div>
    );
};

export default Layout;
