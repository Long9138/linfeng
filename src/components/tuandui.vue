<template>
    <div class="tuandui">
        <div class="td_top"></div>
        <div class="tuandui_header">
            <div class="bd">
                <ul>
                    <li>
                        <img src="../assets/imgs/tuandui/20180628191132299291.jpg" alt="">
                    </li>
                </ul>
            </div>

            <!-- 团队轮播搜索框 -->
            <div class="search-box box">
                <div class="search-item">
                    <div class="search">
                        <form action="">
                            <input type="text" placeholder="输入我家小区查询">
                            <input type="submit" value="">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- 房子标配 -->
        <div class="page-position box">
            <p>
                当前位置：
                <a href="">首页</a>
                >
                <a href="">装修案例</a>
            </p>
            <div class="screen-box">
                <ul class="screen-ul screen-ul2">
                    <li>
                        <div class="screen-type">风格</div>
                        <dl class="screen-type-item">
                            <dd v-for="(item,index) in fzbp.fg" :key="index">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">户型</div>
                        <dl class="screen-type-item">
                            <dd v-for="(item,index) in fzbp.hx" :key="index">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">需求</div>
                        <dl class="screen-type-item">
                            <dd v-for="(item,index) in fzbp.xq" :key="index">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 设计师简介 -->
        <div class="fashion-designer bg-color1">
            <div class="box">
                <div class="area-title">
                    <p>林凤精英设计师</p>
                    <span>为您打造专属精致生活方式</span>
                </div>
                <div class="designer-list-box">
                    <ul class="designer-list" v-for="(item,index) in tdsjs" :key="index">
                        <li>
                            <a href="" target="__blank">
                                <div class="designer-pic">
                                    <img v-lazy="item.img" alt="">
                                    <div class="designer-intro">
                                        <div class="designer-intro-con">
                                            <h3>{{item.xm}}</h3>
                                            <p>{{item.nx}}</p>
                                            <p>
                                                毕业院校：
                                                <br>
                                                {{item.by}}
                                            </p>
                                            <br>
                                            <p>
                                                主要作品：
                                                <br>
                                                {{item.zp}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="designer-info2">
                                    <h3>{{item.xm}}</h3>
                                    <p>
                                        <span class="lf">
                                            从业经验：
                                            <b>{{item.jy}}</b>
                                            年
                                        </span>
                                        <span class="rg">
                                            案例作品：
                                            <b>{{item.al}}</b>
                                            套
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 底部img -->
        <div class="anli_footer">
                <a href="" class="box"><img src="../assets/imgs/tuandui/20180621142324374713.jpg" alt=""></a>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fzbp: {
                    fg: [
                        "不限",
                        "现代简约",
                        "北欧",
                        "新中式",
                        "中式",
                        "美式",
                        "欧式",
                        "地中海",
                        "工业风",
                        "港式",
                        "田园",
                        "混搭",
                        "日式",
                        "新古典",
                        "其他"
                    ],
                    hx: [
                        "不限",
                        "一居",
                        "二居",
                        "三居",
                        "四居",
                        "五居",
                        "复式",
                        "别墅",
                        "办公空间",
                        "LOFT"
                    ],
                    xq: [
                        "不限",
                        "儿童房",
                        "老人房",
                        "婚房",
                        "旧房改造",
                        "改善性住宅",
                    ]
                },

                // 设计师
                tdsjs: [
                    {
                        img: require("../assets/imgs/tuandui/1.jpg"),
                        xm: "李欣雨",
                        nx: "从业年限：9年",
                        by: "沈阳航空航天",
                        zp: " 金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等 ",
                        jy: "9",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/2.jpg"),
                        xm: "白涵琦",
                        nx: "从业年限：8年",
                        by: "吉林师范大学",
                        zp: " 碧桂园公园里 碧桂园繁华里 远洋大河宸章 金地檀悦 中海和平之门 金地悦峰 中海城提香 艺格风情湾 宏发英里 郡原小石城等 ",
                        jy: "8",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/3.jpg"),
                        xm: "孙贺",
                        nx: "从业年限：12年",
                        by: "南京政治学院",
                        zp: " 中粮·龙玺世家 龙湖·西府原著 保利·大都会 旭辉·东樾城 ",
                        jy: "12",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/4.jpg"),
                        xm: "李雪",
                        nx: "从业年限：4年",
                        by: "辽宁城市建设职业技术学院",
                        zp: " 中海寰宇 金地名京 府城铭邸 御景新世界 碧桂园 中海和平之门 金地檀府 华润奉天九里 格林玫瑰湾等 ",
                        jy: "4",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/5.jpg"),
                        xm: "段超宇",
                        nx: "从业年限：7年",
                        by: "沈阳建筑大学",
                        zp: " 沈阳林凤庄园度假中心外建筑项目设计、阜新盛世公馆独栋别墅项目、营口天沐颐泉联排别墅项目、阜新民宿建筑项目、沈阳蓝乔圣菲独栋别墅项目、沈阳碧桂园公园里联排别墅项目 、沈阳碧桂园钻石墅联排别墅项目、伊利亚特湾双拼别墅项目、荣盛香堤澜山双拼别墅项目、山东莱茵名都别墅样板间项目。 ",
                        jy: "7",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/6.jpg"),
                        xm: "李会",
                        nx: "从业年限：7年",
                        by: "鲁迅美术学院",
                        zp: " 中海寰宇 金地名京 万科明天广场 御景新世界 碧桂园 中海和平之门 金地檀府 华润奉天九里等 ",
                        jy: "7",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/7.jpg"),
                        xm: "李永翠",
                        nx: "从业年限：9年",
                        by: "西安建筑大学",
                        zp: " 新世界 世茂五里河 金地长靑湾 华发首府、保利达江湾、中海盛京府 华润橡树湾 龙湖花千树 金地名京 碧桂园星荟 ",
                        jy: "9",
                        al: "9"
                    },
                    {
                        img: require("../assets/imgs/tuandui/8.jpg"),
                        xm: "谷雨",
                        nx: "从业年限：10年",
                        by: "沈阳大学",
                        zp: " 金地长青湾 万科鹿特丹 新世界花园 中海龙湾 丽山国际小镇 华润奉天九里等 ",
                        jy: "10",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/9.jpg"),
                        xm: "王禹厶",
                        nx: "从业年限：8年",
                        by: "吉林省艺术学院",
                        zp: "雅宾利花园  绿城全运村 金地名悦  新世界花园  月星中央公园",
                        jy: "8",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/10.jpg"),
                        xm: "王峰",
                        nx: "从业年限：5年",
                        by: "辽宁财贸学院",
                        zp: "小区名称 中海寰宇 金地名京 万科明天广场 御景新世界 碧桂园 中海和平之门 金地檀府 华润奉天九里等",
                        jy: "5",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/11.jpg"),
                        xm: "石屹",
                        nx: "从业年限：13年",
                        by: "清华美院",
                        zp: "金地国际花园、保利花园、绿地老街坊、克莱斯特、富雅豪林、东方欧博城，阳光尚城，万科金域蓝湾，保利达江湾城，金地铂悦，中海城，祥云佳苑，华强城，阳光100，万恒领域，凯旋门，帝景湾，龙之梦畅园，龙净运河湾3号，东方银座，万城，中海寰宇天下，中海社区，中海都汇，首创国际，金地檀溪，远洋天地，远洋公馆，保利康桥等",
                        jy: "13",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/12.jpg"),
                        xm: "马晓东",
                        nx: "从业年限：12年",
                        by: "鲁迅美术学院",
                        zp: " 中海盛京府、中海龙湾、御景新世界、金地檀府、华润奉天九里 ",
                        jy: "12",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/13.jpg"),
                        xm: "李德鹏",
                        nx: "从业年限：7年",
                        by: "沈阳航空学院",
                        zp: "中海寰宇 金地名京 龙湖唐宁one 御景新世界 碧桂园 中海和平之门 金地檀府 华润奉天九里 龙湖花千树等",
                        jy: "7",
                        al: "4"
                    },
                    {
                        img: require("../assets/imgs/tuandui/14.jpg"),
                        xm: "徐莱",
                        nx: "从业年限：8年",
                        by: "哈尔滨师范学院",
                        zp: "碧桂园系列园区、中海系列园区、旭辉系列园区、龙湖唐宁系列、华润24城、中铁丁香水岸等 ",
                        jy: "8",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/15.jpg"),
                        xm: "李承成",
                        nx: "从业年限：15年",
                        by: "哈尔滨学院",
                        zp: "金地铁西檀府，华润二十四城，碧桂园繁华里，玉祥明居，阳光100等",
                        jy: "15",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/16.jpg"),
                        xm: "吴勇",
                        nx: "从业年限：8年",
                        by: "辽宁交通大学",
                        zp: " 万科香缇澜山 中海康城 远洋大河宸章 中和和平之门 华润二十四城 保工印象 金辉中央云著 金地长青湾  金地旭辉九韵风华 ",
                        jy: "8",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/17.jpg"),
                        xm: "杨达",
                        nx: "从业年限：10年",
                        by: "东北大学",
                        zp: "碧桂园系列园区，中海系列园区，首创系列园区，金辉系列园区，金地系列园区，万科系列园区等",
                        jy: "10",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/18.jpg"),
                        xm: "罗佳",
                        nx: "从业年限：10年",
                        by: "海南大学",
                        zp: " 格林观塘、听雨观澜流水别墅、香山墅、中旅蓝爵、旭辉御府 ",
                        jy: "10",
                        al: "13"
                    },
                    {
                        img: require("../assets/imgs/tuandui/19.jpg"),
                        xm: "姜宇",
                        nx: "从业年限：12年",
                        by: "哈尔滨师范大学",
                        zp: " 万科兰乔圣菲、奥林匹克花园、香格蔚蓝、万科金域蓝湾、金地长青湾、金地檀郡、碧桂园银河城、新世界花园、远洋和平府、保利康桥、龙湖地产系列 ",
                        jy: "12",
                        al: "12"
                    },
                    {
                        img: require("../assets/imgs/tuandui/20.jpg"),
                        xm: "郭峰",
                        nx: "从业年限：6年",
                        by: "辽宁城建大学",
                        zp: " 碧桂园系列，中海城系列，中海和平之门，金地系列，美的城等 ",
                        jy: "6",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/21.jpg"),
                        xm: "吕娜",
                        nx: "从业年限：11年",
                        by: "大连理工",
                        zp: " 万科香湖盛景，金地地产楼盘，中海地产楼盘，保利地产楼盘，碧桂园地产楼盘，龙湖地产楼盘，雅宾利花园，御景新世界，等 ",
                        jy: "11",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/22.jpg"),
                        xm: "翟晓东",
                        nx: "从业年限：8年",
                        by: "沈阳建筑大学",
                        zp: " 金地名京.金地名悦.金地长青湾.华润置地.世贸五里河.新世界地产.华强写字间办公室.万象汇办公室 ",
                        jy: "8",
                        al: "5"
                    },
                    {
                        img: require("../assets/imgs/tuandui/23.jpg"),
                        xm: "孙也",
                        nx: "从业年限：6年",
                        by: "大连工业大学",
                        zp: " 龙湖各项目、金地各项目、碧桂园各项目、保工印象、中海城、中海和平之门等 ",
                        jy: "6",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/24.jpg"),
                        xm: "刘鹏",
                        nx: "从业年限：9年",
                        by: "辽宁大学",
                        zp: " 新世界系列、龙湖西府原著，龙湖天宸原著、金地九韵风华、华润24城，绿城全运村、金地艺境 ",
                        jy: "9",
                        al: "11"
                    },
                    {
                        img: require("../assets/imgs/tuandui/25.jpg"),
                        xm: "勾越",
                        nx: "从业年限：11年",
                        by: "辽宁美术学院",
                        zp: " 华润二十四城、金地檀府、金地铁西檀府、碧桂园繁华里、龙湖西府原著，碧桂园星汇、三盛颐景御园、新加坡花园、金石小镇、未来城、华润紫云府、万科金域蓝湾、河畔新城、万科兰乔圣菲、万科城、名流印象、名流公馆、金地长青湾、新世界花园、奥林匹克花园、爱家郦都、中海和平之门、华润紫云府，金地左岸，金地锦城、唐轩公馆等。 ",
                        jy: "11",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/26.jpg"),
                        xm: "王充夷",
                        nx: "从业年限：6年",
                        by: "辽宁美术学院",
                        zp: " 中海盛京府   中粮隆玺壹号  龙湖香缇漫步 万科兰乔圣菲  金地名京 碧桂园凤凰城 华润奉天九里 金地铁西檀府 碧桂园银河城  中航城.两河流域  中海和平之门 ",
                        jy: "6",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/27.jpg"),
                        xm: "肖旭",
                        nx: "从业年限：13年",
                        by: "南京建筑大学",
                        zp: " 碧桂园蓝湾别墅，中铁香湖别墅，方大胜景洋房区，顶盛国际洋房区，中海城及碧桂园系列 ",
                        jy: "13",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/28.jpg"),
                        xm: "韩宇",
                        nx: "从业年限：7年",
                        by: "大连海洋大学",
                        zp: " 中海两河流域，奉天九里 旭辉御府 雅宾利花园  田园牧歌 新加坡花园湾 伯爵源筑 保利五月花  地王国际花园 ",
                        jy: "7",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/29.jpg"),
                        xm: "菅垚",
                        nx: "从业年限：11年",
                        by: "德州学院",
                        zp: " 龙湖西府原著 金地铁西檀府 北国奥林匹克花园 格林玫瑰湾 金石小镇 中海和平之门",
                        jy: "11",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/30.jpg"),
                        xm: "郎峰川",
                        nx: "从业年限：20年",
                        by: "鲁迅美术学院",
                        zp: " 旭辉御府别墅区，绿地海域香廷别墅区，华润紫云府，金地铂悦，金地艺境，隆玺壹号，奕聪花园，东环瑞府，荣盛爱家丽都，保利达江湾城等等。 ",
                        jy: "20",
                        al: "12"
                    },
                    {
                        img: require("../assets/imgs/tuandui/31.jpg"),
                        xm: "张雨萌",
                        nx: "从业年限：6年",
                        by: "沈阳建筑大学",
                        zp: " 金地檀府，东亚翰林世家，中海城学府，中航两河流域，龙湖西府原著 ",
                        jy: "6",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/32.jpg"),
                        xm: "贾蕾",
                        nx: "从业年限：14年",
                        by: "辽东学院",
                        zp: " 华府新天地C4座金融公司、千缘财富商汇写字间、沈阳喜神木门红星店面、NO.19服装连锁店、沈阳金钥匙幼儿园、沈阳金谷大厦写字楼 ",
                        jy: "14",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/33.jpg"),
                        xm: "董陈君",
                        nx: "从业年限：8年",
                        by: "安徽建筑学院",
                        zp: " 万科四季，万科翡翠，龙之梦畅园，金地铂金，金地檀悦，金地檀府，金地意境，亿博隆河谷等等 ",
                        jy: "8",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/34.jpg"),
                        xm: "郭强",
                        nx: "从业年限：10年",
                        by: "吉林大学",
                        zp: " 金地长青湾，金地檀溪，金地国际花园，金地锦城，新世界花园，依云首府，中海，碧桂园，万科金域蓝湾，华发首府，华发岭南会，华润奉天九里等 ",
                        jy: "10",
                        al: "9"
                    },
                    {
                        img: require("../assets/imgs/tuandui/35.jpg"),
                        xm: "付续",
                        nx: "从业年限：11年",
                        by: "大连工业大学",
                        zp: " 华润幸福里  中海康城  保工印象 华润二十四城 中海和平之门   万锦香樟树 金地长青湾  金地旭辉九韵风华  中海城学府 ",
                        jy: "11",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/36.jpg"),
                        xm: "高阳",
                        nx: "从业年限：11年",
                        by: "辽宁交通大学",
                        zp: " 保利十二橡树庄园、伊利亚特湾、远洋大河宸章、中和和平之门、龙湖原府。 ",
                        jy: "11",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/37.jpg"),
                        xm: "刘萌萌",
                        nx: "从业年限：8年",
                        by: "城市职业建设大学",
                        zp: " 棋盘山一号，远洋和平府 中海国际 佳兆业 金地锦城 万科金域蓝湾 金地长青湾 中航城  阳光一百，恒大名都 ",
                        jy: "8",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/38.jpg"),
                        xm: "刘媛媛",
                        nx: "从业年限：10年",
                        by: "吉林大学",
                        zp: " 中海锦城 中海康城 中和和平之门 龙湖西府原著 华润二十四城 保工印象   金地旭辉九韵风华 雨润中央宫园 万锦·香樟树 万锦·紫园 美的城 远洋大河宸章 ",
                        jy: "10",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/39.jpg"),
                        xm: "郑思雨",
                        nx: "从业年限：6年",
                        by: "辽宁城建学院",
                        zp: " 金地檀府、华润奉天九里、中海和平之门、碧桂园银河城、雅宾利花园、金石小镇、金地旭辉九韵风华、奕聪花园。 ",
                        jy: "6",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/40.jpg"),
                        xm: "田强",
                        nx: "从业年限：7年",
                        by: "辽宁传媒学院",
                        zp: " 新世界，世茂五里河，中海寰宇，龙湖西府原著，华润24城，中海和平之门，绿城全运村，碧桂园系列等 ",
                        jy: "7",
                        al: "9"
                    },
                    {
                        img: require("../assets/imgs/tuandui/41.jpg"),
                        xm: "富文",
                        nx: "从业年限：6年",
                        by: "毕业于沈阳职业技术学院学图形图像（平面设计）专业",
                        zp: " 御景新世界、碧桂园银河城别墅区、运河湾3号、华发首府、格林玫瑰湾、雅宾利华园、中海国际社区、金地铁西檀府 ",
                        jy: "6",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/42.jpg"),
                        xm: "丁强",
                        nx: "从业年限：8年",
                        by: "沈阳大学",
                        zp: " 桑提亚纳，东方威尼斯，听雨观澜，金地铂悦，金地檀悦，金地长青湾，金地滨河国际，碧桂园太阳城，保利海上五月花等。 ",
                        jy: "8",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/43.jpg"),
                        xm: "徐昊",
                        nx: "从业年限：5年",
                        by: "沈阳理工大学",
                        zp: " 万科四季花城，中旅国际小镇，中粮隆府，碧桂园银河城，华润橡树湾，华润幸福里，凯旋门，保利达江湾城，新世界，中海寰宇二期三期，金地国际，金地左岸，半岛公馆，群升新天地，阳光100，金寓华庭，等等...... ",
                        jy: "5",
                        al: "9"
                    },
                    {
                        img: require("../assets/imgs/tuandui/44.jpg"),
                        xm: "朱晓旭",
                        nx: "从业年限：9年",
                        by: "吉林省艺术学院",
                        zp: " 碧桂园•名门 华润•奉天九里 龙湖•西府原著 龙湖唐宁ONE 碧桂园•孔雀城等 ",
                        jy: "9",
                        al: "6"
                    },
                    {
                        img: require("../assets/imgs/tuandui/45.jpg"),
                        xm: "胡迪",
                        nx: "从业年限：14年",
                        by: "沈阳雄狮艺术设计美院 专业环境艺术设计",
                        zp: " 法雅庄园、桑提亚纳庄园、金色高尔夫庄园、伊利雅特湾、阳光尚城、银河丽湾、阳光一百、中海国际社区、金地长靑湾等 ",
                        jy: "14",
                        al: "5"
                    },
                    {
                        img: require("../assets/imgs/tuandui/46.jpg"),
                        xm: "吴迪",
                        nx: "从业年限：5年",
                        by: "沈阳工业大学",
                        zp: " 世茂五里河 新润万寿里 朗明居 金水花城 盾安新一尚品 ",
                        jy: "5",
                        al: "5"
                    },
                    {
                        img: require("../assets/imgs/tuandui/47.jpg"),
                        xm: "冉柱凡",
                        nx: "从业年限：15年",
                        by: "抚顺师范大学",
                        zp: " 家装作品：中海盛京府、法库欧洲城、碧桂园银河城、中航两河流域中海央墅、华润奉天九里、华润橡树湾工装作品：大连文博贸易公司办公楼、沈阳焰域串吧、中国大地保险（新民店、辽中店、铁西店）办公楼、浦江苑售楼中心 ",
                        jy: "15",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/48.jpg"),
                        xm: "石浩然",
                        nx: "从业年限：10年",
                        by: "西安美术学院",
                        zp: " 奥林匹克花园、碧桂园银河城别墅区、世贸诺丁山别墅、万科城、新世界花园、华发首府、雅宾利华园、中海国际社区、金地长靑湾等 ",
                        jy: "10",
                        al: "5"
                    },
                    {
                        img: require("../assets/imgs/tuandui/49.jpg"),
                        xm: "毕思洋",
                        nx: "从业年限：9年",
                        by: "辽宁金融职业学院",
                        zp: " 中海央墅，碧桂园天墅，万科四季，奥园国际城，孔雀城，第一城等 ",
                        jy: "9",
                        al: "8"
                    },
                    {
                        img: require("../assets/imgs/tuandui/50.jpg"),
                        xm: "车蕴航",
                        nx: "从业年限：8年",
                        by: "北京理工大学",
                        zp: " 金地檀府  泰和龙庭 远洋和平府 尚景新世界 奉玺台别墅 ",
                        jy: "8",
                        al: "9"
                    },
                    {
                        img: require("../assets/imgs/tuandui/51.jpg"),
                        xm: "王硕",
                        nx: "从业年限：7年",
                        by: "东北林业大学",
                        zp: " 中海国际 金地滨河 中海康城 金地旭辉九韵风华 首创国际等 ",
                        jy: "7",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/52.jpg"),
                        xm: "王宝良",
                        nx: "从业年限：5年",
                        by: "辽宁美术学院",
                        zp: " 中海寰宇 金地名京 保利康桥 御景新世界 雅宾利花园 华润橡树湾 金地檀府 华润奉天九里等 ",
                        jy: "5",
                        al: "8"
                    }
                ]
            }
        },
        mounted() {
            $(".screen-type-item")
                .children("dd:first-child")
                .addClass("on");

            $('.designer-list li').hover(function(e){
                $(this).find('.designer-intro').css({opacity:1,top:"0"})
            },function(e){
                $(this).find('.designer-intro').css({opacity:0,top:"100%"})
            })
        }
    }
