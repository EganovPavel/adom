<template>
    <div class="price space">
        <div class="priceheder">
            <hr class="hr">
            <h1 class="headers">Стоимость вашего А-дома</h1>
        </div>
        <PriceItem v-bind:pricelist="priceOfHouse"/>
    </div>
</template>
<script>
import PriceItem from "./PriceItem"
export default {
    name: "price",
    components:{
        PriceItem
    },
    data(){
        return{
            priceOfHouse:[
                {
                    id: 1,
                    name: "Эконом",
                    price: "1 285 000 руб",
                    complectName: "Только коробка",
                    time: "5 недель",
                    complect:["Производство домкомплекта", "Доставка и установка"]
                },
                {
                    id: 2,
                    name: "Базовый",
                    price: "2 100 000 руб",
                    complectName: "Под чистовую отделку",
                    time: "8 недель",
                    complect:["Производство домкомплекта", "Фундамент", "Доставка и монтаж", "Кровельное покрытие", "Окна и входные двери", "Внешняя отделка", "Внутренние инженерные комуникации"]
                },
                {
                    id: 3,
                    name: "Комфорт",
                    price: "0 000 000 руб",
                    complectName: "С внутренней чистовой отделкой",
                    time: "10 недель ",
                    complect:["Производство домкомплекта", "Фундамент", "Доставка и монтаж", "Кровельное покрытие", "Окна и двери", "Внешняя и внутренняя отделка", "Внутренние инженерные коммуникации"]
                }
            ]
        }
    }
}
</script>
<style scoped>
    .price{
        padding-top: 130px;
        background: #F1F1F1;
    }
    .priceheder{
        display: flex;
        margin-bottom: 30px;
    }
    .priceheder > h1{
        margin: 0;
        margin-top: -10px;
    }
</style>