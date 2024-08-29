import { GET_CATEGORIES } from "../queries/getCategories";
import { useQuery } from "@apollo/client";

// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// loadDevMessages();
// loadErrorMessages();

const QueryEx = () => {
    const variables = {
        productFilters: {
            category_uid: {
                eq: "MjE=",
            },
        },
        pageSize: 12,
    };

    const { data, loading } = useQuery(GET_CATEGORIES, {
        variables: variables,
    });

    console.log({ data, loading });

    return <h1>QueryEx</h1>;
};

export default QueryEx;
