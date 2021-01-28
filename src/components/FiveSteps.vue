<template>
    <div class="steps space">
        <div class="stepsheader">
            <hr class="hr">
            <h1 class="headers">5 простых шагов</h1>
        </div>
        <div class="container stepslist">
            <div v-for="item in steps" :key="item.id">
                <p class="text">{{item.text}}</p>
                <img class="stepsmarker" :src="item.marker" alt="">
            </div>
        </div>
        <hr id="stepshr">
        <Player />
    </div>
</template>
<script>
import Player from "./Player"
export default {
    name: "fivesteps",
    props: ["steps"],
    components:{
        Player
    },

}
</script>
<style scoped>
    .steps{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
    .stepsheader{
        display: flex;
    }
    .stepsheader h1{
        margin: 0;
        margin-top: -10px;
    }
    .stepslist{
        display: flex;
        margin-bottom: 28px;
    }
    .stepsmarker{
        position: relative;
        margin-top: 38px;
        margin-bottom: -53px;
    }
    #stepshr{
        margin-left: 13%;
        margin-right: 13%;
        height: 0px;
        margin-bottom: 100px;
        background: #FE9801;
        color: #FE9801;
        border-top: 3px solid #FE9801;
    }
</style>