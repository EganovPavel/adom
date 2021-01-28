<template>
    <div class="interior space">
        <div class="interiorblock">
            <hr class="hr">
            <div>
                <h1 class="headers">Интерьерное решение для A-дома</h1>
                <p class="text">* всю мебель и аксессуары, изображенные на рендерах, можно приобрести в IKEA (люстры, стулья, диван, комплектующие детали и т.д.)</p>
            </div>
        </div>
        <div id="interiorBG"><img :src="this.interiorBG" alt=""></div>
    </div>
</template>
<script>
export default {
    name: "interior",
    data(){
        return{
            interiorBG: require('../assets/interiorBG.png')
        }
    },

}
</script>
<style scoped>
    #interiorBG{
        width: 100%;
    }
    #interiorBG img{
        width: 100%;
    }
    .interior{
        width: 100%;
    }
    .interior div h1{
        margin-top: -10px;
    }
    .interior div p{
        width: 450px;
    }
    .interiorblock{
        display: flex;
        flex-direction: row;
        margin-bottom: 70px;
    }
</style>
