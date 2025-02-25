import React from "react";
import {observer} from "mobx-react";
import Layout from "@/components/Common/Layout";
import Comp from "@/components/Home/Comp";
import MiniApp from "@/components/Home/MiniApp";
import Inspire from "@/components/Home/Inspire";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(({}) => {
    return (
        <Layout>
            {/* 公司 */}
            <Comp/>
            {/* 小程序 */}
            <MiniApp/>
            {/* 鼓舞 */}
            <Inspire/>
        </Layout>
    );
});

export default Index;