import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import client from "./apollo-client";
import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import "./index.css";
import "./global/_styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Layout>
            <Fragment>
                <Header />
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </ApolloProvider>
            </Fragment>
        </Layout>
    </React.StrictMode>
);
