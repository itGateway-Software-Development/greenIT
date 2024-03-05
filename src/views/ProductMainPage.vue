<template>
  <div class="product-page">
    <div class="product-section-header">
      <h2>Products</h2>
      <p>
        Take your company to new heights by investing in our reliable and
        efficient technology solutions.
      </p>
    </div>
    <div class="img">
      <img :src="require('@/assets/images/products/banner.jpg')" alt="" />
    </div>
    <div class="product-content">
      Green IT is your trusted partner for IT management, data security, and
      cloud technology with one goal in mind: to transform the way your business
      works in order to save your time and money.
    </div>

    <div class="product-category">
      <v-row class="products-row" no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          class="product-column"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="product-section">
            <div class="p-2 border-bottom">
              <img :src="item.img" alt="" class="w-100" />
            </div>
            <div
              class="view-more d-flex justify-content-between align-items-center"
            >
              <h3>{{ item.title }}</h3>
              <router-link :to="item.route">View More </router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>

  <br /><br />
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    let products = [
      {
        id: 1,
        title: "Networking",
        img: require("@/assets/images/products/networking/pic.jpg"),
        route: "/products/networking",
      },
      {
        id: 2,
        title: "Computing",
        img: require("@/assets/images/products/computing/pic.jpg"),
        route: "/products/computing",
      },
      {
        id: 3,
        title: "Security",
        img: require("@/assets/images/products/security/pic.jpg"),
        route: "/products/security",
      },
      {
        id: 4,
        title: "Collaboration",
        img: require("@/assets/images/products/collaboration/pic.avif"),
        route: "/products/collaboration",
      },
      {
        id: 5,
        title: "Software",
        img: require("@/assets/images/products/software/pic.jpg"),
        route: "/products/software",
      },
      {
        id: 6,
        title: "Rack & Online UPS",
        img: require("@/assets/images/products/rack/pic.jpg"),
        route: "/products/rack",
      },
    ];
    onMounted(() => {
      //   window.scrollTo(0, 0);
    });

    return { products };
  },
};
</script>

<style scoped>
.product-page {
  margin-top: 50px;
}

.product-section-header {
  text-align: center;
  padding: 20px 20%;
}

.product-section-header h2 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.product-section-header p {
  color: #8a8787;
  font-size: 22px;
}

.product-page .img {
  padding: 0 15%;
}

.product-page img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.product-page .product-content {
  color: #8a8787;
  font-size: 22px;
  padding: 20px 30%;
}

.product-category {
  background: linear-gradient(to bottom, #b1d7b4, #d9dbbd);
  padding: 60px 15%;
  margin-top: 90px;
}

.product-row {
  margin-top: 40px;
}

.product-page .product-column {
  padding-right: 10px !important;
}

.product-section {
  background: #fff;
  border-radius: 7px;
  margin-bottom: 10px;
}

.product-section h3 {
  font-size: 26px;
  font-weight: bold;
}

.product-section img {
  height: 300px;
  object-fit: cover;
}

.product-section .view-more {
  padding: 13px 20px;
  position: relative;
}

.product-section .view-more a {
  font-size: 19px;
  color: #287e3d;
  font-weight: bold;
  border-bottom: 3px solid #ecebeb;
  transition: 0.3s;
  position: relative;
}

.product-section .view-more a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #287e3d;
  transition: width 0.3s ease;
}

.product-section .view-more a:hover::before {
  width: 100%;
}

@media (max-width: 1630px) {
  .product-page {
    margin-top: 30px;
  }
  .product-section-header {
    padding: 20px 30%;
  }

  .product-section-header h2 {
    font-size: 44px;
    margin-bottom: 10px;
  }

  .product-page .img {
    padding: 0 14%;
  }

  .product-category {
    padding: 60px 13%;
  }
}

@media (max-width: 1200px) {
  .product-section-header {
    padding: 20px 3%;
  }

  .product-page .product-content {
    font-size: 22px;
    padding: 20px 13%;
  }

  .product-page .img {
    padding: 0 5%;
  }

  .product-section h3 {
    font-size: 25px;
  }
}

@media (max-width: 950px) {
  .product-page .product-content {
    font-size: 20px;
    padding: 20px 10%;
  }

  .product-section-header h2 {
    font-size: 35px;
  }

  .product-category {
    padding: 60px 3%;
  }
}

@media (max-width: 650px) {
  .product-page .img img {
    height: auto;
  }

  .product-page .product-content {
    font-size: 17px;
    padding: 20px 7%;
  }

  .product-section img {
    height: 250px;
  }

  .product-section-header p {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .product-category {
    padding: 60px 10%;
  }
  .product-section img {
    height: auto;
  }
}
</style>
