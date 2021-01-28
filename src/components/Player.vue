<template>
    <div class="player container">
        <h3 class="headers">
            Посмотрите, как строится ваш будущий дом
        </h3>
        <div class="player">
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/BV_QUsOOmW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>
<script>
export default {
    name: "player",

}
</script>
<style scoped>
    .playercontainer{
        display:flex;
        flex-direction: column;
        margin-top: 150px;
    }
    .player{
        display: flex;
        flex-direction: column;
        width: auto;
        position: relative;
    }
</style>