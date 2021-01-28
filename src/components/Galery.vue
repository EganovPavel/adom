<template>
    <div class="galeryblock space">
        <hr class="hr">
        <div class="galeryheader">
            <h1 class="headers">Где посмотреть?</h1>
            <p class="text">Мы построили выставочный дом, чтобы развеять все ваши страхи и сомнения. Дом расположен в коттеджном посёлке  "Заповедник". Приезжайте и убедитесь в качестве своими глазами</p>
        </div>
        <div class="galery">
            <div class="galeryitem">
                <img  v-for="item in images" :key="item.id" :src="item.url" alt="" class="galaryimg">
            </div>
            <div  class="galeryitem">
                <img v-for="item in images1" :key="item.id" :src="item.url" alt="" class="galaryimg">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "galery",
    data(){
        return{
            showModal: false,
            images:[
                    {
                        id:1,
                        url: require("../assets/GaleryIMGId2.png")
                    },
                    {
                        id:2,
                        url: require("../assets/GaleryIMGId4.png")
                    },
            ],
            images1:[
                    {
                        id:3,
                        url: require("../assets/GaleryIMGId1.png")

                    },
                    {
                        id:4,
                        url: require("../assets/GaleryIMGId3.png")
                    }
                ]
        }
    },
}
</script>
<style scoped>
    .galeryblock{
        display: flex;
        flex-direction: column;
    }
    .galeryheader{
        z-index: 2;
        margin-left: 200px;
        margin-top: -20px;
        margin-bottom: 50px;
    }
    .galeryheader>h1{
        margin: 0;
    } 
    .galeryheader>p{
        max-width: 35%;
        width: auto;
    }
    .galery{
        display: flex;
        flex-direction: row;
    }
    .galeryitem{
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .galeryitem > img{
        width: 100%;
        flex-shrink: 0;
    }
    .galeryitem:first-child > .galaryimg:first-child{
        max-height: 725px;
        margin-top: 160px;
        margin-bottom: 100px;
        max-width: 700px;
    }
    .galeryitem:first-child > .galaryimg:last-child{
        max-width: 620px;
        max-height: 530px;
        margin-left: auto;
    }
    .galeryitem:last-child{
        margin-left: auto;
        margin-top: -200px
    }
    .galeryitem:last-child > .galaryimg:first-child{
        max-height: 725px;
        max-width: 800px;
        margin-bottom: 100px;
    }
    .galeryitem:last-child > .galaryimg:last-child{
        max-height: 725px;
        max-width: 700px;
    }
</style>