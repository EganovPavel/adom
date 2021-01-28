<template>
    <div class="space planblock">
        <div class="downloadplan">
            <hr class="hr">
            <div class="download">
                <h1  class="headers">Планировка вашего дома</h1>
                <button>
                    <a :href="`${publicPath}PlanOfHouse.rar`" download="">Скачать планировку</a>
                </button>
            </div>
            <div id="abaut">
                <p class="text"> Вы можете выбрать готовое планировочное решение или придумать свою собственную планировку. Каждый вариант имеет свои плюсы и минусы:</p>
                <p class="text"><strong>- Готовая планировка.</strong> Вы экономите свое время и ничем не рискуете. Приобретаете дом, в котором эргономично продуман каждый метр. Скорее всего, данная планировка не разочарует вас через 10 лет.</p>
                <p class="text"><strong>- Собственная планировка.</strong> Вы сможете реализовать все свои смелые идеи насчет вида помещения и получите дом, о котором мечтали. Этот дом будет существовать в единственном экземпляре</p>
            </div>
        </div>
        <HousePlan v-bind:plan="planOfFlor"/>
    </div>
</template>
<script>
import HousePlan from "./Plan/HousePlan"
export default {
    name: "plan",
    components:{
        HousePlan,
    },
    data(){
        return{
            publicPath: process.env.BASE_URL,
            planOfFlor:[
                {
                    id: 1,
                    plan: require('../assets/Plan1flor.png'),
                },
                {
                    id: 2,
                    plan: require('../assets/Plan2flor.png'),
                }
            ]

        }
    }
}
</script>
<style scoped>
    .download  a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #fff;
        width: 366px;
        height: 64px;
        margin-left: -8px;
        transition: 0.5s;
    }
    .download a:hover{
        color: black;
        transition: 0.5s;
    }
    .planblock{
        width: 100%;
    }
    .downloadplan{
        display: flex;
        flex-direction: row;
        margin-bottom: 88px;
    }
    .download{
        display: flex;
        flex-direction: column;
        margin-top: 0px;
    }
    .download button{
        border: 1px solid transparent;
        width: 366px;
        height: 64px;
        background-color: #FE9801;
        color: #FFF;
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: auto;
        transition: 0.5s;
    }
    .download button:hover{
        border: 1px solid #FE9801;
        background-color: #FFF;
        color: black;
        transition: 0.5s;
    }
    .download h1{
        width: 455px;
        margin: 0px;
        margin-top: -10px;
    }
    #abaut{
        margin-top: -19px;
        width: 570px;
        margin-left: auto;
        margin-right: 200px;
    }
    #abaut strong{
        font-weight: bold;
        color: #3d3d3d;
    }
</style>