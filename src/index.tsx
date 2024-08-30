import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import client from "./apollo-client";
import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import "./index.css";
import "./global/_styles.scss";
import Css from "./pages/Css";
import Grid from "./pages/Css/Grid";

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
                        </Routes>
                    </BrowserRouter>
                </ApolloProvider>
            </div>
        </Layout>
    </React.StrictMode>
);
