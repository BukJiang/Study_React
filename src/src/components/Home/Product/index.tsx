import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";
import appStore from "@/stores/AppStore.ts";

interface IndexProps {
    id: string
    name: string,
    color: string,
}

const Index: React.FC<IndexProps> = observer(({id, name, color}) => {

    // 鼠标移入移出
    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        appStore.miniApp.activeId = e.currentTarget.dataset.id || "";
    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        appStore.miniApp.activeId = e.currentTarget.dataset.id || "";
    }

    return (
        <div
            data-id={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.index}
            style={{
                background: color
            }}>
            {name}
        </div>
    );
});

export default Index;