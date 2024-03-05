<template>
  <div class="promotion">
    <div class="menu">
      <div
        class="item"
        :class="{ 'active-item': currentLogo === promo.title }"
        v-for="(promo, index) in promotions"
        :key="index"
      >
        <img :src="promo.img" alt="" />
      </div>
    </div>
  </div>
  <div class="promo-items">
    <img :src="require('@/assets/images/promotion/fortinet.jpg')" alt="" />
    <div class="description">
      <h2>Fortinet Trade Up Program</h2>
      <p>
        Fortinet Trade-Up Program helps ensure your access to the latest
        Fortinet hardware while benefitting from serious savings. These are
        individualized discounts, and they can be quite significant. So if you
        have one of the legacy models eligible for the upgrade, and you want to
        take advantage.
      </p>
      <p>
        It's definitely worth emailing us or calling our Sales & Solutions
        Engineer at <b>+959880441007</b> or email at
        <b>sales@greenitmm.com</b>
      </p>
      <div>
        Check out the Fortinet Trade Up Matrix & find your future security
        appliance!
      </div>
    </div>
  </div>

  <div class="promo-items">
    <img :src="require('@/assets/images/promotion/watchguard.jpg')" alt="" />
    <div class="description">
      <h2>WatchGuard Trade Up Program</h2>
      <p>
        WatchGuard Trade-Up Program can earn up to 25% off the purchase of the
        latest Firebox platform. For this program, you just need to provide your
        old device serial number to us. So if you have devices eligible for
        upgrade, can take this advantage.
      </p>
      <p>
        Feel freely reach out to our Sales & Solution engineer
        <b>+959880441007</b> or email at <b>sales@greenitmm.com</b>
      </p>
    </div>
  </div>

  <div class="promo-items">
    <img :src="require('@/assets/images/promotion/15.jpg')" alt="" />
    <div class="description">
      <h2>Up to 15% Off Special Discount Promotion</h2>
      <p>
        Server Accessories It's something you shouldn't skip. Hurry ASAP ! We
        are offering a 15% special discount on all of our Server & networking in
        stock accessoreis. We hope this big sales will make you to choose Green
        IT as your preferred IT partner. Get the best value with this discount!
      </p>
      <p>
        We would love to hear if you have any requirments to purchase. As
        always, we are here for you over phone,email and all of our social
        medial channel. Don't miss this chance to save your budget.
      </p>
      <p>
        If you want to know more details, don't be hesitate to contact our sales
        team at
        <b
          >sales@greenitmm.com, info@greenitmm.com, 09896237358~9,
          09880441215</b
        >
      </p>
    </div>
  </div>

  <!-- <div v-if="promotions.length < 1">
        <PageLoading></PageLoading>
      </div> -->
</template>

<script>
import PageLoading from "../components/PageLoading";
import { onMounted, ref } from "vue";
export default {
  components: { PageLoading },
  setup() {
    const logoNames = ["fortinet", "watch-guard", "15%"];
    const currentIndex = ref(0);
    const currentLogo = ref("");

    const promotions = [
      {
        title: "fortinet",
        img: require("@/assets/images/promotion/logo-15.jpg"),
      },
      {
        title: "watch-guard",
        img: require("@/assets/images/promotion/logo-fortinet.jpg"),
      },
      {
        title: "15%",
        img: require("@/assets/images/promotion/logo-watchguard.jpg"),
      },
    ];

    const slider = () => {
      if (logoNames.length > 0) {
        if (currentIndex.value < logoNames.length - 1) {
          currentIndex.value++;
        } else {
          currentIndex.value = 0;
        }

        currentLogo.value = logoNames[currentIndex.value];
      }
    };

    onMounted(() => {
      window.scrollTo(0, 0);
      currentLogo.value = logoNames[0];

      setInterval(slider, 3000);
    });

    return { currentLogo, promotions };
  },
};
</script>

<style scoped>
.promotion {
  padding: 30px 15%;
  display: flex;
  justify-content: center;
  margin: 40px auto;
}

.promotion .menu {
  width: 800px;
  display: flex;
  gap: 40px;
  justify-content: center;
}

.promotion .menu .item {
  width: 130px;
  height: 130px;
  transition: 0.5s ease;
  border-radius: 7px;
  cursor: pointer;
}

.promotion .menu .item.active-item {
  transform: translateY(-10px);
  box-shadow: 5px 5px 10px rgb(184, 182, 182);
}

.promotion .menu .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
}

.promotion .menu .item.item.active-item img {
  filter: brightness(1);
}

.promo-items {
  margin: 30px 10%;
  padding: 20px 5%;
  background: #f7f6dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
}
.promo-items img {
  width: 45%;
}

.promo-items .description {
  padding: 20px;
  font-size: 24px;
}

.promo-items .description h2 {
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 20px;
}

.promo-items .description p {
  text-align: justify;
  text-indent: 50px;
  font-size: 22px;
}

@media (max-width: 1630px) {
  .promotion {
    padding: 30px 9%;
  }

  .promo-items {
    padding: 50px 7%;
  }

  .promo-items img {
    width: 45%;
  }
}

@media (max-width: 1440px) {
  .promo-items {
    padding: 50px 3%;
  }
  .promo-items .description {
    font-size: 22px;
  }
}

@media (max-width: 1200px) {
  .promotion {
    padding: 30px 3%;
  }
  .promo-items img {
    width: 50%;
  }
  .promo-items .description h2 {
    font-size: 28px;
  }
  .promo-items .description {
    font-size: 20px;
  }

  .promo-items .description p {
    font-size: 20px;
  }
}

@media (max-width: 1100px) {
  .promo-items {
    padding: 50px 10%;
    flex-direction: column;
  }
  .promo-items img {
    width: 100%;
  }

  .promo-items .description h2 {
    font-size: 34px;
  }
  .promo-items .description {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .promo-items {
    padding: 50px 3%;
  }
  .promo-items .description h2 {
    font-size: 28px;
  }
  .promo-items .description {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  .promotion {
    padding: 10px 3%;
  }
  .promotion .menu {
    gap: 20px;
  }

  .promotion .menu .item {
    width: 90px;
    height: 90px;
  }
}
</style>
