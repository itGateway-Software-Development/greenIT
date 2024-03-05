<template>
  <div class="products security">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Security</h2>
    </div>
    <p class="head-text">
      Network security is the field of cybersecurity that focuses on protecting
      computer networks from cyber threats. Network security aims to prevent
      unauthorized access to network resources, detect and stop cyberattacks and
      security breaches, and ensure that authorized users have secure access to
      the network resources they need. Network security involves using various
      technologies and tools, such as firewalls, intrusion prevention systems,
      network access control, network segmentation, VPN, and more, to create
      multiple layers of defense between hackers and potential vulnerabilities.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/security/banner.jpg')"
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
                :src="require('@/assets/images/products/security/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row">
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 10" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/security/logo/${i}.png`)
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
        name: "Next-Generation Firewall",
      },
      {
        name: "Virtual Next-Generation Firewall",
      },
      {
        name: "Web Application Firewall",
      },
      {
        name: "Ruggedized Network Firewalls",
      },
      {
        name: "Cloud-Native Firewall",
      },
      {
        name: "Secure SD-Wan",
      },
      {
        name: "DDOS Attack Protection",
      },
      {
        name: "Mail Security Firewall",
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

.security .logo img {
  margin-top: 0px;
}
</style>
