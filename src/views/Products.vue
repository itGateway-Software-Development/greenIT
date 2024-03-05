<template>
  <div v-if="slug == 'networking'">
    <Networking></Networking>
  </div>
  <div v-if="slug == 'computing'">
    <Computing></Computing>
  </div>
  <div v-if="slug == 'security'">
    <Security></Security>
  </div>
  <div v-if="slug == 'collaboration'">
    <Collaboration></Collaboration>
  </div>
  <div v-if="slug == 'software'">
    <Software></Software>
  </div>
  <div v-if="slug == 'rack'">
    <Rack></Rack>
  </div>
</template>

<script>
import Rack from "../components/productPage/Rack";
import Software from "../components/productPage/Software";
import Collaboration from "../components/productPage/Collaboration";
import Security from "../components/productPage/Security";
import Computing from "../components/productPage/Computing";
import Networking from "../components/productPage/Networking";
export default {
  components: {
    Rack,
    Software,
    Collaboration,
    Security,
    Computing,
    Networking,
  },
  props: ["slug"],
};
</script>

<style scoped></style>
