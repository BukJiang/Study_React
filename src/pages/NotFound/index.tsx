import React from "react";
import styles from "./index.module.less";
import {observer} from "mobx-react";
import Layout from "@/components/Common/Layout";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {

    return (
        <Layout>
            <div className={styles.index}>
                <Result
                    status="404"
                    title={
                        <div className={styles.title}>404</div>
                    }
                    subTitle={[
                        <div className={styles.sub_title}>很抱歉，您访问的页面不存在。</div>,
                        <div className={styles.sub_title}>Sorry, the page you visited does not exist.</div>,
                    ]}
                    extra={(
                        <Link to={"/home"}>
                            <Button type="primary">返回主页</Button>
                        </Link>
                    )}
                />
            </div>
        </Layout>
    );
});

export default Index;