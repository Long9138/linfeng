<template>
    <div id="quanan">
        <div class="banner-zz">
            <div class="banner banner-B">
                <div class="bd">
                    <img src="../assets/imgs/Quanan/20180707165250951495.jpg" alt="">
                </div>
            </div>
            <img src="../assets/imgs/Quanan/zz-jt.png" alt="" class="zz-jt">
        </div>
        <div class="box">
            <div class="area-title">
                <p>解决传统装修模式之痛</p>
                <span>轻松收获完美整家</span>
            </div>
        </div>
        <div class="yul">
            <div>
                <div style="text-align:center;">
                    <img src="../assets/imgs/Quanan/20180828153818874151.jpg" alt="">
                    <img src="../assets/imgs/Quanan/20180828153436691915.jpg" alt="">
                    <img src="../assets/imgs/Quanan/20180828153450531570.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- 展示图 -->
        <div class="box">
            <div class="area-title area-title-third">
                <p>林凤全案整装</p>
                <span>极致之选 完美体验</span>
            </div>
            <div class="zz-tap-one">
                <ul class="zz-tap-ul">
                    <li>
                        <p>客厅</p>
                        <span>KETING</span>
                    </li>
                    <li>
                        <p>餐厅</p>
                        <span>CANTING</span>
                    </li>
                    <li>
                        <p>卧室</p>
                        <span>WOSHI</span>
                    </li>
                    <li>
                        <p>厨房</p>
                        <span>CHUFANG</span>
                    </li>
                    <li>
                        <p>卫生间</p>
                        <span>WEISHENGJIAN</span>
                    </li>
                    <li>
                        <p>阳台</p>
                        <span>YANGTAI</span>
                    </li>
                </ul>
                <div class="zz-tap-ul-box">
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180708160345120571.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180708160345350543.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180708160345487707.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180708160345809634.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085218992913.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028651348.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085838651074.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028411105.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085838957977.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028979373.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180629092947462438.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028218515.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 效果图 -->
        <div class="box">
            <div class="area-title area-title-third">
                <p>还原率高·所见即所得</p>
                <div class="jx-area">
                    <a href="#">全案整装效果图</a>
                    <a href="#">全案整装实景图</a>
                </div>
            </div>

            <!-- 安全轮播效果 -->
            <div class="quanan_lbxg">
                <el-carousel :interval="2000" arrow="always">
                    <el-carousel-item v-for="(item,index) in lbxg" :key="index">
                        <img :src="item" alt="" >
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <!-- 设计师 -->
        <div class="box">
            <div class="area-title area-title3">
                <p>资深全案设计师</p>
                <span>一对一定制个性风格</span>
                <a href="#">更多设计师</a>
            </div>
            <div class="designer-list-box">
                <ul class="designer-list designer-list-second">
                    <li v-for="(item,index) in data" :key="index">
                        <a href="" target="_blank">
                            <div class="designer-pic">
                                <img :src="item.img" alt="">
                                <div class="designer-intro">
                                    <div class="designer-intro-con">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.age}}</p>
                                        <p>
                                            毕业院校：
                                            <br>
                                            {{item.biye}}
                                        </p>
                                        <br>
                                        <p>
                                            主要作品：
                                            <br>
                                            {{item.zyzp}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="designer-info2">
                                <h3>{{item.name}}</h3>
                                <p>
                                    <span class="lf">
                                        从业经验：
                                        <b>{{item.jingyan}}</b>
                                        年
                                    </span>
                                    <span class="rg">
                                        案例作品：
                                        <b>{{item.alzp}}</b>
                                        套
                                    </span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 相关问答 -->
        <div class="aq-box">
            <div class="area-title">
                <p>相关问答</p>
                <span>深刻为您解答整装困惑</span>
            </div>
            <div class="zz-aq-list">
                <li>
                    <div class="zz-aq-con">
                        <div class="aq-con">
                            <div class="question">什么是全案整装？</div>
                            <div class="answer">全案整装是全案设计+整体装修。</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="zz-aq-con">
                        <div class="aq-con">
                            <div class="question">除了全案整装还有别的装修模式吗？ </div>
                            <div class="answer">当然有！林凤装饰同时提供半包、大包、整装模式满足业主。</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="zz-aq-con">
                        <div class="aq-con">
                            <div class="question">饭厅灯具有什么风水讲究？</div>
                            <div class="answer">造型不要太繁琐；灯光以暖光适宜，利于加深家人的感情交流。 </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="zz-aq-con">
                        <div class="aq-con">
                            <div class="question">全案整装都包括什么东西？ </div>
                            <div class="answer">简单来说，效果图上任何能看到的东西都含在全案整装内。</div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "quanan",
        data() {
            return {
                data: [
                    {
                        img: require("../assets/imgs/Quanan/20180624091056692739.jpg"),
                        name: "李欣雨",
                        age: "从业年限：9年",
                        biye: "沈阳航空航天",
                        zyzp: "金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等",
                        jingyan: "9",
                        alzp: "6"
                    },
                    {
                        img: require("../assets/imgs/Quanan/20180624091742442279.jpg"),
                        name: "段超宇",
                        age: "从业年限：7年",
                        biye: "沈阳建筑大学",
                        zyzp:
                            " 沈阳林凤庄园度假中心外建筑项目设计、阜新盛世公馆独栋别墅项目、营口天沐颐泉联排别墅项目、阜新民宿建筑项目、沈阳蓝乔圣菲独栋别墅项目、沈阳碧桂园公园里联排别墅项目 、沈阳碧桂园钻石墅联排别墅项目、伊利亚特湾双拼别墅项目、荣盛香堤澜山双拼别墅项目、山东莱茵名都别墅样板间项目。",
                        jingyan: "7",
                        alzp: "4"
                    },
                    {
                        img: require("../assets/imgs/Quanan/20180623171436852645.jpg"),
                        name: "白涵琦",
                        age: "从业年限：8年",
                        biye: "吉林师范大学",
                        zyzp:
                            " 碧桂园公园里 碧桂园繁华里 远洋大河宸章 金地檀悦 中海和平之门 金地悦峰 中海城提香 艺格风情湾 宏发英里 郡原小石城等 ",
                        jingyan: "8",
                        alzp: "6"
                    },
                    {
                        img: require("../assets/imgs/Quanan/20180624091146241751.jpg"),
                        name: "孙贺",
                        age: "从业年限：12年",
                        biye: "南京政治学院",
                        zyzp: " 中粮·龙玺世家 龙湖·西府原著 保利·大都会 旭辉·东樾城 ",
                        jingyan: "12",
                        alzp: "5"
                    }
                ],
                lbxg: [require("../assets/imgs/Carousel/20180627171843422201.jpg"),
                require("../assets/imgs/Carousel/20180627171809139990.jpg"), require("../assets/imgs/Carousel/20180627171910188494.jpg")]
            };
        },
        methods: {},
        mounted() {
            $(".zz-tap-ul")
                .find("li")
                .on("click", function (e) {
                    var index = $(e.target)
                        .parent()
                        .index();
                    // console.log(index)
                    $(".zz-tap-con:eq(" + index + ")")
                        .show()
                        .siblings()
                        .hide();
                });

            // 设计师
            $(".designer-list li").hover(
                function (e) {
                    $(this)
                        .find(".designer-intro")
                        .stop()
                        .animate({ top: "0" }, 100);
                },
                function (e) {
                    $(this)
                        .find(".designer-intro")
                        .stop()
                        .animate({ top: "100%" }, 100);
                }
            );


            $('.quanan_lbxg .el-carousel__arrow').appendTo($('.quanan_lbxg'))

            
        }
    };
