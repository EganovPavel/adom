<template>
    <div class="whyWork space">
        <hr class="hr">
        <div id="why">
            <h1 class="headers">Почему вы получите больше удовольствия от работы с нами?</h1>
            <Why v-bind:why="why"/>
        </div>
    </div>
</template>
<script>
import Why from "./WhyWorkWhithUs/Why"
export default {
    name: "whywork",
    components:{
        Why,
    },
    data(){
        return{
            why:[
                {
                    id: 1,
                    header: "Высокое качество и низкая стоимость",
                    text: "Дом  полностью собирается на производстве, в комфортных условиях, защищенный от осадков. Это позволяет значительно повысить качество работ и снизить стоимость готового изделия"
                },
                {
                    id: 2,
                    header: "Экономия времени",
                    text: "Вы экономите время на выборе проекта, поиске строителей,смене бригад и подборке строительных материалов. Вы не тратите время на контроль процесса стройки на участке, ведь процесс строительства (сборки) длится всего несколько дней"
                },
                {
                    id: 3,
                    header: "Экологичность",
                    text: "Мы бережно относимся к  ресурсам и потреблению на всех стадиях производства и используем безвредное эко-сырье: деревообработка требует гораздо меньшего количества энергии по сравнению с производством кирпича и бетонных блоков"
                }
            ]
        }
    }

}
</script>
<style scoped>
    #why{
        display: flex;
        flex-direction: column;
        margin-bottom: 80px;
    }
    #why h1{
        width: 570px;
        margin-left: 200px;
        margin-top: -20px;
    }
</style>