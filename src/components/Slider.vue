<template>
    <div class="slider space">
        <hooper :settings="hooperSettings" class="slider_wrapper">
            <slide v-for="item in slides" :key="item.id" class="slider_item">
                <div class="sliderimg">
                    <img :src="item.url" alt="">
                </div>
                <div class="slidercontent">
                    <h3 class="headers">{{item.header}}</h3>
                    <p class="text">{{item.text}}</p>
                    <img :src="item.inst" alt="">
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css'
export default {
    
    name: "slider",
    components:{
        Hooper,
        Slide,
        HooperNavigation
    },
    data(){
        return{
            hooperSettings:{
                wheelControl: false,
            },
            slides:[
                {
                    id:1,
                    url: require("../assets/SliderImg.png"),
                    header: "Иванова Ирина",
                    text: "Мы увидели эти дома на пинтерес и все! Мы понимали, что будут определенные трудности в расстановке мебели и планировании пространства, но большие окна, второй свет и огромная терраса похитили наше сердце. И мы решились строить его — дом нашей мечты необычной для нашего региона Aframe.  Но из-за конструктивных особенностей дома, мы столкнулись с непониманием в нескольких компаниях. А потом нашлись они - @dominno_ekb, как рыцари на коне. Дмитрий не только знал как построить дом, но и дал кучу советов по экономии в доме в процессе жизни и рекомендаций по планированию пространства.",
                    inst: require("../assets/SliderInstagram.svg")
                },
                {
                    id:2,
                    url: require("../assets/SliderImg.png"),
                    header: "Ирина",
                    text: "Мы увидели эти дома на пинтерес и все! Мы понимали, что будут определенные трудности в расстановке мебели и планировании пространства, но большие окна, второй свет и огромная терраса похитили наше сердце. И мы решились строить его — дом нашей мечты необычной для нашего региона Aframe.  Но из-за конструктивных особенностей дома, мы столкнулись с непониманием в нескольких компаниях. А потом нашлись они - @dominno_ekb, как рыцари на коне. Дмитрий не только знал как построить дом, но и дал кучу советов по экономии в доме в процессе жизни и рекомендаций по планированию пространства.",
                    inst: require("../assets/SliderInstagram.svg")
                },
                {
                    id:3,
                    url: require("../assets/SliderImg.png"),
                    header: "Иванова",
                    text: "Мы увидели эти дома на пинтерес и все! Мы понимали, что будут определенные трудности в расстановке мебели и планировании пространства, но большие окна, второй свет и огромная терраса похитили наше сердце. И мы решились строить его — дом нашей мечты необычной для нашего региона Aframe.  Но из-за конструктивных особенностей дома, мы столкнулись с непониманием в нескольких компаниях. А потом нашлись они - @dominno_ekb, как рыцари на коне. Дмитрий не только знал как построить дом, но и дал кучу советов по экономии в доме в процессе жизни и рекомендаций по планированию пространства.",
                    inst: require("../assets/SliderInstagram.svg")
                },
                {
                    id:4,
                    url: require("../assets/SliderImg.png"),
                    header: "Иванова Ирина",
                    text: "Мы увидели эти дома на пинтерес и все! Мы понимали, что будут определенные трудности в расстановке мебели и планировании пространства, но большие окна, второй свет и огромная терраса похитили наше сердце. И мы решились строить его — дом нашей мечты необычной для нашего региона Aframe.  Но из-за конструктивных особенностей дома, мы столкнулись с непониманием в нескольких компаниях. А потом нашлись они - @dominno_ekb, как рыцари на коне. Дмитрий не только знал как построить дом, но и дал кучу советов по экономии в доме в процессе жизни и рекомендаций по планированию пространства.",
                    inst: require("../assets/SliderInstagram.svg")
                }
            ],
        }
    },
    
}
</script>
<style>
    .slider{
        overflow:hidden;
        background: #f1f1f1;
    }
    .hooper{
        height: auto;
    }
    .hooper-track{
        display: inline-flex;
        padding-top: 125px;
        padding-bottom: 125px;
    }
    .hooper-slide{
        display: flex;
        flex-direction: row;
        padding-left: 250px;
        padding-right: 250px;

    }
    .slidercontent{
        width: 550px;
        display: flex;
        flex-direction: column;
    }
    .sliderimg{
        margin-right: 10%;
    }
    .slidercontent h3{
        margin-top: -8px;
    }
    .slidercontent img{
        align-self: start;
        margin-top: auto;
    }
    .hooper-prev{
        margin-left: 90px;
    } .hooper-next{
        margin-right: 90px;
    }
    .hooper-prev svg, .hooper-next svg{
        display: none;
    }
    .hooper-prev::after{
        content: url('../assets/SlideLeft.svg');
    }
    .hooper-next::after{
        content: url('../assets/SlideRight.svg');
    }
</style>
