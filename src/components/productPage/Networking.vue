<template>
  <div class="products">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Networking</h2>
    </div>
    <p class="head-text">
      Networking is the practice of connecting computers and other devices
      together to enable communication and data exchange between them.
      Networking can be used for various purposes, such as sharing information,
      resources, and services, accessing the internet, and collaborating with
      others. Networking can also involve different types of networks, such as
      local area networks (LANs), wide area networks (WANs), and cloud networks,
      depending on the size, scope, and architecture of the network. Networking
      also requires various protocols, standards, and devices that govern how
      data is transmitted and received over the network.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/networking/banner.jpg')"
      alt=""
    />

    <div class="row products-list">
      <div class="col-12 col-lg-7 mb-5">
        <div class="products-list m-5 m-sm-0">
          <div class="row">
            <div
              class="col-12 col-sm-6 product"
              v-for="(item, i) in products"
              :key="i"
            >
              <img
                :src="require('@/assets/images/products/networking/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row">
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 20" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/networking/logo/${i}.png`)
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
        name: "UnManage Switch",
      },
      {
        name: "L2 Manage Switch",
      },
      {
        name: "L3 Manage Switch",
      },
      {
        name: "Fixed Stackable Switch",
      },
      {
        name: "Modular Switch (Enterprise-Class Midsize)",
      },
      {
        name: "Cloud-Manage Switch",
      },
      {
        name: "Router",
      },
      {
        name: "Wireless Router",
      },
      {
        name: "VPN Router",
      },
      {
        name: "Cloud Edge Router",
      },
      {
        name: "Banch Router (Combine SD-WAN)",
      },
      {
        name: "Access Point",
      },
      {
        name: "Wireless Controller",
      },
      {
        name: "Cloud Manage Wireless Controller",
      },
      {
        name: "Load Balancer",
      },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { products };
  },
};
</script>

<style>
.products {
  padding: 30px 15%;
}

.products h5 {
  background: #7fb773;
  display: inline-block;
  padding: 5px 15px;
  color: #fff;
  border-radius: 7px;
}

.products .head-text {
  font-size: 22px;
  padding: 10px 15px;
  text-indent: 50px;
  text-align: justify;
}

.products img {
  filter: brightness(0.7);
}

.products-list {
  margin-top: 60px;
}

.products-list .product {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.products-list .product img {
  width: 30px;
}

.products-list .product span {
  font-size: 20px;
}

@media (max-width: 1630px) {
  .products {
    padding: 30px 9%;
  }
}

@media (max-width: 1200px) {
  .products {
    padding: 30px 3%;
  }
  .products .head-text {
    font-size: 20px;
  }

  .products-list .product img {
    width: 20px;
  }

  .products-list .product span {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .products img.banner {
    height: 300px;
    object-fit: cover;
  }
  .products-list {
    margin-top: 10px;
  }
}
</style>
