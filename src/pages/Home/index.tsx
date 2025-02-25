import React from "react";
import {observer} from "mobx-react";
import Layout from "@/components/Common/Layout";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(({}) => {
    return (
        <Layout>
            this is layout
        </Layout>
    );
});

export default Index;