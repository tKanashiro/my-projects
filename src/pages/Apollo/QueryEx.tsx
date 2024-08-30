import { GET_CATEGORIES } from "queries/getCategories";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import Title from "components/Title";
import { Fragment } from "react/jsx-runtime";
import { Suspense } from "react";

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

    // const { data } = useSuspenseQuery(GET_CATEGORIES, {
    //     variables: variables,
    // });
    //   <Suspense
    //         fallback={
    //             <div
    //                 style={{
    //                     color: "#ffffff",
    //                     textAlign: "center",
    //                     fontSize: "25px",
    //                     margin: "50px 0",
    //                 }}
    //             >
    //                 Loading...
    //             </div>
    //         }
    //     ></Suspense>

    console.log({ data, loading });

    if (loading) return <div style={{ fontSize: "25px" }}>Loading...</div>;

    return (
        <Fragment>
            <Title title="Query Exemplo" />

            <p>{JSON.stringify(data)}</p>
        </Fragment>
    );
};

export default QueryEx;
