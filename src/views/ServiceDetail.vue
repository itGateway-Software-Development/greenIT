<template>
  <div class="service-detail">
    <div class="banner-img">
      <img class="banner" :src="service.banner_img" alt="" />
    </div>

    <div class="content">
      <div class="title">
        <img class="icon" :src="service.img" alt="" />
        <h2>{{ service.title }}</h2>
      </div>
      <div>
        <div class="content-section">
          <p v-html="service.p"></p>

          <div class="sub-title-container">
            <img :src="service.preview_img" alt="" />
            <div>
              <div class="sub-title">
                <h3>{{ service.sub_title_1 }}</h3>
                <div class="list">
                  <div v-for="(item, i) in service.list_one" :key="i">
                    <i class="fa-solid fa-check-double me-5"></i
                    ><span>{{ item }}</span>
                  </div>
                </div>
              </div>

              <div class="sub-title">
                <h3>{{ service.sub_title_2 }}</h3>
                <div class="list">
                  <div v-for="(item, i) in service.list_two" :key="i">
                    <i class="fa-solid fa-check-double me-5"></i
                    ><span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["slug"],
  setup(props) {
    const store = useStore();
    let service = ref("");
    onMounted(() => {
      window.scrollTo(0, 0);
      store.dispatch("getService", props.slug);
      service.value = store.state.service;
    });

    onUpdated(() => {
      store.dispatch("getService", props.slug);
      service.value = store.state.service;
    });

    return { service };
  },
};
</script>

<style scoped>
.service-detail {
  margin-bottom: 30px;
}

.service-detail .banner-img {
  padding: 10px 15%;
}

.service-detail .banner {
  filter: brightness(0.7);
}
.service-detail img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.service-detail .content {
  padding: 30px 15%;
  margin-top: 30px;
}

.content .title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}
.content .title h2 {
  font-size: 40px;
  margin-top: 10px;
}

.service-detail .content .icon {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.content .sub-title-container {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: space-between;
  margin-top: 50px;
}

.content .sub-title-container img {
  width: 40%;
  height: 300px;
  object-fit: cover;
  display: inline-block;
  margin-top: 50px;
}

.content .content-section p {
  margin-bottom: 30px;
  font-size: 22px;
  text-align: justify;
  margin-top: 50px;
}

.sub-title-container .sub-title {
  margin-bottom: 20px;
}

.sub-title h3 {
  margin-bottom: 15px;
}

.sub-title .list div {
  margin-bottom: 10px;
}

.sub-title .list i {
  color: #287e3d;
}

.sub-title .list span {
  font-size: 20px;
}

@media (max-width: 1630px) {
  .service-detail {
    margin-bottom: 30px;
  }

  .service-detail .banner-img {
    padding: 10px 9%;
  }
  .service-detail img {
    height: 380px;
    margin-top: -15px;
  }

  .service-detail .content {
    padding: 30px 9%;
    margin-top: 30px;
  }

  .content .title {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  .content .title h2 {
    font-size: 35px;
    margin-top: 10px;
  }

  .service-detail .content .icon {
    width: 50px;
    height: 50px;
  }

  .content .sub-title-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
  }

  .content .sub-title-container img {
    width: 40%;
    height: 300px;
    object-fit: cover;
  }

  .content .content-section p {
    margin-bottom: 30px;
  }

  .sub-title-container .sub-title {
    margin-bottom: 20px;
  }

  .sub-title h3 {
    margin-bottom: 15px;
    font-size: 22px;
  }

  .sub-title .list div {
    margin-bottom: 10px;
  }

  .sub-title .list i {
    color: #287e3d;
  }
}

@media (max-width: 1320px) {
  .content .sub-title-container img {
    width: 50%;
    height: 300px;
    object-fit: cover;
  }
}

@media (max-width: 1200px) {
  .service-detail .banner-img {
    padding: 10px 3%;
  }

  .content .content-section p {
    font-size: 20px;
  }
}

@media (max-width: 990px) {
  .service-detail img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    filter: brightness(0.7);
  }

  .content .sub-title-container {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    align-items: start;
  }

  .content .sub-title-container img {
    width: 80%;
    height: 300px;
    object-fit: cover;
    margin-top: 30px;
  }

  .content .title h2 {
    font-size: 28px;
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .service-detail img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: brightness(0.7);
  }
}

@media (max-width: 500px) {
  .service-detail .banner {
    width: 100%;
    height: 200px;
  }
  .content .title h2 {
    font-size: 24px;
    margin-top: 10px;
  }

  .service-detail .content .icon {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .sub-title h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }
}

@media (max-width: 390px) {
  .service-detail .banner {
    height: 140px !important;
    margin-top: -15px;
  }
  .content .title h2 {
    font-size: 20px;
    margin-top: 10px;
  }

  .service-detail .content .icon {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .sub-title h3 {
    margin-bottom: 15px;
    font-size: 18px;
  }
}
</style>
