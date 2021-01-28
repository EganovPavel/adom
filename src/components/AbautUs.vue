<template>
    <div class="abaut space">
        <div class="abautusheader">
            <hr class="hr">
            <h1 class="headers">О компании</h1>
        </div>
        <div class="abautus">
            <p class="text darcktext">Рад познакомиться, меня зовут Дмитрий. Я – ответственный за дом вашей мечты. Чтобы вы доверяли мне чуть больше, готов поделиться своей историей.
Я закончил Уральский государственный лесотехнический университет по специальности «Инженер - технолог», моей специализацией было деревянное домостроение. Именно то, чем мы занимаемся сейчас.</p>
            <p class="text">Пройдя практику в компании «Ураллеспром» и написав диплом, основанный на их работе, я был выбран среди остальных практикантов и получил работу в компании. С 2008 года я спроектировал несколько сотен домов, зданий, спортивных сооружений и гостиниц по всей стране, до самого крайнего севера. Часто эти проекты выходили за рамки стандартных. Мы строили треугольные, квадратные, волнистые здания, требующие знания тонкостей строительства и аккуратности. Этот опыт не дает мне ошибаться сейчас, при строительстве трендовых домов – шалашей. </p>
            <img src="../assets/AbautUSimg.png" alt="">
        </div>
        <div class="abautMe">
            <img src="../assets/AbautUSimg2.png" alt="">
            <p class="text darcktext">В 2010 году я начал строить самостоятельно, подчерпнув технологию строительства у немцев. Сотни людей, живущих в панельных каркасных домах, построенных нами, подтвердят качество таких домов. Я сам живу в таком доме с семьей уже 7 лет. То, что я каждое утро просыпаюсь в теплом комфортном просторном доме, день ото дня радуюсь своему выбору и наслаждаюсь вечерами, проведенными дома, дает мне полное право советовать своим заказчикам похожие дома. </p>
        </div>
        <p class="text">Я рад, что помогаю людям обрести полноценный просторный дом, о котором они мечтали. Мне нравится читать отзывы или лично заезжать на чашечку чая к заказчикам, которые живут в доме уже несколько лет. По прошествии времени они подводят полноценные итоги, которые радуют меня, как строителя. Надеюсь, однажды я услышу такой отклик и от вас.</p>
    </div>
</template>
<script>
export default {
    name: "abautus"
}
</script>
<style scoped>
    .darcktext{
        color: #000;
    }
    .abautusheader{
        display: flex;
        flex-direction: row;
    }
    .abautusheader h1{
        margin-top: -10px;
    }
    .abautus{
        display: flex;
        position: relative;
        flex-direction: row;
        height: 23%;
        margin-left: 13%;
    }
    .abautus p:first-child{
        width: 35%;
    }
    .abautus p:nth-child(2){
        width: 35%;
        margin-left: 135px;
        color: #636363;
    }
    .abautus img{
        position: relative;
        top: -100px;
        margin-left: 50px;
        height: max-content;
    }
    .abautMe{
        display: flex;
        flex-direction: row;
        position: relative;
        height: 390px;
        padding: 60px 13% 60px 0px;
        margin-top: 2%;
        margin-left: 20.5%;
        background: #F1F1F1;
    }
    .abautMe p{
        width: 370px;
        margin-left: auto;
    }
    .abautMe img{
        position: absolute;
        top: -160px;
        left: -100px;
    }
    .abaut > p{
        width: 35%;
        margin-right: 14%;
        margin-left: auto;
        margin-top: 30px;
    }
</style>