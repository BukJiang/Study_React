import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";
import appStore from "@/stores/AppStore.ts";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    // p列表
    const renderP = appStore.inspires.map(x => {
        return <p>{x}</p>
    })

    return (
        <div className={styles.index}>
            {renderP}
            {/* 署名 */}
            <div>-- Buk</div>
        </div>
    );
});

export default Index;