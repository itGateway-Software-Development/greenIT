<template>
    <div class="mobile-products">
        <div v-if="slug === 'networking'"><Networking></Networking></div>
        <div v-if="slug === 'computing'"><Computing></Computing></div>
        <div v-if="slug === 'security'"><Security></Security></div>
        <div v-if="slug === 'collaboration'"><Collaboration></Collaboration></div>
        <div v-if="slug === 'software'"><Software></Software></div>
        <div v-if="slug === 'rack'"><Rack></Rack></div>
    </div>
</template>

<script>
    import Rack from '../components/mobileproducts/Rack'
import Software from '../components/mobileproducts/Software'
import Collaboration from '../components/mobileproducts/Collaboration'
import Security from '../components/mobileproducts/Security'
import Computing from '../components/mobileproducts/Computing'
import Networking from '../components/mobileproducts/Networking'
    export default {
        components: {
    Rack,
    Software,
    Collaboration,
    Security,
    Computing, Networking },
        props: ['slug'],
        
    }
</script>

<style>
   .mobile-products {
    padding: 15px 2%;
   }

   .mobile-products .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
   }

   .mobile-products .product h2 {
    text-align: center;
    font-size: 18px;
    display: inline-block;
    border-bottom: 2px solid #287e3d;
   }

   .mobile-products .product.product .sub-title {
    align-self: start;
    font-weight: bold;
    margin-left: 75px;
    margin-bottom: -15px;
    font-size: 14px;
   }

   .mobile-products .product ul {
        align-self: start;
        margin-left: 40px;
   }

   .mobile-products .product ul li {
        font-size: 14px;
        margin-bottom: 5px;
   }

   .mobile-products .mobile-products-img {
        display: flex;
        flex-wrap: wrap;
        gap: 35px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
   }

   .mobile-products .mobile-products-img img {
        width: 90%;
   }
</style>
