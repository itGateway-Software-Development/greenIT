<template>
  <div class="services">
    <div class="section-header">
      <h2>Services & Solutions</h2>
      <p>
        Take your company to new heights by investing in our reliable and
        efficient technology solutions.
      </p>
    </div>
    <div class="img">
      <img :src="require('@/assets/images/service.jpg')" alt="" />
    </div>
    <div class="service-content">
      Green IT is your trusted partner for IT management, data security, and
      cloud technology with one goal in mind: to transform the way your business
      works in order to save your time and money.
    </div>

    <div class="services-category">
      <v-row class="services-row" no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          class="services-column"
          v-for="(service, i) in services"
          :key="i"
        >
          <div class="services-section">
            <div class="content">
              <img :src="service.img" alt="" />
              <h3>{{ service.title }}</h3>
              <p v-html="service.p && service.p.slice(0, 140) + '...'"></p>
            </div>
            <hr />
            <div class="view-more">
              <router-link :to="`services-solutions/${service.slug}`"
                >View More
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>

  <Partners></Partners>
  <br /><br />
</template>

<script>
import Partners from "../components/Partners";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { Partners },
  setup() {
    const store = useStore();
    let services = ref([]);

    onMounted(() => {
      services.value = store.getters.getServices;
      window.scrollTo(0, 0);
    });

    return { services };
  },
};
</script>

<style scoped>
.services {
  margin-top: 50px;
}
.section-header {
  text-align: center;
  padding: 20px 30%;
}

.section-header h2 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.section-header p {
  color: #8a8787;
  font-size: 22px;
}

.services .img {
  padding: 0 15%;
}

.services img {
  width: 100%;
}

.services .service-content {
  color: #8a8787;
  font-size: 22px;
  padding: 20px 30%;
}

.services-category {
  background: linear-gradient(to bottom, #b1d7b4, #d9dbbd);
  padding: 30px 15%;
  margin-top: 90px;
}

.services-row {
  margin-top: 40px;
}

.services .services-column {
  padding-right: 10px !important;
}

.services-section {
  background: #fff;
  border-radius: 7px;
  margin-bottom: 10px;
}

.services-section .content {
  padding: 25px 20px;
}

.services-section img {
  width: 80px;
}

.services-section h3 {
  margin: 20px 0;
  font-size: 25px;
  height: 45px;
}

.services-section p {
  height: 100px;
  font-size: 22px;
}

.services-section .view-more {
  padding: 13px 20px;
  position: relative;
}

.services-section .view-more a {
  font-size: 19px;
  color: #287e3d;
  font-weight: bold;
  border-bottom: 3px solid #ecebeb;
  transition: 0.3s;
  position: relative;
}

.services-section .view-more a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #287e3d;
  transition: width 0.3s ease;
}

.services-section .view-more a:hover::before {
  width: 100%;
}

@media (max-width: 1630px) {
  .services {
    margin-top: 30px;
  }
  .section-header {
    text-align: center;
    padding: 20px 30%;
  }

  .section-header h2 {
    font-size: 44px;
    margin-bottom: 10px;
  }

  .services .img {
    padding: 0 15%;
  }

  .services img {
    width: 100%;
  }

  .services .service-content {
    color: #8a8787;
    font-size: 17px;
    padding: 20px 30%;
  }

  .services-category {
    background: linear-gradient(to bottom, #b1d7b4, #d9dbbd);
    padding: 30px 9%;
    margin-top: 90px;
  }

  .services-row {
    margin-top: 40px;
  }

  .services .services-column {
    padding-right: 10px !important;
  }

  .services-section {
    background: #fff;
    border-radius: 7px;
    margin-bottom: 10px;
  }

  .services-section .content {
    padding: 25px 20px;
  }

  .services-section img {
    width: 60px;
  }

  .services-section h3 {
    margin: 20px 0;
    font-size: 22px;
  }

  .services-section .view-more {
    padding: 10px 20px;
  }
}

@media (max-width: 1100px) {
  .services {
    margin-top: 30px;
  }
  .section-header {
    text-align: center;
    padding: 20px 25%;
  }

  .section-header p {
    font-size: 20px;
  }

  .services-section p {
    font-size: 20px;
  }

  .services .service-content {
    color: #8a8787;
    font-size: 17px;
    padding: 20px 25%;
  }

  .services-section .view-more a {
    font-size: 17px;
  }
}

@media (max-width: 850px) {
  .services {
    margin-top: 20px;
  }
  .section-header {
    text-align: center;
    padding: 20px 20%;
  }

  .services .service-content {
    color: #8a8787;
    font-size: 17px;
    padding: 20px 20%;
  }
}

@media (max-width: 610px) {
  .services {
    margin-top: 20px;
  }
  .section-header {
    text-align: center;
    padding: 20px 10%;
  }

  .section-header h2 {
    font-size: 38px;
    margin-bottom: 10px;
  }

  .services .img {
    padding: 0 10%;
  }

  .services .service-content {
    color: #8a8787;
    font-size: 17px;
    padding: 20px 10%;
  }
}
</style>
