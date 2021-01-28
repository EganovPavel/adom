<template>
  <div id="app">
    <Header />
    <Panoram/>
    <PlanOfYourHouse/>
    <Interior/>
    <WhyWorkWhithUs/>
    <EcoMaterials/>
    <OutSideMaterials v-bind:tooltips="tooltips"/>
    <WhatYouGet/>
    <FiveSteps v-bind:steps="steps"/>
    <Price/>
    <Galery/>
    <ContactUs/>
    <AbautUs/>
    <Slider/>
    <Instagram/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1315.6298709326152!2d37.58313669667578!3d48.73873491754265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df9704ec4bda55%3A0x7ae95b88e0ec288a!2z0L_Quy4g0JzQuNGA0LAsINCa0YDQsNC80LDRgtC-0YDRgdC6LCDQlNC-0L3QtdGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4NDMwMA!5e0!3m2!1sru!2sua!4v1608051624439!5m2!1sru!2sua" width="100%" height="600px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <Footer/>
    <div @click="toTop" class="toTop"><img src="./assets/double-up-arrow.png" alt=""></div>
  </div>
</template>
<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import Panoram from "./components/Panoram"
import PlanOfYourHouse from "./components/PlanOfYourHouse"
import Interior from "./components/Interior"
import WhyWorkWhithUs from "./components/WhyWorkWhithUs"
import EcoMaterials from "./components/EcoMaterials"
import OutSideMaterials from "./components/OutSideMaterials"
import WhatYouGet from "./components/WhatYouGet"
import FiveSteps from "./components/FiveSteps"
import Price from "./components/Price"
import Galery from "./components/Galery"
import ContactUs from "./components/ContactUs"
import AbautUs from "./components/AbautUs"
import Slider from "./components/Slider"
import Instagram from './components/Instagram'
export default {
  components:{
    Header,
    Footer,
    Panoram,
    PlanOfYourHouse,
    Interior,
    WhyWorkWhithUs,
    EcoMaterials,
    OutSideMaterials,
    WhatYouGet,
    FiveSteps,
    Price,
    Galery,
    ContactUs,
    AbautUs,
    Slider,
    Instagram
  },
  data(){
      return{
          tooltips:[
                {
                    id: "pop1",
                    tooltip: "Долговечность вашего дома напрямую связана с качеством фасадной облицовки и ее прочностью. Она защищает дом от осадков, ветров и солнца. С правильно подобранной наружной отделкой дом прослужит вам гораздо дольше"
                },
                {
                    id: "pop2",
                    tooltip: "Долговечность вашего дома напрямую связана с качеством фасадной облицовки и ее прочностью. Она защищает дом от осадков, ветров и солнца. С правильно подобранной наружной отделкой дом прослужит вам гораздо дольше"
                },
                {
                    id: "pop3",
                    tooltip: "Долговечность вашего дома напрямую связана с качеством фасадной облицовки и ее прочностью. Она защищает дом от осадков, ветров и солнца. С правильно подобранной наружной отделкой дом прослужит вам гораздо дольше"
                },
                {
                    id: "pop4",
                    tooltip: "Долговечность вашего дома напрямую связана с качеством фасадной облицовки и ее прочностью. Она защищает дом от осадков, ветров и солнца. С правильно подобранной наружной отделкой дом прослужит вам гораздо дольше"
                }
          ],
          steps:[
              {
                id: 1,
                text: "Выбор комплектации дома и расположения на участке",
                marker: require("@/assets/Limarker.png")
              },
              {
                id: 2,
                text: "Согласование проекта и заключение договора",
                marker: require("@/assets/Limarker.png")
              },
              {
                id: 3,
                text: "Производство в цехе 4 недели",
                marker: require("@/assets/Limarker.png")
              },
              {
                id: 4,
                text: "Монтаж домокомплекта и кровли в течение одной недели",
                marker: require("@/assets/Limarker.png")
              },
              {
                id: 5,
                text: "Вы получаете ключи от нового дома",
                marker: require("@/assets/Limarker.png")
              }
          ],
      }
  },
  methods:{
    trackScroll: function(){
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
      let goTopBtn = document.querySelector('.toTop')
      if(scrolled > coords){
        goTopBtn.classList.add('toTopShow')
      }
      if(scrolled<coords){
        goTopBtn.classList.remove('toTopShow')
      }
    },
    toTop: function(){
      if(window.pageYOffset > 0){
        window.scrollBy(0, -70);
        setTimeout(this.toTop, 0)
      }
    }

  },
  mounted(){
      window.addEventListener('scroll', this.trackScroll)
  }

  
	
	
}
</script>

<style>
    .toTop{
      position: fixed;
      width: 5em;
      height: 5em;
      border-radius: 50%;
      background: #e4e4e4;
      right: 40px;
      bottom: 40px;
      display: flex;
      cursor: pointer;
      z-index: -2000;
      align-items: center;
      justify-content: center;
      transition: .5s;
      opacity: 0;
    }
    .toTopShow{
      opacity: 1;
      z-index: 99999;
    }
    .toTop:hover{
      transition: .5s;
      box-shadow: 0 0 5px 2px #d3d3d3;
    }
    .toTop img{
      height: 46px;
    }
    *{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .container{
      padding: 0 13% 0 13%;
    }
    .space{
      margin-bottom: 200px;
    }
    #app{
        width: auto;
        display: flex;
        flex-direction: column;
    }
    .hr{
        margin-top: 0px;
        margin-left: 0px;
        width: 125px;
        height: 2px;
        border: none;
        background-color: #FE9801;
        margin-right: 76px;
    }
    .headers{
        font-family: Futura PT;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #000000;
        max-width: 70vw;
    }
	.text{
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #636363;
	}
</style>
