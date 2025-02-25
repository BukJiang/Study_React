import React from "react";
import {observer} from "mobx-react";
import Layout from "@/components/Common/Layout";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {
    return (
        <Layout>
            this not found
        </Layout>
    );
});

export default Index;