</script>

<style lang="less">
    .banner-zz {
        position: relative;
    }

    .banner {
        width: 100%;
        height: 500px;
        overflow: hidden;
        position: relative;
    }

    .banner .bd {
        position: relative;
        left: 50%;
        margin-left: -960px;
        width: 1920px;
        height: 500px;
        z-index: 0;
    }

    .banner .bd img {
        width: 1920px;
        height: 500px;
        display: block;
    }

    .zz-jt {
        position: absolute;
        left: 50%;
        margin-left: -21px;
        bottom: -25px;
    }

    /* 展示图 */
    .area-title {
        margin-bottom: 30px;
    }

    .area-title p {
        padding: 30px 0 6px 0;
        margin-bottom: 6px;
        text-align: center;
        font-size: 30px;
        color: #323232;
        background: url("../assets/imgs/Quanan/area-title-line.png") no-repeat center bottom;
    }

    .area-title span {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #646464;
    }

    .yul div img {
        display: block;
        width: 100%;
        height: auto;
    }

    .zz-tap-one {
        position: relative;
    }

    .zz-tap-ul {
        position: absolute;
        left: 587px;
        top: 0;
        width: 200px;
    }

    .zz-tap-ul li {
        height: 83px;
        border-top: 1px solid #fff;
        width: 200px;
        color: white;
        background: #f1544d;
        text-align: center;
        cursor: pointer;
    }

    .zz-tap-ul li:hover,
    .zz-tap-ul li.on {
        background: #f27671;
    }

    .zz-tap-ul li:first-child {
        border-top: none;
    }

    .zz-tap-ul li p {
        font-size: 20px;
        color: #fff;
        padding-top: 23px;
    }

    .zz-tap-ul li span {
        display: block;
        font-size: 10px;
        opacity: 0.5;
        color: #fff;
        text-transform: uppercase;
    }

    .zz-tap-con {
        display: none;
        height: 503px;
    }

    .zz-tap-con:first-child {
        display: block;
    }

    .zz-tap-pic-lf {
        position: relative;
        width: 587px;
        height: 503px;
        float: left;
    }

    .zz-tap-pic-lf img {
        width: 964px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
    }

    .zz-tap-pic-rg {
        position: relative;
        float: right;
        width: 375px;
        height: 503px;
    }

    .zz-tap-pic-rg img {
        position: absolute;
        top: 0;
        left: 0;
        width: 756px;
        height: 503px;
        float: right;
    }

    /* 效果图 */

    .area-title .jx-area {
        width: 413px;
        height: 40px;
        overflow: hidden;
        margin: 0 auto;
    }

    .area-title .jx-area a {
        float: left;
        margin-right: 13px;
        width: 200px;
        height: 40px;
        border: solid 1px #333a47;
        box-sizing: border-box;
        text-align: center;
        line-height: 38px;
        font-size: 18px;
        color: #333a47;
        cursor: default;
    }

    .area-title .jx-area a:last-child {
        margin-right: 0;
    }

    .quanan_lbxg{
        position: relative;
    }
    
    .quanan_lbxg .el-carousel__container{
        height: 435px;
        width: 1160px;
    }
    .quanan_lbxg .el-carousel__arrow{
        width: 39px;
        height: 79px;
    }
    .quanan_lbxg .el-carousel__arrow i{
        display: none;
    }
    .quanan_lbxg .el-carousel__arrow--left{
        background: url('../assets/imgs/Carousel/left2.png') no-repeat center;
        left: -50px;
    }
    .quanan_lbxg .el-carousel__arrow--right{
        background: url('../assets/imgs/Carousel/right2.png') no-repeat center;
        right: -50px;
    }  
    .quanan_lbxg .el-carousel__indicators{
        display: none;
    }

    /* 设计师 */
    .area-title3 {
        position: relative;
    }

    .area-title3 a {
        position: absolute;
        right: 0;
        top: 50px;
        display: block;
        width: 120px;
        height: 40px;
        border-radius: 10px;
        background: #f1544d;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        color: white;
    }

    .designer-list {
        margin-left: -13px;
        height: 336px;
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
        overflow: hidden;
    }

    .designer-pic img {
        width: 100%;
        height: 100%;
    }

    .designer-intro {
        opacity: 1;
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

    .designer-intro-con {
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

    .designer-list-second .designer-info2 {
        border: 1px solid #e6e6e6;
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

    // 相关问答
    .aq-box {
        overflow: hidden;
        width: 100%;
    }

    .zz-aq-list li {
        position: relative;
        float: left;
        width: 50%;
        padding: 25px 0;
    }

    .zz-aq-con {
        width: 581px;
    }

    .zz-aq-list li .aq-con {
        padding: 0 35px;
    }

    .zz-aq-list li:first-child .zz-aq-con,
    .zz-aq-list li:nth-child(3) .zz-aq-con {
        float: right;
    }

    .question {
        height: 45px;
        padding-left: 56px;
        margin-bottom: 10px;
        background: url("../assets/imgs/Quanan/question.png") no-repeat left top;
        background-size: auto auto;
        background-size: 45px 45px;
        font-size: 20px;
        color: #323232;
        line-height: 45px;
    }

    .answer {
        min-height: 57px;
        padding-left: 56px;
        font-size: 15px;
        color: #646464;
        line-height: 20px;
        background: url("../assets/imgs/Quanan/answer.png") no-repeat left top;
        background-size: auto auto;
        background-size: 45px 45px;
    }
</style>