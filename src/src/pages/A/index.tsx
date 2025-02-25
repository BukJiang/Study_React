import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    return (
        <div className={styles.index}>

        </div>
    );
});

export default Index;