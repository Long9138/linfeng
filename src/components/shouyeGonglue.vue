<template>
    <div id="shouyeGonglue">
        <div class="strategy">
            <div class="box">
                <div class="area-title">
                    <p>看攻略</p>
                    <span>完美装修面面观</span>
                </div>
                <div class="strategy-box">
                    <ul class="strategy-ul">
                        <li class="strategy-li" v-for="item in data">
                            <div class="strategy-phase">
                                <div class="phase-title  phase-title1">
                                    <div></div>
                                    <p></p>
                                </div>
                                <div class="strategy-phase-con">
                                    <ul class="phase1">
                                        <li>
                                            <a href="">
                                                <div class="phase1-pic">
                                                    <img :src="item.zbimg1" alt="">
                                                </div>
                                                <div class="phase1-pic-text">
                                                    <p>{{item.zbbt1}}</p>
                                                    <span>{{item.zbbtjj1}}</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt2}}</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt3}}</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt4}}</p>
                                            </a>
                                        </li>
                                    </ul>

                                    <ul class="phase1">
                                        <li>
                                            <a href="">
                                                <div class="phase1-pic">
                                                    <img :src="item.zbimg2" alt="">
                                                </div>
                                                <div class="phase1-pic-text">
                                                    <p>{{item.zbbt5}}</p>
                                                    <span>{{item.zbbtjj5}}</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt6}}</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt7}}</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <p>{{item.zbbt8}}</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "shouyeGonglue",
        data() {
            return {
                data: [
                    {
                        zbimg1: require("../assets/imgs/Shouyemain/20180808113327630996.jpg"),
                        zbbt1: "什么装修风格好",
                        zbbtjj1:
                            "很多业主朋友第一次装修存在一个问题，就是“到底什么装修风格好”，自己适合哪种装修风格？什么装修风格既实惠又好看呢？林凤装饰给大家详细介绍一下。",
                        zbbt2: "沈阳装修公司-林凤装饰徽派工艺介绍",
                        zbbt3: "整体装修模式相比传统装修模式优势",
                        zbbt4: "极简北欧装饰风格，编织美好生活",
                        zbimg2: require("../assets/imgs/Shouyemain/20180804155945320687.jpg"),
                        zbbt5: "什么是全案整装,全案整装对装修行业的改变",
                        zbbtjj5:
                            "全案家装是以入住作为产品配置标准，从基装、主材、家居到配饰，提供完整的装修服务，是根据客户的装修个性个性化需要进行一对一家装定制",
                        zbbt6: "小资时代，轻美式风格装修",
                        zbbt7: "验房师价格,最详细验房师验房步骤",
                        zbbt8: "自己毛坯房子装修的步骤流程赶紧收藏了！"
                    },

                    {
                        zbimg1: require("../assets/imgs/Shouyemain/20180627133838142819.jpg"),
                        zbbt1: "房屋改造装修水电的全步骤",
                        zbbtjj1:
                            "在家装改造中，没有像水电工程那样不起眼，却又如此重要的项目。因为水电一旦出现问题，如漏水、爆裂，常常搞得人居无宁日、痛苦不堪。接下来小兔就为你分享水电改造的全过程，赶紧一起来看看吧!",
                        zbbt2: "客厅装修成卧室怎么做 客厅装修成卧室的注意事项介绍",
                        zbbt3: "旧房改造翻新的步骤和注意事项",
                        zbbt4: "改落地窗是否可行 改落地窗的具体步骤介绍",
                        zbimg2: require("../assets/imgs/Shouyemain/20180627132013712213.jpg"),
                        zbbt5: "将阳台硬要改成卧室有你哭的",
                        zbbtjj5:
                            "现代人买房，往往买小户型居多，一家人刚好够住。而对于小户型来说，合理的利用空间是很有必要的，不少人为了多个房间，选择将阳台改造成卧室、休闲区或者书房等，这样的改造确实可以让房子多出4-5平米，但大家都忽略了一个很重要的问题，那就是安全问题。",
                        zbbt6: "厨房能换位置吗?在风水学上有何影响",
                        zbbt7: "厨房改水电的注意事项有哪些",
                        zbbt8: "必备知识：装修结构拆改把握五大原则"
                    },

                    {
                        zbimg1: require("../assets/imgs/Shouyemain/20180627135618638137.png"),
                        zbbt1: "最全的 客厅挂画风水讲究及挂画风水禁忌",
                        zbbtjj1:
                            "家居装修中软装的装饰也是很重要的，尤其是客厅，展现一个男人事业的标志的地方，客厅的布置很重要。客厅装饰中客厅挂画是很多人的客厅装饰的选择。那么客厅挂画要怎样布置才美观又能为家庭好的风水呢?",
                        zbbt2: "卧室植物的摆放风水及注意事项",
                        zbbt3: "水龙头漏水怎么办?教你几招实用方法",
                        zbbt4: "煤气灶打不着火原因和处理方法",
                        zbimg2: require("../assets/imgs/Shouyemain/20180627134454955999.png"),
                        zbbt5: "空调能效比是什么意思 空调能效比怎么算",
                        zbbtjj5:
                            "空调能效，通常是家用空调制冷能效比(EER)的代称，是额定制冷量与额定功耗的比值。此外，冷暖式家用空调还包含制热能效比(COP)这个概念，指的是额定制热量与额定功率的比值。",
                        zbbt6: "地漏下水慢怎么办？三大解决地漏下水慢妙招",
                        zbbt7: "空调买变频还是定频，比比就知道",
                        zbbt8: "6招教您如何挑选地毯，即省钱又美观"
                    }
                ]
            };
        },
        methods: {},
        mounted() { }
    };
