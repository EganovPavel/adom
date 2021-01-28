<template>
    <div class="why">
        <ul>
            <li :style="liBgUrl" v-for="item in why" :key="item.id">
                <span>{{item.header}}</span>
                <p class="text">{{item.text}}</p>
            </li>
        </ul>
        <WhyImg/>
    </div>
</template>
<script>
import WhyImg from './WhyImg'
export default {
    name: "whylist",
    components:{
        WhyImg
    },
    props: ["why"],
    data(){
        return{
            url: require("@/assets/Limarker.png")
        }
    },
    computed:{
        liBgUrl(){
            return{
                listStyle: 'none',
                background: `url(${this.url}) no-repeat 0 0px`,
                paddingLeft: '24px',  
            }
        }
    }
}
</script>
<style scoped>
    .why{
        position: relative;
        margin-top: 80px;
        background: #f1f1f1;
        margin-left: 125px;
        padding-top: 50px;
        padding-left: 70px;
    }
    li{
        margin-bottom: 60px;
    }
    li span{
        display: block;
        width: 370px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.1em;
        color: #000000;
    }
    li p{
        width: 430px;
    }
</style>