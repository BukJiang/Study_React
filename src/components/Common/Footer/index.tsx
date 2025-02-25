import React from "react";
import styles from "./index.module.less";
import ICON_LOGO from "@/assets/logo.svg";
import {observer} from "mobx-react";
import appStore from "@/stores/AppStore.tsx";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    return (
        <div className={styles.index}>
            {/* logo */}
            <img className={styles.logo} src={ICON_LOGO} alt=""/>
            {/* 备案 */}
            <a href={appStore.icp.href} target="_blank" rel="noopener noreferrer">
                {appStore.icp.name}
            </a>
        </div>
    );
});

export default Index;