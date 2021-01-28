<template>
    <div class="ecoblock">
        <hr class="hr"> 
        <h1 class="headers">Eco-friendly</h1>
        <p class="text">Все материалы, используемые нами, являются абсолютно экологически - чистыми. Они не несут вред человеку (в них отсутствуют летучие соединения), а их производство не вредит окружающей среде</p>
        <img src="@/assets/Materials.png" alt="">
    </div>
</template>
<script>
export default {
    name: 'ecoblock'
}
</script>
<style scoped>
    .ecoblock{
        display: flex;
        flex-direction: column;
        margin-top: -10px;
    }
    .ecoblock h1{
        width: 300px;
        margin: 0px;
        margin-left: 200px;
        margin-top: -20px;
    }
    .ecoblock p{
        margin-left: 230px;
        width: 555px;
    }
    .ecoblock img{
        position: relative;
    }
</style>