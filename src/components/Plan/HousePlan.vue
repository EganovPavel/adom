<template>
    <div class="container planitems">
        <div v-for="item in plan" :key="item.id" class="planitem">
            <span>{{item.id}} Этаж</span>
            <img :src="item.plan" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "plan",
    props:["plan"]
    
}
</script>
<style scoped>
    .planitems{
        display: flex;
        justify-content: space-around;
    }
    .planitem{
        display: flex;
        flex-direction: column;
    }
    .planitem span{
        margin-left: auto;
        margin-bottom: -25px;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
    }
    .planitem:first-child span{
        margin-right: 100px;
    }
</style>