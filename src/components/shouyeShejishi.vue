<template>
<div id="shouyeShejishi">
<div class="fashion-designer bg-color2">
  <div class="box">
    <div class="area-title area-title-second">
      <p>人气设计师</p>
      <span>量身定制专属空间风格</span>
    </div>
    <div class="fashion-designer-box">
    <ul >
      <li v-for='item in data'>
        <div class="designer-show">
          <a href="">
            <div class="designer-pic">
              <img :src='item.imgs' alt="">
              <div class="designer-intro">
                <div class="designer-intro-con">
                  <h3>{{item.name}}</h3>
                  <p>{{item.congye}}</p>
                  <p>毕业院校：
                    <br>
                    {{item.biye}}
                  </p>
                  <br>
                  <p>
                      主要作品：
                      <br>     
                       {{item.zuopin}}
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div class="designer-info">
            <p>{{item.name}}</p>
            <span>{{item.jianjie}}</span>
            <a href="" class="form3 pop-btn">预约设计</a>
          </div>
        </div>
      </li>
    </ul>
    <a href="" class="more-designer">更多精英设计</a>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "shouyeShejishi",
  data() {
    return {
      data:[
        {imgs:require('../assets/imgs/Shouyemain/20180714120215672332.jpg'),
        name:'李欣雨',
        congye:'从业年限：9年',
        biye:'沈阳航空航天',
        zuopin:'金地地产 中海地产 龙湖地产 万科地产 碧桂园地产等',
        jianjie:'杯水会因为容器的精美而变成享受，空间会因为陈设的魅力而更显精彩。'},
        {imgs:require('../assets/imgs/Shouyemain/20180714120215794528.jpg'),
        name:'段超宇',
        congye:'从业年限：7年',
        biye:'沈阳建筑大学',
        zuopin:'沈阳林凤庄园度假中心外建筑项目设计、阜新盛世公馆独栋别墅项目、营口天沐颐泉联排别墅项目、阜新民宿建筑项目、沈阳蓝乔圣菲独栋别墅项目、沈阳碧桂园公园里联排别墅项目 、沈阳碧桂园钻石墅联排别墅项目、伊利亚特湾双拼别墅项目、荣盛香堤澜山双拼别墅项目、山东莱茵名都别墅样板间项目。',
        jianjie:'设计就是室内室外的互动、硬装与软装的互动，形式服从功能的思维。'},
        {imgs:require('../assets/imgs/Shouyemain/20180714120215599438.jpg'),
        name:'白涵琦',
        congye:'从业年限：8年',
        biye:'吉林师范大学',
        zuopin:'碧桂园公园里 碧桂园繁华里 远洋大河宸章 金地檀悦 中海和平之门 金地悦峰 中海城提香 艺格风情湾 宏发英里 郡原小石城等',
        jianjie:'用有限的空间做无限的设计'},
        {imgs:require('../assets/imgs/Shouyemain/20180714120215819219.jpg'),
        name:'孙贺',
        congye:'从业年限：12年',
        biye:'南京政治学院',
        zuopin:'中粮·龙玺世家 龙湖·西府原著 保利·大都会 旭辉·东樾城',
        jianjie:'千人千面，设计以人为本才是王道。'},
        {imgs:require('../assets/imgs/Shouyemain/20180714120215359387.jpg'),
        name:'李雪',
        congye:'从业年限：4年',
        biye:'辽宁城市建设职业技术学院',
        zuopin:'中海寰宇 金地名京 府城铭邸 御景新世界 碧桂园 中海和平之门 金地檀府 华润奉天九里 格林玫瑰湾等',
        jianjie:'设计源于生活，而又升华于生活。'}]   
    }
  },
  methods: {},
  mounted() {
    $('.fashion-designer-box li').hover(function(e){
     $(this).find('.designer-intro').css({top:'0',opacity:1}).end().find('.designer-info').stop().animate({height:"83px"},100).find('p, span').hide().siblings('a').css('opacity',1)
    
    },function(e){
      $(this).find('.designer-intro').css({top:'100%',opacity:0}).end().find('.designer-info').stop().animate({height:"73px"},100).find('p ,span').show().siblings('a').css('opacity',0)
      
    })

  }
};
</script>

<style lang="less">
.bg-color2 {
  background: url("../assets/imgs/Shouyemain/background.jpg") no-repeat center;
  background-size: 100% 100%;
  float: left;
  margin-top: 20px;
  width: 100%;
}

.area-title-second p {
  padding: 30px 0 6px 0;
  margin-bottom: 6px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: url("../assets/imgs/Shouyemain/area-title-line.png") no-repeat
    center bottom;
}

.area-title-second span {
  display: block;
  text-align: center;
  font-size: 20px;
  color: #c8c8c8;
}

.fashion-designer-box {
  text-align: center;
  padding-bottom: 28px;
}

.fashion-designer-box ul {
  text-align: center;
  height: 354px;

}

.fashion-designer-box li {
  position: relative;
  width: 224px;
  height: 354px;
  display: inline-block;
  vertical-align: bottom;
  margin-left: 4px;
  margin-top: 65px;
}

.designer-show {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.designer-pic {
  position: relative;
  width: 224px;
  height: 313px;
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

.designer-intro-con {
  vertical-align: middle;
display: table-cell;
}
.designer-info{
position: relative;
height: 73px;
padding: 0 10px;
background: #fff;
transition: 0.2s all;
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
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.designer-info p{
padding: 10px 0 5px;
font-size: 22px;
color: #323232;
text-align: center;
}
.designer-info span {
display: block;
font-size: 15px;
color: #323232;
text-align: center;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.designer-info a {
position: absolute;
left: 50%;
top: 50%;
margin: -19px 0 0 -75px;
display: block;
opacity: 0;
width: 150px;
height: 38px;
text-align: center;
line-height: 38px;
border: 1px solid #323232;
color: #323232;
font-size: 21px;
border-radius: 6px;
}
.designer-info a:hover{
  color: #fff;
  background: #f1544d;
  border:none;
}
.more-designer {
    display: block;
    margin: 106px auto 0;
    width: 198px;
    height: 48px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 48px;
    color: #323232;
    font-size: 24px;
}
.more-designer:hover{
  background: url('../assets/imgs/Shouyemain/gradual-bg.jpg');
  color: #fff;
}
</style>