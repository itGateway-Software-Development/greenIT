<template>
    <div class="blur">
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    backdrop-filter: blur(8px); /* Adjust the blur radius as needed */
    z-index: 99999999999; /* Make sure it appears above other content */
  }
</style>
