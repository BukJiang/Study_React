import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";
import {Button, Card, Descriptions, Timeline, Typography} from "antd";
import appStore from "@/stores/AppStore.ts";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    return (
        <div className={styles.index}>
            {/* 排版 */}
            <Typography className={styles.typo}>
                <h1>{appStore.comp.name}</h1>
                <p>{appStore.comp.slogan}</p>
            </Typography>

            {/* 操作 */}
            <div className={styles.op}>
                <Button size="large" type="primary">点赞加油</Button>
                <Button size="large">技术能力</Button>
            </div>

            {/* 面板 */}
            <div className={styles.panel}>
                {/* 应用 */}
                <Card className={styles.card} hoverable>
                    <h5>热门应用</h5>
                    <Timeline items={appStore.comp.timelineItems}/>
                </Card>
                {/* 愿景 */}
                <Card className={styles.card} hoverable>
                    <h5>公司愿景</h5>
                    <p>{appStore.comp.vision}</p>
                </Card>
                {/* 联系 */}
                <Card className={styles.card} hoverable>
                    <h5>合作联系</h5>
                    <Descriptions column={1} items={appStore.comp.descItems}/>
                </Card>
            </div>

            {/* 背景 */}
            <div className={styles.bkg}>
                <div className={styles.square}/>
            </div>
        </div>
    );
});

export default Index;