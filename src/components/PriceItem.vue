<template>
    <div class="container pricelist">
        <div class="priceblock" v-for="item in pricelist" :key="item.id">
            <div class="head">
                <h4>{{item.name}}</h4>
                <p>{{item.price}}</p>
                <button @click="show()">Комерческое предложение</button>
            </div>
            <div class="complect">
                <p>{{item.complectName}}</p>
            </div>
            <div class="time">
                <p class="text">{{item.time}}</p>
            </div>
            <div class="complectation">
                <p class="text" v-for="i in item.complect" :key="i">- {{i}}</p>
            </div>
        </div>
        <Modal
        v-show="modalShow" 
        v-bind:modal="modalShow"
        v-on:close="remowe()"
        />
    </div>
</template>
<script>
import Modal from './Modal'
export default {
    name: "priceitem",
    props:["pricelist"],
    components:{
        Modal
    },
    data(){
        return{
            modalShow: false,
        }
    },
    methods:{
        show: function(){
            let body = document.querySelector('body');
            body.style.overflow = 'hidden'
            return this.modalShow = true
        },
        remowe: function (){
            let body = document.querySelector('body');
            body.style.overflow = 'visible'
            return this.modalShow = false
        },
    },
}
</script>
<style scoped>
    .pricelist{
        background: #F1F1F1;
    }
    .priceblock{
        display: flex;
        padding-top: 41px;
        padding-bottom: 41px;
    }
    .priceblock:nth-child(2){
        position: relative;
        margin: 0 -12.8vw;
        padding: 0 13vw;
        padding-top: 41px;
        padding-bottom: 41px;
        background-color: #FFF;
    }
    .priceblock:nth-child(2) button{
        background: #FFF;
    }
    .head{
        display: flex;
        flex-direction: column;
    }
    .head > h4{
        margin: 0;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.1em;
    } 
    .head > p{
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;

        color: #FE9801;
    }
    .head > button{
        width: 274px;
        height: 41px;
        border: 1px solid #FE9801;
        box-sizing: border-box;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: 0.5s;
        margin-top: auto;
    }
    .head > button:hover{
        background: #FE9801;
        border: 1px solid transparent;
        color: #FFF;
        transition: 0.5s;
    }
    .complect{
        margin-left: auto;
        width: 127px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }
    .complectation{
        width: 332px;
    }
    .time{
        max-width: 80px;
        margin-left: 20px;
        margin-right: 10px;
    }
</style>