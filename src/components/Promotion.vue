<template>
  <div>
    <div class="promotion swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            :src="require('@/assets/images/promotion/fortinet.jpg')"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            :src="require('@/assets/images/promotion/watchguard.jpg')"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img :src="require('@/assets/images/promotion/15.jpg')" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else>

    </div> -->
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const swiper = ref(null);

    onMounted(() => {
      swiper.value = new Swiper(".promotion", {
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
      });
    });

    return { swiper };
  },
};
</script>

<style scoped>
.promotion {
  margin: 0px 15%;
}
.promotion img {
  width: 100%;
  object-fit: cover;
  height: 730px;
  overflow: hidden;
}

@media (max-width: 1630px) {
  .promotion {
    margin: 0px 9%;
  }
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 700px;
  }
}

@media (max-width: 1400px) {
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 600px;
  }
}

@media (max-width: 1200px) {
  .promotion {
    margin: 0px 3%;
  }
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 600px;
  }
}

@media (max-width: 1080px) {
  .promotion {
    margin: 0px 2%;
  }
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 550px;
  }
}

@media (max-width: 930px) {
  .promotion img {
    height: 500px;
  }
}

@media (max-width: 870px) {
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 450px;
  }
}

@media (max-width: 780px) {
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 390px;
  }
}

@media (max-width: 650px) {
  .promotion img {
    width: 100%;
    object-fit: cover;
    height: 330px;
  }
}

@media (max-width: 555px) {
  .promotion {
    margin: -50px 2%;
  }
  .promotion img {
    width: 100%;
    object-fit: contain;
    height: 270px;
  }
}

@media (max-width: 470px) {
  .promotion {
    margin: -60px 2%;
  }

  .promotion img {
    width: 100%;
    object-fit: contain;
    height: 200px;
  }
}
</style>
