<template>
    <div class="eco">
        <Eco/>
        <EcoList v-bind:list="ecoList"/>
    </div>
</template>
<script>
import EcoList from './Eco-frendly/Eco-list'
import Eco from './Eco-frendly/Eco'
export default {
    name: "eco",
    components:{
        EcoList,
        Eco
    },
    data(){
        return{
            ecoList:[
                {
                    id: 1,
                    header: "Древесина камерной сушки",
                    text: "Древесина – единственный природный строительный материал, который возобновляется самой природой"
                },
                {
                    id: 2,
                    header: "Целлюлозный утеплитель Эковата",
                    text: "Древесная целлюлоза и природные минералы - бораты. В отличие от пенопласта и минеральной ваты не содержит летучих соединений"
                },
                {
                    id: 3,
                    header: "Фибролитовые плиты Гринборд",
                    text: "Портландцемент, древесная шерсть и жидкое стекло (канцелярский клей)"
                },
                {
                    id: 4,
                    header: "Гипсостружечные плиты ГСП",
                    text: "Гипс+древесная стружка"
                },
            ]
        }
    }
}
</script>
<style scoped>
    .eco{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
</style>