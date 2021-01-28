<template>
    <div class="space" id="panoram">
        <hr class="hr">
        <div class="container" id="panoramtext">
            <h1 class="headers" id="panoramtextheder">Панорамный вид на жизнь</h1>
            <div id="panoramtexts">
                <p class="text">Что вы хотите видеть за окном, просыпаясь в своем идеальном доме? Сад с гортензиями? Живые дикие ели? Может быть, за окном вашего дома должна течь река? С A-dom вы сами выбираете фон за окном. Хотите наблюдать за снегопадом, укутавшись в плед? Или любите, когда в комнату проникает много солнца?</p>
                <p class="text">Панорамное окно превратит обычный дом в ваше любимое место. Туда, куда хочется возвращаться</p>
            </div>
        </div>
        <img  class="container" :src="panoram" alt="">
    </div>
</template>
<script>
export default {
    name:"panoram",
    data(){
        return{
            panoram: require('../assets/Panoram.png')
        }
    },
}
</script>
<style scoped>
    #panoramtext{
        display: flex;
        flex-direction: row;
        align-content: center;
        margin-top: -10px;
    }
    #panoramtexts{
        width: 520px;
        margin-top: -25px;
        
    }
    #panoramtextheder{
        width: 608px;
        margin-top: -10px;
    }
    #panoram img{
        margin-top: 95px;
    }
    #panoram{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>