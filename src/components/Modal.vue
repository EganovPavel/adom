<template>
    <div>
        <div v-on:click="$emit('close', modal)" class="bg"></div>
        <div class="doOrder">
            <div id="closeModal" v-on:click="$emit('close', modal)">+</div>
            <div>
                <h1 class="headers">Сделать заказ</h1>
                <p class="text">заполните форму и мы свяжемся с вами</p>
                <form @submit="validation" method="post">
                    <div class="group"> 
                        <input v-model="name" id="name" type="tel" required>
                        <span class="bar"></span>
                        <label id="userName" for="">Ваше Имя*</label>
                    </div>
                    <div class="group"> 
                        <input v-model="tel" id="phonenum" type="tel" required>
                        <span class="bar"></span>
                        <label id="tel" for="">Ваш телефон*</label>
                    </div>
                    <div class="group"> 
                        <input v-model="email" id="email" type="tel" required>
                        <span class="bar"></span>
                        <label id="mail" for="">Ваша почта*</label>
                    </div>
                    <span id="error" class="text">{{this.error}}</span>
                    <input id="button" type="submit" value="Заказать">
                </form>
            </div>
        </div>
    </div> 
</template>
<script>
"use strict"
const validName = /[A-Za-zА-Яа-я]/;
const validTel = /^[+\-\d\s()]+$/;
const validEmail = /\S+@\S+\.\S+/;
export default {
    name:'modal',
    props:['modal'],
    data(){
        return{
            name: null,
            tel: null,
            email: null,
            error: "",
        }
    },
    methods:{
        validation(e){
            this.error = "";
            let email = document.querySelector('#mail')
            let name = document.querySelector('#userName')
            let tel = document.querySelector('#tel')
            email.style.color = "#c2c2c2"
            name.style.color = "#c2c2c2"
            tel.style.color = "#c2c2c2"
            if(!validEmail.test(this.email)){
                e.preventDefault()
                console.log("email")
                email.style.color = "red"
                this.error = "Заполните форму корректно"
            }
            if(!validName.test(this.name)){
                e.preventDefault()
                console.log("name")
                
                name.style.color = "red"
                this.error = "Заполните форму корректно"
            }
            if(!validTel.test(this.tel)){
                e.preventDefault()
                console.log("tel")
                tel.style.color = "red"
                this.error = "Заполните форму корректно"
            }            
        },
    }


}
</script>
<style scoped>
    #error{
        color: red;

    }
    #closeModal{
        width: max-content;
        transform: rotate(45deg);
        color: #000;
        font-size: 50px;
        margin-left: auto;
        margin-right: 3%;
        margin-bottom: -10.2%;
        cursor: pointer;
    }
    .doOrder{
        display: flex;
        flex-direction: column;
        width: 50%;
        z-index: 10000;
        position: fixed;
        background-color: #f1f1f1;
        right: 23%;
        top: 20%;
        border: 2px solid rgb(134, 134, 134);
        border-radius: 50px;
        padding: 20px;
        box-shadow: 0px 0px 1px -1px #f1f1f1;
        transition: 1s;
        z-index: 9999;
        opacity: 1 !important;
    }
    .doOrder>div:last-child{
        align-self: center;
        justify-self: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 4%;
    }
    .doOrder>div>h1{
        text-align: center;
        align-self: center;
    }
    .doOrder>div>p{
        text-align: center;
    }
    .bg{
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: grey;
        opacity: 0.8;
    }
    .show{
        transition: 1s;
    }
    .doOrder form{
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 100%;
    }
    .doOrder form #button{
        border: 1px solid transparent;
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
    .doOrder form #button:hover{
        border: 1px solid #FE9801;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }
    .group {
        position: relative;
        margin-bottom: 35px;
    }
    input {
        background: #f1f1f1;
        font-size: 16px;
        padding: 10px;
        display: block;
        width: 100%;
        border: none;
        margin-right: 14px;
        border-bottom: 1px solid #ccc;
    }
    input:focus {
        outline: none;
    }
    label {
        color: #c2c2c2;
        font-size: 18px;
        position: absolute;
        pointer-events: none;
        left: 10px;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    input:focus ~ label, input:valid ~ label {
        top: -25px;
        font-size: 18px;
    }
    .bar {
        position: relative;
        display: block;
        width: 100%;
    }
    .bar:before, .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: #FE9801;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    .bar:before {
        left: 50%;
    }
    .bar:after {
        right: 50%;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
        width: 50%;
    }
</style>