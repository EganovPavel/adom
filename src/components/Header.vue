<template>
    <header class="space container">
        <div id="head">
            <img id="logo" :src="logo" alt="">
            <span id="phone">+7 (000) 000 00 00</span>
        </div>
        <div id="sell">
            <h1>Дом, чтобы жить, а не строить</h1>
            <p>Готовое решение для жизни за городом от 1 250 000 руб</p>
            <button @click="show()">заказать дом</button>
            <Modal
            v-show="modalShow" 
            v-bind:modal="modalShow"
            v-on:close="remowe()"
            />
        </div>
    </header>
</template>
<script>
import Modal from './Modal'
export default {
    name: "headerblock",
    components:{
        Modal
    },
    data(){
        return{
            modalShow: false,
            logo: require('../assets/A-DOM_logo.svg')
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
    header{
        position: relative;
        width: 100%;
        background-image: url(../assets/HeaderBG.png);
        background-size: cover;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    #head{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-self: start;
        justify-content: space-between;
    }
    #logo{
        margin-top: 80px;
    }
    #phone{
        color: #ffffff;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: 0.02em;
        margin-top: 98px;
    }
    #sell{
        color: #ffffff;
        margin-top: auto;
        margin-bottom: 143px;
    }
    #sell > h1{
        font-family: Futura PT;
        font-style: normal;
        font-weight: normal;
        font-size: 55px;
        line-height: 100%;
        margin-bottom: 0px;
    }
    #sell > p{
        margin-top: 0px;
        margin-bottom: 37px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }
    #sell > button{
        border: 1px solid transparent;
        width: 440px;
        height: 64px;
        background-color: #FE9801;
        color: #FFF;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s;
    }
    #sell > button:hover{
        border: 1px solid #FE9801;
        background-color: transparent;
        transition: 0.5s;
    }
</style>