<!-- 首页 -->
<template>
  <div class="Navinput">
    <!-- 页面头部 -->
    <header>
      <div class="box" id="Navinput_herader_box">
        <!-- 页面头部左边 -->
        <div id="Navinput_herader_box_left">
          北京市
        </div>
        <!-- 页面头部右边 -->
        <div id="Navinput_herader_box_right">
          <div id="Navinput_herader_box_right_leftBox" @click="navBoxClick($event)">
            <span id="Navinput_herader_Rendering">设计师</span>
            <ul id="Navinput_herader_box_right_dropdownBox">
              <li class="Navinput_herader_box_right_dropdown" val=" 关键词推荐：李欣雨 、 吕娜 、 孙贺" @click="navDropdownClick($event)">设计师</li>
              <li class="Navinput_herader_box_right_dropdown" val=" 关键词推荐：奉天九里 、 中海和平之门 、 浦江苑
              " @click="navDropdownClick($event)">案例</li>
              <li class="Navinput_herader_box_right_dropdown" val=" 关键词推荐：怎么装修省钱 、 如何选地毯
              " @click="navDropdownClick($event)">装修攻略
              </li>
            </ul>

            <!-- 首页头部关键词 -->
            <span id="Navinput_herader_gjc"></span>
          </div>

          <div id="Navinput_herader_box_right_inputBox">
            <form action="">
              <input type="text" placeholder="在此输入关键词">
              <input type="submit" value="">
            </form>


          </div>

        </div>
      </div>
    </header>


  </div>
</template>

<script>

  export default {
    name: "Navinput",

    data() {
      return {

      };
    },

    methods: {
      navBoxClick(e) {
        $('#Navinput_herader_box_right_dropdownBox').css({
          display: 'block'
        })
        $('#Navinput_herader_Rendering').text('');
        $('.Navinput_herader_box_right_dropdown:nth-child(2)').css({
          borderTop: "1px solid #c8c8c8",
        })
      },

      navDropdownClick(e) {
        console.log($(e.target).attr("val"))
        $('#Navinput_herader_gjc').text($(e.target).attr("val"))

      }



    },
    beforeMount() {

      $('body').on('click', '.Navinput_herader_box_right_dropdown', (e) => {
        // console.log($(e.target).text())
        $('#Navinput_herader_box_right_dropdownBox').css({
          display: 'none'
        })
        $('#Navinput_herader_Rendering').text($(e.target).text());
      })



    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  /*公用样式*/
  @font-family: "微软雅黑";
  @font_size: 12px;

  #Navbar_box{
    background:white;
    float: left;
  }

  #Navinput_herader_box {
    height: 35px;
    display: flex;
    justify-content: space-between;
  }

  /* 页面头部左边 */
  #Navinput_herader_box_left {
    float: left;
    line-height: 35px;
    background: url("../assets/imgs/Navinput/dingwei.png") no-repeat left center;
    background-size: 18px 20px;
    padding-left: 30px;
    font-size: @font_size;
    font-family: @font-family;
  }

  /* 页面头部右边 */
  #Navinput_herader_box_right {
    display: flex;
  }

  #Navinput_herader_box_right * {
    font-size: @font_size;
  }

  #Navinput_herader_box_right_leftBox {
    height: 23px;
    width: 78px;
    margin-top: 5px;
    margin-left: 22px;
    text-align: center;
    line-height: 23px;
    border: 1px solid #c8c8c8;
    cursor: default;
    background: url("../assets/imgs/Navinput/project-sj.png") no-repeat 66px 7px;
    position: relative;
  }

  #Navinput_herader_box_right_dropdownBox {
    width: 80px;
    text-align: center;
    position: absolute;
    top: 0px;
    line-height: 23px;
    display: none;
    cursor: pointer;

    z-index: 10;

    li:nth-child(2) {
      border-bottom: 1px solid #c8c8c8;
    }

    li:nth-child(2),
    li:last-child {
      background: white;
    }

  }

  #Navinput_herader_box_right_inputBox {
    margin-top: 5px;
    position: relative;

    input:first-child {
      width: 158px;
      height: 23px;
      padding-left: 5px;
      border: 1px solid #c8c8c8;

    }

    input:last-child {
      width: 28px;
      height: 23px;
      background: url("../assets/imgs/Navinput/search.png") no-repeat center center;
      position: absolute;
      right: 0;
      border: none;
    }
  }

  #Navinput_herader_gjc {
    width: 300px;
    height: 26px;
    text-align: center;
    position: absolute;
    right: -167px;
    bottom: -28px;

  }
</style>