<template>
    <div class="partner-content">
        <h2>{{title}}</h2>
        <div class="items">
            <div class="item" v-for="(infra, i) in items" :key="i">
                <img :src="infra" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            items: {
                type: Array
            },
            title: {
                type: String
            }
        }
    }
</script>

<style  scoped>

.partner-content {
    margin: 10px auto 50px;
}
.partner-content h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 8px;
}

.partner-content .items {
    background: #f7f6dc;
    padding: 15px 18%;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.partner-content .item {
    width: 140px;
    height: 100px;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    box-shadow: 2px 2px 5px #b3b1b1;
}

.partner-content .item img {
    width: 90%;
    object-fit: contain;
}

@media (max-width: 1650px) {
    .partner-content .items {
        padding: 15px 15%;
    }
}

@media (max-width: 1200px) {
    .partner-content .items {
        padding: 15px 12%;
        flex-wrap: wrap;
    }

    .partner-content .item {
        width: 120px;
        height: 100px;
    }
}

@media (max-width: 990px) {

    .partner-content .items {
        padding: 15px 10%;
    }
    .partner-content .item {
        width: 100px;
        height: 90px;
    }

    .partner-content h2 {
        font-size: 26px;
    }
}

@media (max-width: 800px) {
    .partner-content .item {
        width: 90px;
        height: 80px;
    }
}

@media (max-width: 650px) {
    .partner-content .items {
        padding: 15px 5%;
    }
}


</style>
