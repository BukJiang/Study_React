import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";
import {Typography} from "antd";
import appStore from "@/stores/AppStore.ts";
import Product from "@/components/Home/Product";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    // 产品列表
    const renderProducts = appStore.miniApp.products.map(x => {
        return <Product key={x.id} {...x}/>
    })

    return (
        <div className={styles.index}>
            {/* 样例 */}
            <div key={appStore.miniApp.activeId} className={styles.example}>
                <img src={appStore.miniApp.productImg} alt=""/>
            </div>

            {/* 部分 */}
            <div className={styles.section}>
                {/* 排版 */}
                <Typography className={styles.typo}>
                    <h1>微信小程序</h1>
                </Typography>

                {/* 产品 */}
                <div className={styles.product}>
                    {renderProducts}
                </div>

                {/* 描述 */}
                <div className={styles.desc}>
                    {appStore.miniApp.productDesc}
                </div>
            </div>
        </div>
    );
});

export default Index;