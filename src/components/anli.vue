<template>
    <div class="anli">
        <div class="al_top"></div>
        <!-- 案例轮播 -->
        <div class="anli_carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index) in lbimg" :key="index">
                    <img :src="item.img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 案例轮播搜索框 -->
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
                        <div class="screen-type">面积</div>
                        <dl class="screen-type-item">
                            <dd v-for="(item,index) in fzbp.mj" :key="index">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">功能</div>
                        <dl class="screen-type-item">
                            <dd v-for="(item,index) in fzbp.gn" :key="index">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 标配筛选 -->
        <div class="case-line box">
            <p>当前筛选：</p>
        </div>



        <!-- 样式图 -->
        <div class="box" style="overflow: hidden;">
            <div class="designer-case">
                <ul class="case-list" v-for="(item,index) in yst" :key="index">
                    <li>
                        <a href="#" target="_blank">
                            <div class="case-pic">
                                <img v-lazy="item.dt" alt="">
                                <div class="case-info">
                                    <div class="case-info-con">
                                        <h3>设计师：{{item.xm}}</h3>
                                        <p>
                                            设计说明：
                                            <br>
                                            {{item.sm}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="case-intro">
                                <h3>
                                    {{item.mz}}
                                    <br>
                                    {{item.gg}}
                                </h3>
                                <div class="case-designer">
                                    <img v-lazy="item.xt" alt="">
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 报价 -->
        <div class="anliBaojia">
            <div class="box">
                <anliBaojia />
            </div>

        </div>

        <!-- 底部img -->
        <div class="anli_footer">
            <a href="" class="box"><img src="../assets/imgs/anli/20180621142317506878.jpg" alt=""></a>
        </div>

    </div>
</template>

<script>
    import anliBaojia from "@/components/anliBaojia"
    export default {
        name: "anli",
        components: {
            anliBaojia
        },
        data() {
            return {
                // 轮播img
                lbimg: [
                    { img: require("../assets/imgs/Carousel/20180628184106948941.jpg") },
                    { img: require("../assets/imgs/Carousel/20180628194201460571.jpg") }
                ],

                // 房子标配
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
                    mj: [
                        "不限",
                        "70㎡以下",
                        "71㎡ - 90㎡",
                        "91㎡ - 120㎡",
                        "121㎡ - 150㎡",
                        "151㎡ - 300㎡",
                        "300㎡以上"
                    ],
                    gn: [
                        "不限",
                        "餐厅",
                        "卧室",
                        "卫生间",
                        "厨房",
                        "阳台",
                        "书房",
                        "儿童房",
                        "休闲区",
                        "衣帽间",
                        "门厅",
                        "过廊",
                        "户型图"
                    ]
                },

                // 样式图
                yst: [
                    {
                        dt: require("../assets/imgs/anli/ystDt/1.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/1.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/2.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/2.png"),
                        xm: "赵清风",
                        sm:
                            " 现代风格也叫年轻人风格，看似简简单单的装修，却比较有内涵，也比较受欢迎，简洁的表现形式来满足人们对空间环境的情感，本能和理性的需求，它在形式上以浪漫主义基础代表温馨、舒适。 ",
                        mz: "华强城",
                        gg: "144平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/3.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/3.png"),
                        xm: "王禹厶",
                        sm:
                            " 北欧装修风格在工艺上讲究尽善尽美，崇尚自然，通常以纯白，米白，木色等浅色系作为整体色调，给人舒心宁静的感觉，在极其简洁的北欧风格中，领略来自遥远北欧的独特魅力。 ",
                        mz: "月星中央花园",
                        gg: "106平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/4.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/4.png"),
                        xm: "李永翠",
                        sm:
                            " 简美式的家装在房屋设计、家具打造、色彩处理和元素拼接上都力求简单化，通过不拘一格的线条设计加简洁单一的色调，给人们提供最爽朗、最清脆的住宅环境。 ",
                        mz: "碧桂园星荟",
                        gg: "78平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/5.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/5.png"),
                        xm: "丁强",
                        sm:
                            " 本案以现代简约的风格来设计。以极小跳跃性的色彩为整体主色调，居家效果，简洁，大方，实用，是业主在繁杂的工作中放松心情，回到温馨的港湾。 ",
                        mz: "其士盛和祥",
                        gg: "90平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/6.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/6.png"),
                        xm: "赵海燕",
                        sm:
                            " 在中国文化风靡全球的现今时代，中式元素与现代材质的巧妙兼柔，唐宋家具、明清窗棂、布艺床品相互辉映，再现了移步变景的精妙小品。 ",
                        mz: "半岛公馆",
                        gg: "268平 新中式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/7.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/7.png"),
                        xm: "李欣雨",
                        sm:
                            " 本案风格定位为简美风格非常注重环保美观,但是对配饰的要求比较高。要通过软装家具进行格局的划分，整体采用深浅搭配的方式，营造一种舒适、美观的的家居氛围。 ",
                        mz: "保利海上五月花",
                        gg: "160平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/8.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/8.png"),
                        xm: "金明",
                        sm:
                            " 本案是北欧风格，提起欧式风格，大家普遍想到就是各种雕花石膏线和柱式，但本案采用的是现代理念，更偏向于简约现代的新表现，在年轻人的生活里，现代概念更贴合生活与美学的融合，这也是国内流行起来的现代北欧风格被客户所喜爱的一个方面。在设计的前期设计师也用鸟瞰图的形式，呈现了整体布局，全案考虑的做法，不同于大众设计都是一个点，一个位置的设计，容易造成装修不协调，层次不清晰和让业主迷惑的情况。 ",
                        mz: "金地檀府",
                        gg: "110平 欧式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/9.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/9.png"),
                        xm: "刘磊",
                        sm:
                            " 随着现代社会的发展，人们的生活水平也在不断的提高！住的方面也与以前不同，以前是有住的就行了，现在却要看着好看，住着温馨 ",
                        mz: "保利达翠提湾",
                        gg: "88平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/10.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/10.png"),
                        xm: "付明",
                        sm:
                            " 本案主要以北欧风格的格调定义整个空间的氛围，简约、舒适、清新的整体效果，针对业主的需求特别设计了几处多功能储物空间，对整体空间的空气流通做了调整，使空气对流更合理。 ",
                        mz: "中海和平之门",
                        gg: "109平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/11.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/11.png"),
                        xm: "郭斌",
                        sm:
                            "本案以北欧风格为主，而当今社会的快节奏抹去当年的柔美，北欧风格载体正在被当下设主流设计融入。设计师正是抓住对北欧风格设计的精髓为业主量身打造了不一样北欧风格。",
                        mz: "美的城",
                        gg: "86平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/12.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/12.png"),
                        xm: "富文",
                        sm:
                            " 房主想要房屋以简洁、实用、好打理为主，还要给她们留一些自由发挥的空间。所以在本案例中，设计师采用“少即是多”的设计理念，强调“留白”设计，线条简约流畅，各种材质和颜色的搭配，让居住空间更显主人的生活品味与生活态度。",
                        mz: "万锦香樟树",
                        gg: "80平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/13.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/13.png"),
                        xm: "罗佳",
                        sm:
                            " 此案设计依照河景房而设计，前后拥有大阳台，通风采光好，户型方正，结构合理，空间高。本案在设计手法上，以美式风格为主调，随意不过分张扬，而又恰到好处地把典雅之气渗透到每个角落，既突出房子本身的自然优势又适当彰显业主的个人品味，美式家具，古典灯具及欧式笔壁炉相融合，品位更加深刻。",
                        mz: "保利达江湾城",
                        gg: "140平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/14.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/14.png"),
                        xm: "勾越",
                        sm:
                            " 住房是摆在人们面前一个永久的问题。城市化的快速发展，家居装修是越来越讲究了，各式各样的装修风格呈现出来。简约黑白灰装修风格是现在很多年轻人装修的选择，没有花哨的色彩设计，也没有多余的装饰，一切都看起来那么素雅安静，黑白灰色调并不是暗沉和无趣，它营造的时尚感也是其他色调无法比拟的，现代简约风格设计定位：家是心灵的港湾。现代人面临着城市的喧嚣和污染，激烈的竞争压力，还有忙碌的工作和紧张的生活。因而，更加向往清新自然、随意的居室环境。越来越多的都市人开始摒弃繁缛豪华的装修，力求拥有一种自然简约的居室空间。",
                        mz: "新加坡花园",
                        gg: "77平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/15.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/15.png"),
                        xm: "郭强",
                        sm:
                            "现代风格在处理空间方面强调室内空间宽敞、室内通透，最大限度引入自然光。该案例基调明快，为业主创造出舒适、自然的居住氛围。色彩给人清新舒适之感，回家后扫清一天的匹配。",
                        mz: "华润24城",
                        gg: "133平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/16.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/16.png"),
                        xm: "李承成",
                        sm:
                            " 全心全意做设计，踏踏实实做装修。",
                        mz: "龙湖原府",
                        gg: "260平 混搭"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/17.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/17.png"),
                        xm: "王禹厶",
                        sm:
                            " 本案定位北欧风格，整体色调自然而富有灵性，充满创作活力。家具以榉木原色为基调，体现装饰家具的“人本”理念，贴近生活，品味高雅是主要特点，再就是造型、结构简练大方，整体配套自然和谐，色彩淡雅，与其它色彩搭配有很大的相容性。",
                        mz: "月星中央公园",
                        gg: "103平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/18.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/18.png"),
                        xm: "姜宇",
                        sm:
                            " 客户是年轻夫妻，追求舒适度，喜欢自由自在的生活方式，所以本案定义为简美风格。 ",
                        mz: "新世界",
                        gg: "160平 新中式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/19.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/19.png"),
                        xm: "徐昊",
                        sm:
                            " 该案设计采用loft风格，主色调采用黑白灰色，利用色彩丰富的软装配饰做以搭配，黑白灰为经典颜色，软装的搭配使整体空间不再平淡无奇，使空间层次更加丰富。",
                        mz: "郡原望庄",
                        gg: "120平 工业风"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20.png"),
                        xm: "韩宇",
                        sm:
                            " 本案设计以现代风格为主，主要追求简洁、实用舒适；厅里暖色调的应用和房间里的灰色应用，使整体感形成鲜明对比，设计手法是一种对北欧简装的新感知和新认识、得体有度的装饰让空间感变的极为舒适。",
                        mz: "华润中央公园",
                        gg: "45平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/21.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/21.png"),
                        xm: "魏来",
                        sm:
                            " 本案为简美风格，一直觉得，爱美式的人，应该是浪漫的，骨子里的浪漫射出来，就是柔和的家具线条和温润的灯光，这里将美式的精致与慵懒融合的恰到好处，奶茶色的主调，整体空间强调自然又给人满满的温暖感。",
                        mz: "国瑞城",
                        gg: "164平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/22.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/22.png"),
                        xm: "王欢",
                        sm:
                            " 本案为简约风格，遵循简约风格的特点，整体设计重点主要在格局与软装搭配上。 ",
                        mz: "绿城全运村",
                        gg: "100平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/23.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/23.png"),
                        xm: "李莹",
                        sm:
                            " 稳重，大气，质感，是成功人士的体现。 ",
                        mz: "瑞家坚果",
                        gg: "107平 港式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/24.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/24.png"),
                        xm: "郎峰川",
                        sm:
                            " 简美式风格是近几年最流行的一种风格，整体造价要比美式和欧式低很多，风格感好，性价比高。配色方案主要为深浅原木色，米色，装饰色为金色和黑色；材质搭配为实木，粗亚麻布料和白瓷。",
                        mz: "碧桂园繁华里",
                        gg: "90平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/25.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/25.png"),
                        xm: "陈聪",
                        sm:
                            " 现代风格其实是家装风格里最千变万化的设计，也是最难掌握的设计，既要满足客户的喜好又要满足整体的效果，所以现代风格要从细节出发！ ",
                        mz: "阳光100",
                        gg: "75平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/26.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/26.png"),
                        xm: "杨达",
                        sm:
                            " 日式风格有它固有的美态，自由，简单，生活本土化。 ",
                        mz: "世茂五里河",
                        gg: "83平 日式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/27.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/27.png"),
                        xm: "王充夷",
                        sm:
                            " 现代风格是现在比较流行的一种风格，利用现代的家具，装饰搭配，显示出美感。现代风格，追求时尚和潮流，注重功能的合理和实用性。以最简洁的造型和搭配，展现出最舒适，和谐的空间。 ",
                        mz: "金地左岸",
                        gg: "78平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/28.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/28.png"),
                        xm: "魏来",
                        sm:
                            " 围绕业主的整体需求 ，通过对传统文化的认识，将现在的元素和传统元素结合在一起。古朴典雅而又不失现代感，能反映出强烈的民族文化特征。 ",
                        mz: "伯爵源筑",
                        gg: "133平 新中式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/29.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/29.png"),
                        xm: "李丹",
                        sm:
                            " 北欧的设计风格，北欧风格回归于自然. ",
                        mz: "中海城学府",
                        gg: "85平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/30.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/30.png"),
                        xm: "罗佳",
                        sm:
                            " 该案设计采用迷情法尔赛设计风格，艺术与时间的雕琢，华贵与空间的妆点，灵魂与人生的交错，缔造出一个艺术殿堂。对原有建筑结构的理解与修改，利用现有的结构空间加以修饰，使其建筑结构更加丰富多彩。穹顶壁画与造景的窗画使空间的得到了艺术的升华。 ",
                        mz: "听雨观澜",
                        gg: "480平 其他"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/31.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/31.png"),
                        xm: "罗佳",
                        sm:
                            " 本案以现代中式为主的设计风格，运用现代简约的装饰手法与简洁的现代中式家具相结合，独特的造型使空间更加惬意，颜色的运用、室内外元素的融合使空间氛围更加亲近自然。 ",
                        mz: "远洋和府",
                        gg: "220平 新中式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/32.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/32.png"),
                        xm: "李欣雨",
                        sm:
                            " 本案风格定位为北欧风格,业主非常注重环保美观,对配饰的要求比较高。要通过软装家具进行格局的划分，整体采用深浅搭配的方式，营造一种舒适、美观的的家居氛围。 ",
                        mz: "龙湖唐宁ONE",
                        gg: "90平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/33.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/33.png"),
                        xm: "毕思洋",
                        sm:
                            " 本案以地中海为主的设计手法，中性时尚，温馨，丰富但不复杂，这种搭配令空间充满恒久的亲和力！ ",
                        mz: "华府丹郡",
                        gg: "95平 地中海"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/34.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/34.png"),
                        xm: "吴勇",
                        sm:
                            " 本案设计以北欧风格为主，整体空间较为干净舒适，储藏空间较多，整体色调偏深色感，但灯光偏亮，让整体空间变为和调。",
                        mz: "法兰香颂",
                        gg: "88平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/35.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/35.png"),
                        xm: "刘洪雷",
                        sm:
                            " 本案例合理的空间规划，把原始户外的面积全部扩到室内，是整个空间多一些用途，多出一些空间利用。做出有品位的家。 ",
                        mz: "沈阳客厅",
                        gg: "140平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/36.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/36.png"),
                        xm: "杜丙乾",
                        sm:
                            " 本案为现代风格装修，它以米色、鸡翅木色主色调，加上理石造型石材,镜面车边为装饰元素。整体设计明亮温馨，低调奢华，凝聚着一个温馨浪漫的家。 ",
                        mz: "远洋和平府",
                        gg: "162平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/37.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/37.png"),
                        xm: "张德军",
                        sm:
                            " 以点线面的抽象艺术代替繁复的造型。 ",
                        mz: "远洋天地",
                        gg: "120平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/38.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/38.png"),
                        xm: "张雨萌",
                        sm:
                            " 该案是围绕现代简约为主题，以简洁明快的设计风格为主调，简洁和实用是现代简约风格的基本特点。 ",
                        mz: "中海城锦城",
                        gg: "88平 混搭"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/39.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/39.png"),
                        xm: "徐昊",
                        sm:
                            " 本方案以简欧风格为主题，整体空间以暖黄色为主，采用了很多欧式造型的元素，营造出高端，上档次的空间氛围，“繁”与“简”的搭配使整个空间看起来既有格调，又不俗气。整体给人的感觉就是温馨，有档次。 ",
                        mz: "碧桂园天墅",
                        gg: "200平 欧式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/40.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/40.png"),
                        xm: "吴勇",
                        sm:
                            " 本案的装修风格属于现代简约风格，现代简约风格设计理念表现为外形简洁、功能强，强调室内空间形态和物件的单一性。居室色彩主调为白色,体现时代特征为主，没有过分的装饰，一切从功能出发，讲究造型比例适度、空间结构图明确美观，强调外观的明快、简洁。体现了现代生活快节奏、简约和实用，但又富有朝气的生活气息下面通过各个居室的现代简约风格设计说明,具体理解一下现代简约风格。 ",
                        mz: "万锦香樟树",
                        gg: "86平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/41.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/41.png"),
                        xm: "牛超群",
                        sm:
                            " 一家三口居住，刚需房，没什么特殊需求，很自然的推荐了现代简约风格来满足客户的居住需要！ ",
                        mz: "龙之梦.馨园",
                        gg: "66平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/42.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/42.png"),
                        xm: "菅垚",
                        sm:
                            " 本案以港式为主设计，港式风格家居多以金属色和线条感营造金碧辉煌的豪华感,简洁而不失时尚这种搭配令客户舒，黑白灰,简单的色调,简约的风格,沉静而不喧闹,这样独具精心养性的港式风格的家居，带给你不一样的生活享受,让你的生活不仅仅是生活,还是一种艺术。 ",
                        mz: "法兰香颂",
                        gg: "85平 港式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/43.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/43.png"),
                        xm: "吴勇",
                        sm:
                            " 本案的装修风格属于简约美式风格，美式风格没有欧式的繁华富贵，没有中式的庄重优雅，没有地中海的清新淡雅，它是以自然，略怀旧，舒适的形态将自己的风格特点呈现给我们。装修上总体给人以朴实、厚重感。整体采用深色的木色来做重点颜色，搭配为浅色的乳胶漆及布艺的沙发，采用简单的地砖斜拼，更能彰显出整体设计的不同之处。 ",
                        mz: "中海和平之门",
                        gg: "79平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/44.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/44.png"),
                        xm: "李欣雨",
                        sm:
                            " 采用简约明朗的线条，将空间进行了合理的分隔。应对扰嚷的都市生活，一处能让心灵沉淀的生活空间，是本设计在该方案中所体现的主要思想。因此，开放式的大厅设计给人以通透之感，避免视觉给人带来的压迫感，可缓解业主工作一天的疲惫。没有夸张，不显浮华，透过过于干干净净的设计手法，将业主的工作空间巧妙地融入到生活空间中。 ",
                        mz: "汇置尚都",
                        gg: "200平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/45.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/45.png"),
                        xm: "郑思雨",
                        sm:
                            " 本案的装修风格属于现代中式风格，相对中式风格更加的现代化，简洁不繁琐。适合不同年龄段的人群。本案针对客户是两位中年，热爱旅行，非常喜欢中式元素的家居风格。秉承功能至上，以人为本的原则。 ",
                        mz: "金石小镇",
                        gg: "107平 中式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/46.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/46.png"),
                        xm: "付续",
                        sm:
                            " 本案整体风格是北欧风格, 典型的北欧家具搭配简约的硬装,干净明快的空间感是整体设计的主题。 ",
                        mz: "鑫丰中心里",
                        gg: "60平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/47.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/47.png"),
                        xm: "李丹",
                        sm:
                            " 欧式风格的主元素，融入了生活元素。欧式的居室有着豪华大气，更多的是惬意和浪漫。带给家人不尽的舒服触感，更高的生活品质，更加有质感的生活品味。 ",
                        mz: "美的城",
                        gg: "220平 欧式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/48.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/48.png"),
                        xm: "郑思雨",
                        sm:
                            " 本案主要以清新、时尚的现代美式风格为主，对于居住空间小户型，设计方案比较追求实用和收纳还有空间的虚实结合，无处不体现出了和其他装修风格的不同，而现代美式风格不仅仅可以满足大空间的丰富造型对于这种小户型依然百试不厌体现出另一种美式的温馨和时尚赶，独一无二。 ",
                        mz: "富海澜湾半岛",
                        gg: "64平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/49.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/49.png"),
                        xm: "李欣雨",
                        sm:
                            " 本案风格定位为港式风格，港式风格是码头文化与殖民地文化的产物，对于钢性材料与线性材料的运用确是到了极致，也就是说，港式文化属于多源头文化。港式风格多以金属色和线条感营造金碧辉煌的豪华感，简洁而不失时尚。 ",
                        mz: "国瑞城",
                        gg: "135平 港式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/50.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/50.png"),
                        xm: "毕思洋",
                        sm:
                            " 本案是简美风格，在更细的材质与色彩元素，让欧式透出经典。明亮，大方，要求有一些设计在里面。 ",
                        mz: "马总花园",
                        gg: "123平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/51.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/51.png"),
                        xm: "冉柱凡",
                        sm:
                            " 本方案以后现代风格为主题，整体空间以黑白灰为主，简简单单的造型设计，比较冷淡的设计颜色搭配，整体空间给人一种冷静，干净的感觉。颜色采用的很单一、造型也没有很复杂，但是整体空间看起来却没有显得很空。 ",
                        mz: "金地铁西檀府",
                        gg: "155平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/52.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/52.png"),
                        xm: "刘鹏",
                        sm:
                            " 本案以现代风格为主题，现代设计追求的是空间实用性和灵活性。根据相互间的功能关系组合而成，功能空间相互渗透，空间的利用率也会得到极大的提升，冷暖色调相结合给予视觉上的冲击。 ",
                        mz: "奉天九里",
                        gg: "87平 现代简约"
                    }
                ]
            };
        },
        methods: {},
        mounted() {
            $(".screen-type-item")
                .children("dd:first-child")
                .addClass("on");

            $(".case-list li").hover(
                function (e) {
                    // alert(111111)
                    $(this)
                        .find(".case-info")
                        .css({ top: "0", opacity: "1" });
                },
                function (e) {
                    $(this)
                        .find(".case-info")
                        .css({ top: "100%", opacity: "0" });
                }
            );
        }
    };