</script>

<style lang="less">
    .td_top {
        height: 77px;
    }

    .tuandui_header {
        width: 100%;
        height: 500px;
        position: relative;
    }

    .tuandui_header .bd {
        position: relative;
        left: 50%;
        margin-left: -960px;
        width: 1920px;
        height: 500px;
        z-index: 0;
    }

    .tuandui_header .img {
        width: 1920px;
        height: 500px;
        display: block;
    }


    /* 团队搜索框 */
    .tuandui_header .search-box {
        position: relative;
    }

    .tuandui_header .search-item {
        position: absolute;
        right: 30px;
        top: -100px;
        width: 290px;
        height: 64px;
        background: rgba(0, 0, 0, 0.31);
        z-index: 5;
    }

    .tuandui_header .search-item .search {
        float: none;
        margin: 12px auto;
        width: 200px;
        height: 40px;
        padding-left: 5px;
        line-height: 50px;
        font-size: 13px;
        border: 1px solid #c8c8c8;
        background: #fff;
        color: #323232;
        border-radius: 10px;
    }

    .tuandui_header .search-item .search input[type="text"] {
        width: 160px;
        height: 40px;
        line-height: 50px;
        font-size: 14px;
    }

    .tuandui_header .search input[type="text"] {
        float: left;
        width: 120px;
        height: 23px;
        line-height: 23px;
        font-size: 12px;
        color: #323232;
    }

    .tuandui_header .search-item .search input[type="submit"] {
        width: 40px;
        height: 40px;
        background: url("../assets/imgs/tuandui/search1.png") no-repeat center center;
        background-size: auto auto;
        background-size: 32px 32px;
    }

    .tuandui_header .search input[type="submit"] {
        float: right;
        width: 28px;
        height: 23px;
    }

    /* 房子标配 */
    .tuandui .page-position {
        font-size: 13px;
        color: #323232;
        padding: 18px 0;
    }

    .tuandui .page-position a {
        color: #323232;
    }

    .tuandui .screen-box {
        margin-top: 18px;
        border-top: 1px solid #c8c8c8;
        border-left: 1px solid #c8c8c8;
        border-right: 1px solid #c8c8c8;
    }

    .tuandui .screen-ul {
        position: relative;
    }

    .tuandui .screen-ul li {
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #c8c8c8;
    }

    .tuandui .screen-ul2 .screen-type {
        width: 60px;
    }

    .tuandui .screen-type {
        position: absolute;
        left: 0;
        width: 82px;
        font-size: 13px;
        height: 100%;
        line-height: 37px;
        color: #fff;
        text-align: center;
        background: #f1544d;
    }

    .tuandui .screen-ul2 .screen-type-item {
        padding-left: 66px;
    }

    .tuandui .screen-type-item {
        padding: 8px 0 3px 85px;
        overflow: hidden;
    }

    .tuandui .screen-type-item dd {
        float: left;
        padding: 0 8px;
        margin-left: 6px;
        line-height: 21px;
        margin-bottom: 5px;
    }

    .tuandui .screen-type-item dd:hover,
    .tuandui .screen-type-item dd.on {
        background: #3f4a55;
        color: #fff;
    }

    .tuandui .screen-type-item dd a,
    .tuandui .screen-type-item dd a {
        color: #323232;
        line-height: 21px;
    }

    .tuandui .screen-type-item dd:hover a,
    .tuandui .screen-type-item dd.on a {
        color: #fff;
    }


    /* 设计师简介 */
    .fashion-designer .area-title{
        margin-bottom: 30px;
    }
    .fashion-designer .area-title p{
        padding: 30px 0 6px 0;
margin-bottom: 6px;
text-align: center;
font-size: 30px;
color: #323232;
background: url("../assets/imgs/tuandui/area-title-line.png") no-repeat center bottom;
    }
    .fashion-designer .area-title span{
        display: block;
text-align: center;
font-size: 20px;
color: #646464;
    }
    .bg-color1 {
        background-color: #f0eeee;
        overflow: hidden;
    }

    .designer-list {
        margin-left: -13px;
        
    }

    .designer-list li {
        float: left;
        position: relative;
        width: 280px;
        margin-bottom: 14px;
        margin-left: 13px;
    }

    .designer-list .designer-pic {
        width: 280px;
        height: 336px;
    }

    .designer-pic {
        position: relative;
        /* width: 224px;
    height: 313px; */
        overflow: hidden;
    }

    .designer-pic img {
        width: 100%;
        height: 100%;
    }

    .designer-intro {
        opacity: 0;
        position: absolute;
        display: table;
        top: 100%;
        left: 0;
        padding: 0 20px 0;
        width: 100%;
        height: 100%;
        text-align: left;
        background: rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        transition: 0.2s all;
    }
    .designer-intro .designer-intro-con{
        vertical-align: middle;
        display: table-cell;
    }
    .designer-intro h3 {
        margin-bottom: 6px;
        font-size: 21px;
        color: #fff;
    }

    .designer-intro p {
        font-size: 15px;
        color: #fff;
        max-height: 100px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }

    .designer-info2 {
        height: 75px;
        text-align: left;
        padding: 0 30px;
        background: #fff;
    }

    .designer-info2 h3 {
        font-size: 17px;
        text-align: center;
        font-weight: normal;
        color: #323232;
        line-height: 26px;
        padding-top: 5px;
    }

    .designer-info2 p {
        max-width: 218px;
        font-size: 14px;
        line-height: 20px;
        color: #323232;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .designer-info2 span {
        text-align: left;
        font-size: 13px;
    }

    .lf {
        float: left;
    }

    .rg {
        float: right;
    }

    .designer-info2 span b {
        color: #ff0000;
        font-weight: normal;
    }

    /* 底部img */
    .anli_footer{
        margin: 15px 0;
    }
    .anli_footer a{
        display: block;
    }
    .anli_footer img{
        width: 100%;
        height: 100%;
    }
</style>