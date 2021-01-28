<template>
    <div class="container" id="itemblock">
        <div class="getitemblock" v-for="item in items" :key="item.id" >
            <span class="idnumber">{{item.id}}</span>
            <h3 class="getitemheader">
                {{item.header}}
            </h3>
            <p class="getitemtext text">{{item.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "getitem",
    props:["items"]
}
</script>
<style scoped>
    #itemblock{
        position: relative ;
        padding-left: 75px;
        padding-right: 75px;
        height: 585px;
        display: flex;
        justify-self: center;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 125px;
        margin-right: 125px;
        background: #F1F1F1;
    }
    .getitemblock{
        margin-top: -50px;
        display: flex;
        flex-direction: column;
        height: 315px;
        width: 30%;
        background: #E9E9E9;
        padding-top: 32px;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 100px;

    }
    .getitemheader{
        margin: 0;
        margin-top: -25px;
        width: 230px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.1em;
    }
    .idnumber{
        margin-top: -90px;
        margin-left: auto;
        margin-right: -30px;
        position: relative;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: 600;
        font-size: 80px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #CECECE;
    }
</style>