</script>

<style lang="less">
    .al_top {
        height: 77px;
    }

    /* 案例轮播 */
    .el-carousel__container {
        height: 500px;
    }

    .anli_carousel .el-carousel__arrow {
        display: none;
    }

    .anli_carousel .el-carousel__item img {
        width: 100%;
        height: 100%;
    }

    .el-carousel__indicators {
        bottom: 20px;
    }

    .el-carousel__indicator {
        padding: 0;
    }

    .el-carousel__button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 15px;
    }

    .el-carousel__button:hover {
        background-color: red;
    }

    /* 案例轮播搜索框 */
    .anli .search-box {
        position: relative;
    }

    .anli .search-item {
        position: absolute;
        right: 30px;
        top: -100px;
        width: 290px;
        height: 64px;
        background: rgba(0, 0, 0, 0.31);
        z-index: 5;
    }

    .anli .search-item .search {
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

    .anli .search-item .search input[type="text"] {
        width: 160px;
        height: 40px;
        line-height: 50px;
        font-size: 14px;
    }

    .anli .search input[type="text"] {
        float: left;
        width: 120px;
        height: 23px;
        line-height: 23px;
        font-size: 12px;
        color: #323232;
    }

    .anli .search-item .search input[type="submit"] {
        width: 40px;
        height: 40px;
        background: url("../assets/imgs/anli/search1.png") no-repeat center center;
        background-size: auto auto;
        background-size: 32px 32px;
    }

    .anli .search input[type="submit"] {
        float: right;
        width: 28px;
        height: 23px;
    }

    /* 房子标配 */
    .page-position {
        font-size: 13px;
        color: #323232;
        padding: 18px 0;
    }

    .page-position a {
        color: #323232;
    }

    .screen-box {
        margin-top: 18px;
        border-top: 1px solid #c8c8c8;
        border-left: 1px solid #c8c8c8;
        border-right: 1px solid #c8c8c8;
    }

    .screen-ul {
        position: relative;
    }

    .screen-ul li {
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #c8c8c8;
    }

    .screen-ul2 .screen-type {
        width: 60px;
    }

    .screen-type {
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

    .screen-ul2 .screen-type-item {
        padding-left: 66px;
    }

    .screen-type-item {
        padding: 8px 0 3px 85px;
        overflow: hidden;
    }

    .screen-type-item dd {
        float: left;
        padding: 0 8px;
        margin-left: 6px;
        line-height: 21px;
        margin-bottom: 5px;
    }

    .screen-type-item dd:hover,
    .screen-type-item dd.on {
        background: #3f4a55;
        color: #fff;
    }

    .screen-type-item dd a,
    .screen-type-item dd a {
        color: #323232;
        line-height: 21px;
    }

    .screen-type-item dd:hover a,
    .screen-type-item dd.on a {
        color: #fff;
    }

    /* 标配筛选 */
    .case-line {
        padding: 0 20px;
        height: 42px;
        margin: 20px auto;
        color: #fff;
        background: #7f7f7f;
        box-sizing: border-box;
    }

    .case-line p {
        float: left;
        font-size: 14px;
        line-height: 42px;
    }

    /* 样式图 */
    .case-list {
        margin-left: -13px;
    }

    .case-list li {
        float: left;
        width: 280px;
        margin-left: 13px;
        margin-bottom: 13px;
    }

    .case-pic {
        position: relative;
        width: 280px;
        height: 210px;
        overflow: hidden;
    }

    .case-pic img {
        width: 100%;
        height: 100%;
    }

    .case-info {
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

    .case-info-con {
        vertical-align: middle;
        display: table-cell;
    }

    .case-info-con h3 {
        margin-bottom: 6px;
        font-size: 21px;
        color: #fff;
        font-weight: normal;
    }

    .case-info-con p {
        font-size: 15px;
        color: #fff;
        max-height: 100px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }

    .case-intro {
        position: relative;
        width: 100%;
        height: 70px;
        padding: 13px 80px 13px 20px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
    }

    .case-intro h3 {
        font-size: 15px;
        font-weight: normal;
        color: #323232;
    }

    .case-designer {
        position: absolute;
        top: 4px;
        right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transition: all 0.2s;
        overflow: hidden;
    }

    .case-designer img {
        display: block;
        width: 100%;
    }

    /* 报价 */
    .anliBaojia {
        height: 398px;
        overflow: hidden;
        margin-top: 40px;
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