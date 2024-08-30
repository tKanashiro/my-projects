import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import Header from "components/Header";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import Css from "pages/Css";
import Grid from "pages/Css/Grid";
import Apollo from "pages/Apollo/index";
import QueryEx from "pages/Apollo/QueryEx";
import Typescript from "pages/Typescript";
import ReactPage from "pages/React";
import "./index.css";
import "global/_styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Layout>
            <div className="container">
                <Header />
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/css" element={<Css />} />
                            <Route path="/css/grid" element={<Grid />} />
                            <Route path="/apollo" element={<Apollo />} />
                            <Route
                                path="/apollo/ex-query"
                                element={<QueryEx />}
                            />
                            <Route
                                path="/typescript"
                                element={<Typescript />}
                            />
                            <Route path="/react" element={<ReactPage />} />
                        </Routes>
                    </BrowserRouter>
                </ApolloProvider>
            </div>
        </Layout>
    </React.StrictMode>
);
