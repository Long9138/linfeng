<template>
    <div class="tuandui">
        <div class="tuandui_nav"></div>
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
                        <div class="screen-type">需求</div>
                        <dl class="screen-type-item">
                            <dd v-for="item in fzbp.xq">
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
                    <ul class="designer-list"  v-lazy="item" v-for="item in tdsjs" >
                        <li>
                            <a href="" target="_blank">
                                <div class="designer-pic">
                                    <img :src="item.img" alt="">
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
                        img: require("../assets/imgs/tuandui/20180624091056692739.jpg"),
                        xm: "李欣雨",
                        nx: "从业年限：9年",
                        by: "沈阳航空航天",
                        zp: " 金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等 ",
                        jy: "9",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/20180623171436852645.jpg"),
                        xm: "白涵琦",
                        nx: "从业年限：8年",
                        by: "吉林师范大学",
                        zp: " 碧桂园公园里 碧桂园繁华里 远洋大河宸章 金地檀悦 中海和平之门 金地悦峰 中海城提香 艺格风情湾 宏发英里 郡原小石城等 ",
                        jy: "8",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/20180623171436852645.jpg"),
                        xm: "李欣雨",
                        nx: "从业年限：9年",
                        by: "沈阳航空航天",
                        zp: " 金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等 ",
                        jy: "9",
                        al: "7"
                    },
                    {
                        img: require("../assets/imgs/tuandui/20180623171436852645.jpg"),
                        xm: "李欣雨",
                        nx: "从业年限：9年",
                        by: "沈阳航空航天",
                        zp: " 金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等 ",
                        jy: "9",
                        al: "7"
                    }
                ]
            }
        },
        mounted() {
            $(".screen-type-item")
                .children("dd:first-child")
                .addClass("on");
        }
    }
</script>

<style lang="less">
    .tuandui_nav {
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

    .designer-intro {
        text-align: left;
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
</style>