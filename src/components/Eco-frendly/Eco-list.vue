<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <span class="text">{{item.header}}</span>
            <p class="text">{{item.text}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    name: "list",
    props: ['list']
}
</script>
<style scoped>
    ul{
        margin-top: 315px;
        padding-right: 200px;
        margin-left: 55px;
    }
    li{
        list-style: none;
        margin-bottom: 45px;
    }
    li span{
        font-weight: bold;
    }
</style>