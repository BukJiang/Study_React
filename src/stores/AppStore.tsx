import ICON_OIL_PRICE from "@/assets/Home/MiniApp/OilPrice.jpg";
import ICON_STUDY_ASSIST from "@/assets/Home/MiniApp/StudyAssist.jpeg";
import ICON_NAMER from "@/assets/Home/MiniApp/Namer.jpg";
import {DescriptionsProps, TimelineItemProps, Typography} from "antd";
import {makeAutoObservable} from "mobx";

class Comp {
    name: string = "邦布信息科技";
    slogan: string = "不仅仅只是应用，更是未来的梦想";
    vision: string = "我们致力于开发创新应用，借助科技驱动未来，改变世界。我们的梦想是通过不断创新，为用户提供超越想象的解决方案，创造更加智能互联的未来。";
    like: number = 0;
    tech: number = 0;
    timelineItems: TimelineItemProps[] = [
        {
            children: "「微信小程序」油价快报",
        }, {
            children: "「微信小程序」辅学乐园",
        }, {
            children: "「微信小程序」以诗起名",
        },
    ];
    descItems: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "QQ",
            children: <Typography.Text copyable>2228933088</Typography.Text>,
        }, {
            key: "2",
            label: "Email",
            children: <Typography.Text copyable>2228933088@qq.com</Typography.Text>,
        }, {
            key: "3",
            label: "微博/小红书",
            children: <Typography.Text copyable>@邦布信息科技</Typography.Text>,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

class Product {
    id: string = "";
    name: string = "";
    img: string = "";
    desc: string = "";
    color: string = "";
    background: string = "";

    constructor() {
        makeAutoObservable(this);
    }
}

class MiniApp {
    activeId: string = "1";
    products: Product[] = [
        {
            id: "1",
            name: "油价快报",
            img: ICON_OIL_PRICE,
            desc: "实时提供油价查询和走势预估，让您油价早知道，加油更省心。",
            color: `rgba(255, 77, 79, 0.4)`,
            background: `rgba(255, 77, 79, 0.4)`,
        },
        {
            id: "2",
            name: "辅学乐园",
            img: ICON_STUDY_ASSIST,
            desc: "轻轻松松血虚，快快乐乐成长。",
            color: `rgba(22, 199, 255, 0.4)`,
            background: `rgba(22, 199, 255, 0.4)`,
        },
        {
            id: "3",
            name: "以诗起名",
            img: ICON_NAMER,
            desc: "四十万首古诗词起名。",
            color: `rgba(82, 196, 26, 0.4)`,
            background: `rgba(82, 196, 26, 0.4)`,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    get productImg(): string {
        const activeId = this.activeId;
        return this.products.find(x => x.id == activeId)?.img || "";
    }

    get productDesc(): string {
        const activeId = this.activeId;
        return this.products.find(x => x.id == activeId)?.desc || "";
    }
}

class Icp {
    name: string = "闽ICP备1234567890号";
    href: string = "https://beian.miit.gov.cn";

    constructor() {
        makeAutoObservable(this);
    }
}

class AppStore {

    // 公司
    comp: Comp = new Comp();
    // 小程序
    miniApp: MiniApp = new MiniApp();
    // 鼓舞
    inspires: string[] = [
        "在邦布信息科技，我们相信每一个梦想都值得被追逐，每一份努力都不会被辜负。",
        "虽然现在的我们还不够强壮，但正是这些不懈的奋斗和对未来的无限憧憬，推动着我们不断前行。",
        "每一个凌晨的灯火，每一份坚持的汗水，都是成就未来的基石。",
        "无论你现在身处何地，愿你也能在奋斗的道路上勇往直前，创造属于自己的辉煌。",
        "邦布信息科技，将与你一起迎接每一个挑战，共同成长。",
    ]
    // 备案
    icp: Icp = new Icp();

    constructor() {
        makeAutoObservable(this);
    }
}

const appStore = new AppStore();
export default appStore;