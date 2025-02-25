import {MenuItem} from "@/types/ants-node";
import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {observer} from "mobx-react";

const items: MenuItem[] = [
    {
        key: "mail",
        label: "Navigation One",
    }, {
        key: "alipay",
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
    },
];

interface IndexProps {

}

const Index: React.FC<IndexProps> = observer(() => {
    const [curr, setCurr] = useState("mail");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurr(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[curr]} mode="horizontal" items={items}/>;
});

export default Index;