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
            <div class="case-line">
                <p>当前筛选：</p>
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
                    { img: require('../assets/imgs/anli/20180628184106948941.jpg') },
                    { img: require('../assets/imgs/anli/20180628194201460571.jpg') }
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
                }


            }
        },
        methods: {

        },
        mounted() {
            $('.screen-type-item').children('dd:first-child').addClass('on')
        }
    }
</script>

<style lang="less">

    .anli_nav {
        height: 77px;
    }

    /* 案例轮播 */
    .el-carousel__container {
        height: 500px;
    }

    .el-carousel__arrow {
        display: none;
    }

    .el-carousel__item img {
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
    .search-box {
        position: relative;
    }

    .search-item {
        position: absolute;
        right: 30px;
        top: -100px;
        width: 290px;
        height: 64px;
        background: rgba(0, 0, 0, 0.31);
        z-index: 5;
    }

    .search-item .search {
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

    .search-item .search input[type="text"] {
        width: 160px;
        height: 40px;
        line-height: 50px;
        font-size: 14px;
    }

    .search input[type="text"] {
        float: left;
        width: 120px;
        height: 23px;
        line-height: 23px;
        font-size: 12px;
        color: #323232;
    }

    .search-item .search input[type="submit"] {
        width: 40px;
        height: 40px;
        background: url("../assets/imgs/anli/search1.png") no-repeat center center;
        background-size: auto auto;
        background-size: 32px 32px;
    }

    .search input[type="submit"] {
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
        margin-top: 20px;
        color: #fff;
        background: #7f7f7f;
    }

    .case-line p {
        float: left;
        font-size: 14px;
        line-height: 42px;
    }
</style>