<template>
    <div class="space" id="instagram">
        <hr class="hr">
        <div class="instaheader">
            <div id="insta">
                <h1 class="headers">Мы в инстаграм</h1>
                <a class="headers" href="#">Подписаться</a>
            </div>
            <div>
                <p class="text">Предоставляем скидку 10 000 рублей нашим подписчикам в Instagram при заказе А-дома.</p>
                <p class="text">Чтоб получить скидку просто подпишись на нас в инстаграме </p>
            </div>
        </div>
        <Insta class="insta container"/>
    </div>
</template>
<script>
import Insta from './Insta'
export default {
    name: "instagram",
    components:{
        Insta,
    },
   
}
</script>
<style scoped>
    .instaheader{
        margin-left: 200px;
        margin-bottom: 60px;
    }
    .instaheader h1{
        margin-top: -20px;
    }
    .instaheader p{
        width: 480px;
    }
    #insta{
        display: flex;
        flex-direction: row;
    }
    #insta > a{
        width: 225px;
        position: relative;
        margin-left: auto;
        text-decoration: none;
        margin-right: 575px;
        margin-top: -20px;
        margin-bottom: 20px;
    }
    #insta > a::after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 80%;
        left: 0;
        height: 2px;
        background-color: #fe9801;
        transition: 0.5s;
    }
    #insta > a:hover::after{
        width: 100%;
        transition: 0.5s;
    }
</style>