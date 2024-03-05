<template>
  <div class="products collaboration">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Collaboration</h2>
    </div>
    <p class="head-text">
      Collaboration is the process of working together towards a common goal. It
      involves individuals or groups sharing knowledge, skills, and resources to
      achieve a shared objective. Collaboration can take many forms, such as
      virtual teamwork, co-authoring, and project management, and is essential
      for success in many fields.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/collaboration/banner.jpg')"
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
                :src="
                  require('@/assets/images/products/collaboration/icon.png')
                "
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row">
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 6" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/collaboration/logo/${i}.png`)
                "
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
        name: "Video Conferencing",
      },
      {
        name: "Meeting Room Conferencing Camera",
      },
      {
        name: "Interactive Display & Whiteboard",
      },
      {
        name: "Camera & Speakerphone",
      },
      {
        name: "Personal Solution & Webcams",
      },
      {
        name: "Wireless Presentation System",
      },
      {
        name: "IP Conference Phone",
      },
      {
        name: "USB/Bluetooth Speakerphone",
      },
      {
        name: "Wireless Earbuds",
      },
      {
        name: "Bluetooth Headsets",
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

.collaboration .logo img {
  margin-top: 0px;
}
</style>
