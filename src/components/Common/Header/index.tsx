import React from "react";
import styles from "./index.module.less";
import ICON_LOGO from "@/assets/logo.svg";
import {observer} from "mobx-react";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    return (
        <div className={styles.index}>
            {/* logo */}
            <a className={styles.logo} href="/"><img src={ICON_LOGO} alt=""/></a>
        </div>
    );
});

export default Index;