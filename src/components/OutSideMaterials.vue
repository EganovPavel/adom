<template>
    <div class="outSide space">
        <hr class="hr">
        <div id="material">
            <h1 class="headers">Материалы наружной отделки</h1>
            <p class="text">Долговечность вашего дома напрямую связана с качеством фасадной облицовки и ее прочностью. Она защищает дом от осадков, ветров и солнца. С правильно подобранной наружной отделкой дом прослужит вам гораздо дольше</p>
        </div>
        <div class="popups">
            <div v-for="item in tooltips" :key="item.id" :data-tooltip="item.tooltip" class="popup" :id="item.id">+</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "outsidematerials",
    props:["tooltips"]
}
</script>
<style scoped>
    hr{
        position: relative;
    }
    .outSide{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 1100px;
        padding-top: 215px;
        margin-top: 100px;
    }
    #material{
        z-index: 2;
        max-width: 28%;
    }
    #material h1{
        margin: 0;
        margin-top: -10px;
    }
    #material p{
        width: 90%;
        margin: 0;
        margin-top: 25px;
    }
    .popup{
        display: inline-block;
        width: 53px;
        height: 53px;
        background: #fff;
        border-radius: 25px;
        text-align: center;
        vertical-align: middle;
        font-size: 45px;
        cursor: default;
        z-index: 100; 
    }
    .popups{
        position: absolute;
        max-width: 100%;
        min-width: 1600px;
        min-height: 1100px;
        background: url(../assets/Material.png) 100% 100% no-repeat;
        background-size: cover;
        right: 0;
        margin-top: -200px;
    }
    [data-tooltip]{
        position: relative;

    }
    [data-tooltip]::after{
        content: attr(data-tooltip);
        position: absolute;
        width: 300px;
        text-align: left;
        left: 0; top: 0;
        background: #FFF;
        color: #000;
        padding: 0.5em;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        opacity: 0;
        transition: 1s;
        border-radius: 25px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #636363;

    }
    [data-tooltip]:hover::after{
        opacity: 1;
    }
    .popup:hover{
        color: #fff
    }
    #pop1{
        left: 1050px;
        top: 295px;
    }
    #pop2{
        top: 500px;
        left: 695px;
    }
    #pop3{
        left: 1100px;
        top: 700px;
    }
    #pop4{
        left: 920px;
        top: 910px;
    }
</style>