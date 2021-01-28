<template>
    <vue-preview class="inst" :slides="inst"></vue-preview>
</template>
<script>
export default {
    data(){
        return{
            inst:[
                {
                    src: require(`../assets/InstaIMG0.png`),
                    msrc:require(`../assets/InstaIMG0.png`),
                    w: 600,
                    h: 600
                },
                {
                    src: require(`../assets/InstaIMG1.png`),
                    msrc:require(`../assets/InstaIMG1.png`),
                    w: 600,
                    h:600
                },
                {
                    src: require(`../assets/InstaIMG2.png`),
                    msrc: require(`../assets/InstaIMG2.png`),
                    w: 600,
                    h:600
                },
                {
                    src: require(`../assets/InstaIMG3.png`),
                    msrc:require(`../assets/InstaIMG3.png`),
                    w: 600,
                    h:600
                },
                {
                    src: require(`../assets/InstaIMG4.png`),
                    msrc: require(`../assets/InstaIMG4.png`),
                    w: 600,
                    h:600
                },
                {
                    src: require(`../assets/InstaIMG5.png`),
                    msrc: require(`../assets/InstaIMG5.png`),
                    w: 600,
                    h:600
                },
            ],
        }
    },
}
</script>
<style>
    .inst div:first-child{
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap !important;
        justify-content: space-around;
    }
    .inst div:first-child figure{
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-bottom: 30px;
    }
</style>