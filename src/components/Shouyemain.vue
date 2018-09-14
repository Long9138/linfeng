<template>
    <div id="Shouyemain">
        <div id="form1_box">
            <ul class="box">
                <li id="form1">
                    <a href="">
                        <p>免费验房</p>
                        <span>助您全面排查房屋质量问题</span>
                    </a>
                </li>
                <li id="form1">
                    <a href="">
                        <p>免费量尺</p>
                        <span>打造完美装修方案的第一步</span>
                    </a>
                </li>
                <li id="form1">
                    <a href="">
                        <p>免费设计</p>
                        <span>报名送充电宝，签单送家具</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shouyemain"
    }
</script>

<style scoped>
    /* 轮播下面form表单 */
    #form1_box{
        width: 100%;
       
        
    }
    #form1_box>ul{
        
       
    }
    #form1{
        float: left;
        margin: 17px 0 0 26px;
        padding: 25px 140px 25px 30px;
        box-sizing: border-box;
    }
    #form1:first-child {
        background: url("../assets/imgs/Shouyemain/icon01s.png") no-repeat;
    }
    #form1:nth-child(2) {
        background: url("../assets/imgs/Shouyemain/icon02s.png") no-repeat;
    }
    #form1:last-child {
        background: url("../assets/imgs/Shouyemain/icon03s.png") no-repeat;
    }
</style>