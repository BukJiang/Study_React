import React from "react";
import styles from "./index.module.less";
import {ChildrenNode} from "@/types/react-node";
import {observer} from "mobx-react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

interface IndexProps {
    children: ChildrenNode
}

const Index: React.FC<IndexProps> = observer(({children}) => {

    return (
        <div className={styles.index}>
            {/* 头部 */}
            <Header/>
            {/* 内容 */}
            {children}
            {/* 页脚 */}
            <Footer/>
        </div>
    );
});

export default Index;