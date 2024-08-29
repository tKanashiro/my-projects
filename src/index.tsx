import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import QueryEx from "./pages/QueryEx";
import client from "./apollo-client";
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<QueryEx />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);
