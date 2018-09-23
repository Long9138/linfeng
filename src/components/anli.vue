<template>
    <div class="anli">
        <div class="anli_nav"></div>
        <!-- 案例轮播 -->
        <div class="anli_carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in lbimg" :key="item">
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
                            <dd v-for="item in fzbp.fg">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">户型</div>
                        <dl class="screen-type-item">
                            <dd v-for="item in fzbp.hx">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">面积</div>
                        <dl class="screen-type-item">
                            <dd v-for="item in fzbp.mj">
                                <a href="">{{item}}</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <div class="screen-type">功能</div>
                        <dl class="screen-type-item">
                            <dd v-for="item in fzbp.gn">
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
                <ul class="case-list" v-for="item in yst">
                    <li>
                        <a href="#" target="_blank">
                            <div class="case-pic">
                                <img  v-lazy="img1" v-for="img1 in aaa.img1" alt="">
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
                                    <img src="" alt="">
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "anli",
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
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "赵清风",
                        sm:
                            " 现代风格也叫年轻人风格，看似简简单单的装修，却比较有内涵，也比较受欢迎，简洁的表现形式来满足人们对空间环境的情感，本能和理性的需求，它在形式上以浪漫主义基础代表温馨、舒适。 ",
                        mz: "华强城",
                        gg: "144平 现代简约"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王禹厶",
                        sm:
                            " 北欧装修风格在工艺上讲究尽善尽美，崇尚自然，通常以纯白，米白，木色等浅色系作为整体色调，给人舒心宁静的感觉，在极其简洁的北欧风格中，领略来自遥远北欧的独特魅力。 ",
                        mz: "月星中央花园",
                        gg: "106平 北欧"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "李永翠",
                        sm:
                            " 简美式的家装在房屋设计、家具打造、色彩处理和元素拼接上都力求简单化，通过不拘一格的线条设计加简洁单一的色调，给人们提供最爽朗、最清脆的住宅环境。 ",
                        mz: "碧桂园星荟",
                        gg: "78平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        dt: require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        xt: require("../assets/imgs/anli/ystXt/20180624092105600317_avatar.png"),
                        xm: "王峰",
                        sm:
                            " 本案整体风格为简约美式风格。把各民族各地区的装饰装修和家具风格都带到了美国，同时由于美国地大物博，极大的放开了移民们对尺寸的欲望，使得美式风格以宽大，舒适，杂糅各种风格而著称。 简约风格的特色是将设计的元素、色彩、照明、原材料简化到最少的程度 ",
                        mz: "金地艺境",
                        gg: "135平 美式"
                    },
                    {
                        img1:[
                        require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        ]
                    }
                ],

                aaa: {
                    img1: [
                        require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        require("../assets/imgs/anli/ystDt/20180914135249840203_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg"),
                        // require("../assets/imgs/anli/ystDt/20180719141235219860_280_210.jpg")
                    ]
                }
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

            console.log('42'<'043')
        }
    };
</script>

<style lang="less">
    .anli_nav {
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
</style>