</script>

<style lang="less">
    p:hover {
        color: red;
    }

    .strategy {
        padding-bottom: 40px;
        float: left;
        margin: 0 auto;


    }

    .area-title {
        margin-bottom: 30px;
    }

    .area-title p {
        padding: 30px 0 6px 0;
        margin-bottom: 6px;
        text-align: center;
        font-size: 30px;
        color: #323232;
        background: url("../assets/imgs/Shouyemain/area-title-line.png") no-repeat center bottom;
    }

    .area-title span {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #646464;
    }

    .strategy-box {
        height: 560px;
    }

    .strategy-ul {
        margin-left: -28px;
    }

    .strategy-li {
        float: left;
        position: relative;
        width: 368px;
        height: 540px;
        margin-left: 28px;
    }

    .strategy-phase {
        position: absolute;
        left: 50%;
        margin-left: -184px;
        width: 368px;
        box-shadow: 0 0 20px #b1b1b1;
        transition: 0.2s all;
    }

    .phase-title {
        position: relative;
        height: 115px;
        line-height: 115px;
        font-size: 25px;
        color: #323232;
        text-align: center;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .phase-title1 {
        background-image: url("../assets/imgs/Shouyemain/strategy01.jpg");
    }

    .phase-title>div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        background-size: cover;
        opacity: 0.6;
    }

    .phase-title p {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        line-height: 115px;
        font-size: 25px;
        color: #323232;
        text-align: center;
    }

    .strategy-phase-con {
        padding: 28px 22px 10px;
    }

    .phase1 {
        margin-bottom: 10px;
    }

    .phase1 li:first-child {
        padding-left: 0;
    }

    .phase1 li {
        padding-bottom: 10px;
        overflow: hidden;
    }

    .phase1 a {
        color: #323232;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: normal;
    }

    .phase1-pic {
        float: left;
        width: 119px;
        height: 79px;
    }

    .phase1-pic img {
        width: 119px;
        height: 79px;
    }

    .phase1-pic-text {
        float: right;
        width: 60%;
    }

    .phase1 p {
        padding-left: 10px;
        background: url("../assets/imgs/Shouyemain/dot.png") no-repeat left 7px;
    }

    .phase1-pic-text p {
        font-size: 14px;
        width: 190px;
        height: 38px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }

    .phase1-pic-text span {
        display: block;
        height: 32px;
        font-size: 12px;
        color: #646464;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        padding-left: 10px;
        box-sizing: border-box;
    }
</style>