<template>
    <div class="contactUs space">
        <div class="contactheader">
            <hr class="hr">
            <h1 class="headers">Записаться на просмотр дома</h1>
        </div>
        <form @submit="validation" class="container" action="">    
            <div class="group">
                <span id="err">{{this.error}}</span>
                <input v-model="tel" type="tel" required>
                <span class="bar"></span>
                <label for="">Ваш телефон*</label>
            </div>
            <div class="group">
                <input v-model="name" type="text" required>
                <span class="bar"></span>
                <label for="">Как к вам обращаться?</label>
            </div>
            <div class="btn">
                <button>записаться</button>
                <p>нажимая на кнопку я принимаю политику конфиденциальности</p>
            </div>
        </form>
    </div>
</template>
<script>
const validName = /[A-Za-zА-Яа-я]/;
const validTel = /^[+\-\d\s()]+$/;
export default {
    name: "contactus",
    data(){
        return{
            name: null,
            tel: null,
            error: "",
            err: [],
        }
    },
    methods:{
        validation(e){
            this.err = [];
            this.error = "";
            if(!validTel.test(this.tel)){
                e.preventDefault()
                console.log("tel")
                this.err.push(" телефон")
            }
            if(!validName.test(this.name)){
                e.preventDefault()
                console.log("name")
                this.err.push(" имя")
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
    .contactUs{
        display: flex;
        flex-direction: column;
    }
    .contactheader{
        display: flex;
    }
    .contactheader h1{
        margin-top: -10px;
    }
    .contactUs form{
        display: flex;
        align-items: flex-end; 
        margin-top: 80px;
    }

    form .btn{
        position: relative;
        margin-left: auto;
        width: 100%;  
    }
    form .btn p{
        position: absolute;
        margin-top: 15px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #C2C2C2;
    }


    .group {
        position: relative;
        width: 100%;
    }
    input {
        font-size: 16px;
        padding: 10px;
        display: block;
        width: 90%;
        border: none;
        margin-right: 14px;
        border-bottom: 1px solid #6a6a6a;
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
        max-width: 90%;
        z-index: 10;
    }
    .bar:before, .bar:after {
        content: "";
        height: 1px;
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


    .contactUs form button{
        border: 1px solid transparent;
        width: 100%;
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
    .contactUs form button:hover{
        border: 1px solid #FE9801;
        background-color: #FFF;
        color: black;
        transition: 0.5s;
    }
</style>