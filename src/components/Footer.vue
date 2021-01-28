<template>
    <footer class="container">
        <div class="contacts">
            <img src="../assets/A-DOM_logo-dark.svg" alt="">
            <span id="tel">+7 (000) 000 00 00</span>
            <span id="mail">qwe@gmail.com</span>
            <span id="adres">Ватутина 65</span>
        </div>
        <hr id="footerhr">
        <div class="contactUs">
            <span id="label">Записаться на просмотр дома</span>
            <form @submit="validation" method="post" action="">
                <div class="group">
                    <span id="err">{{this.error}}</span>
                    <input v-model="tel" id="phone" type="tel" required>
                    <span class="bar"></span>
                    <label for="" id="telephone">Ваш телефон*</label>
                </div>
                <div id="btnblock">
                    <button type="submit">записатся</button>
                    <span>нажимая на кнопку я принимаю политику конфиденциальности</span>
                </div>
            </form>
        </div>
    </footer>
</template>
<script>
const validTel = /^[+\-\d\s()]+$/;
export default {
    name: "footerblock",
    data(){
        return{
            tel: null,
            error: "",
            err: [],
        }
    },
    methods:{
        validation(e){
            this.err = [];
            this.error = "";
            let phone = document.querySelector('#telephone')
            phone.style.color = "#c2c2c2"
            if(!validTel.test(this.tel)){
                e.preventDefault()
                console.log("tel")
                this.err.push(" телефон")
                phone.style.color = "red"
            }
            if(this.err.length > 0){
                this.error = ""
                this.error = "Введите правильный "
                for(let i = 0; i<this.err.length; i++){
                    this.error += this.err[i]+","
                }
                return this.error 
            }               
        },
    }
}
</script>
<style scoped>
    #err{
        position: absolute;
        top: -50px;
        left: 10px;
        color: red;
    }
    form{
        display: flex;
        flex-direction: row;
        align-self: center;
    }

    footer{
        width: auto;
        display: flex;
        flex-direction: column;
        padding-top: 85.5px;
        padding-bottom: 122px;
    }
    #footerhr{
        background-color: #252525;
        width: 100%;
        height: 1px;
        margin-top: 65px;
        margin-bottom: 85px;
    }
    .contacts{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      
    }
    #tel, #mail, #adres{
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 150%;
    }
    #adres{
        margin-right: 110px;
    }
    .contactUs{
        display: flex;
        align-items: flex-end;
    }
    #label{
        font-family: Futura PT;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        margin-right: 70px;
        margin-bottom: -9px;
    }
    .group {
        position: relative;
        margin-top: auto;
    }
    input {
        font-size: 16px;
        padding: 10px;
        display: block;
        width: 260px;
        border: none;
        margin-right: 14px;
        border-bottom: 1px solid #ccc;
    }
    input:focus {
        outline: none;
    }
    label {
        color: #999;
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
        top: -15px;
        font-size: 14px;
    }
    .bar {
        position: relative;
        display: block;
        width: 260px;
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
    #btnblock{
        display: flex;
        flex-direction: column;
        margin-left: auto;
        width: 266px;
        margin-bottom: -49px;
    }
    #btnblock span{
        color: #C2C2C2;
        font-family: Raleway;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 130%;
        padding-top: 10px;
    }
    .contactUs button{
        border: 1px solid transparent;
        width: 266px;
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
    .contactUs button:hover{
        border: 1px solid #FE9801;
        background-color: #FFF;
        color: black;
        transition: 0.5s;
    }
</style>