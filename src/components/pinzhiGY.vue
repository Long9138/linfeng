<template>
    <div>
        <!-- 工艺头部img -->
        <div class="GY_top_imgs">
            <div class="GY_top_imgs_1">
                <ul>
                    <li><img src="../assets/imgs/pinzhi/pinzhiGY/20180624154722405557.jpg" alt=""></li>
                </ul>
            </div>
            <div>
                <img src="../assets/imgs/pinzhi/pinzhiGY/20180624154722248150.jpg" alt="">
            </div>
            <div>
                <img src="../assets/imgs/pinzhi/pinzhiGY/20180624154722250128.jpg" alt="">
            </div>
        </div>


        <!-- 特色工艺 -->
        <div class="tegy">
            <div class="box">
                <div class="area-title">
                    <p>林凤特色工艺</p>
                    <span>匠心淬炼 锻造过硬品质</span>
                </div>
                <!-- 轮播 -->
                <div class="tegy_lb">
                    <a href="" class="sPrev"></a>
                    <a href="" class="sNext"></a>
                    <div>
                        <div class="tempWrap">
                            <ul>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less">
    @media screen and (max-width: 1162px) {
        .GY_top_imgs div {
            width: 1162px;
        }
    }

    .GY_top_imgs {
        width: 100%;
    }

    .GY_top_imgs img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .GY_top_imgs_1 {
        position: relative;
        left: 50%;
        margin-left: -960px;
        width: 1920px;
        height: 426px;
    }

    .GY_top_imgs_1 img {
        width: 1920px;
        height: 426px;
    }


    /* 特色工艺 */
    .tegy {
        height: 476px;
        width: 100%;
        background: url('../assets/imgs/pinzhi/pinzhiGY/pz-pic06.jpg') no-repeat 100% 100%;
    }

    .tegy .area-title {
        margin-bottom: 30px;
    }

    .tegy p {
        color: #fff;
        background: url("../assets/imgs/pinzhi/pinzhiGY/area-title-line.png") no-repeat center bottom;
        padding: 30px 0 6px 0;
        text-align: center;
        font-size: 30px;
    }

    .tegy span {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #646464;
    }

    /* 轮播 */
    .tegy_lb {
        position: relative;
    }

    .tegy_lb .sPrev {
        background: url("../assets/imgs/pinzhi/pinzhiGY/left3.png") no-repeat center;
        left: -50px;
    }

    .tegy_lb .sNext {
        background: url("../assets/imgs/pinzhi/pinzhiGY/right3.png") no-repeat center;
        right: -50px;
    }

    .tegy_lb .sPrev,
    .tegy_lb .sNext {
        position: absolute;
        top: 50%;
        margin-top: -47px;
        display: block;
        width: 27px;
        height: 94px;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
    }

    .tempWrap {
        overflow: hidden;
        position: relative;
        width: 1176px;
    }

    .tempWrap ul {
        width: 2940px;
        /* left: -1176px; */
        position: relative;
        overflow: hidden;
        padding: 0px;
        margin: 0px;
    }
</style>