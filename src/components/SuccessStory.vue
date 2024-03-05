<template>
  <div class="success-story">
    <h2>Success Stories</h2>
    <v-row class="story-row" no-gutters>
      <v-col cols="12" sm="6" md="6" lg="4" class="story-column">
        <div class="story-card pointer" @click="navigate('/case-studies')">
          <img :src="require('@/assets/images/Cookie-media.png')" alt="" />
          <!-- <span>LOAD BALANCE SETUP</span> -->
          <h2>Cookie Media</h2>
          <p>
            Fortigate SD-WAN load balance and port forward to Ubuntu server
            setup.
          </p>
          <!-- <router-link to="#">Read More</router-link> -->
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="story-column">
        <div class="story-card pointer" @click="navigate('/case-studies')">
          <img :src="require('@/assets/images/shinhan.png')" alt="" />
          <!-- <span>FAILOVER SETUP</span> -->
          <h2>Myanmar Shinhan Microfinance</h2>
          <p>2 x ASA HA failover Setup 2 x ASA HA failover Setup</p>
          <!-- <router-link to="#">Read More</router-link> -->
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="story-column">
        <div class="story-card pointer" @click="navigate('/case-studies')">
          <img :src="require('@/assets/images/info-myanmar.jpg')" alt="" />
          <!-- <span>LOAD BALANCE SETUP</span> -->
          <h2>Info Myanmar College</h2>
          <p>
            Fortigate SD-WAN Load balance, Yeastar GSM Gateway, 3CX PBX
            Collaboration, Cisco CT2504 WLC, AIR-AP 18 15i-H-K9 configuration
            setup.
          </p>
          <!-- <router-link to="#">Read More</router-link> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const navigate = (route) => {
      router.push(route);
    };

    return { navigate };
  },
};
</script>

<style scoped>
.success-story {
  padding: 20px 15%;
  margin: 60px 0;
}

.story-column {
  padding-right: 15px !important;
}

.success-story h2 {
  font-size: 40px;
  margin-bottom: 30px;
}

.story-card {
  border: 2px solid #eee;
  padding: 20px;
  border-radius: 5px;
}

.story-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
  background-color: #eee;
}

.story-card span {
  font-size: 14px;
  color: #615d5d;
  font-weight: bold;
}

.story-card h2 {
  font-size: 26px;
  margin: 15px 0;
}

.story-card p {
  margin-bottom: 20px;
  color: #615d5d;
  height: 90px;
  font-size: 22px;
}

.story-card a {
  text-decoration: none;
  font-size: 14px;
  color: rgb(18, 18, 136);
  display: inline-block;
  margin-top: 20px;
}

@media (max-width: 1630px) {
  .success-story {
    padding: 20px 9%;
    margin: 40px 0;
  }

  .story-column {
    padding-right: 15px !important;
    margin-bottom: 10px;
  }

  .success-story h2 {
    margin-bottom: 20px;
  }

  .story-card {
    border: 2px solid #eee;
    padding: 15px;
    border-radius: 5px;
  }

  .story-card img {
    width: 100%;
    height: 150px;
  }

  .story-card span {
    font-size: 11px;
  }

  .story-card h2 {
    margin: 10px 0;
  }
}

@media (max-width: 1200px) {
  .success-story {
    padding: 20px 3%;
    margin: 40px 0;
  }

  .success-story h2 {
    margin-bottom: 20px;
    padding: 5px 15px;
  }

  .story-row {
    padding: 10px 15px;
  }
  .story-card p {
    height: 90px;
    font-size: 20px;
  }
}

@media (max-width: 1080px) {
  .success-story {
    padding: 20px 1%;
    margin: 40px 0;
  }
}

@media (max-width: 560px) {
  .story-column {
    padding-right: 0px !important;
  }
  .story-card h2 {
    padding-left: 0px;
  }
}
</style>
