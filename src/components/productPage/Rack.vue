<template>
  <div class="products rack">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Rack and Online UPS</h2>
    </div>
    <p class="head-text pb-0 mb-0">
      Rack refers to a specialized frame used in data centers and IT settings to
      mount and organize electronic equipment, particularly servers and
      networking gear.
    </p>
    <p class="head-text">
      Online UPS is a type of UPS that provides the highest level of power
      protection for critical equipment. An online UPS converts the incoming AC
      power to DC power and then back to AC power, creating a pure sine wave
      output that is free from voltage fluctuations and other distortions. An
      online UPS also has a zero transfer time to battery mode, meaning that
      there is no interruption in power supply in the event of a power outage.
      An online UPS is ideal for applications that require high availability,
      performance, and security, such as data centers, medical equipment, and
      industrial systems.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/rack/banner.jpg')"
      alt=""
    />

    <div class="row products-list">
      <div class="col-12 col-lg-7">
        <div class="products-list m-5 m-sm-0">
          <div class="row">
            <div
              class="col-12 col-sm-6 product"
              v-for="(item, i) in products"
              :key="i"
            >
              <img
                :src="require('@/assets/images/products/rack/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row">
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 5" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="require(`@/assets/images/products/rack/logo/${i}.png`)"
                alt=""
                style="width: 80%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    const products = [
      {
        name: "Network Rack Cabinet",
      },
      {
        name: "Server Rack Cabinet",
      },
      {
        name: "Open Racks",
      },
      {
        name: "Wall-Mounted Cabinets",
      },
      {
        name: "KVM Switches Console",
      },
      {
        name: "Online UPS",
      },
      {
        name: "Power Distribution Unit",
      },
      {
        name: "Cabinet Rack Accessories",
      },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.rack .logo img {
  width: 100%;
  margin-top: 0px;
}
</style>
