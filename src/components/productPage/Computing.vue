<template>
  <div class="products computing">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Computing</h2>
    </div>
    <p class="head-text">
      Server computing is the use of servers to provide various services and
      functions to other computers or devices, called clients, over a network.
      Server computing can involve different types of servers, such as web
      servers, email servers, game servers, and storage servers, depending on
      the purpose and functionality of the server. Server computing can also
      require different types of hardware and software to run and manage the
      server programs and processes. Server computing can provide benefits such
      as scalability, performance, reliability, and security for the network and
      the clients.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/computing/banner.jpg')"
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
                :src="require('@/assets/images/products/computing/icon.png')"
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
                  require(`@/assets/images/products/computing/logo/${i}.png`)
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
        name: "Rack Server",
      },
      {
        name: "Tower Server",
      },
      {
        name: "Modular Server",
      },
      {
        name: "Rugged Server",
      },
      {
        name: "Blade Server",
      },
      {
        name: "High-performance SAN Storage Server",
      },
      {
        name: "Network Attached Storage Server",
      },
      {
        name: "Direct Attached Storage Server",
      },
      {
        name: "Server Equipment and Accessories",
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

.computing .banner {
  height: 500px;
  object-fit: cover;
}

.computing .logo img {
  width: 100%;
  margin-top: 0px;
}

@media (max-width: 600px) {
  .computing .banner {
    height: 400px;
  }
}
</style>
