<template>
  <div class="service">
    <h2>Our Services and Solutions</h2>
    <v-row class="service-row" no-gutters>
      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img :src="require('@/assets/images/icon/DataCenter.png')" alt="" />
            <h3>Data Center Service and Solution</h3>
            <p>
              Our expertise Solution in Data Center. Includes the design, build,
              ownership and operation of Efficiency, Availability, Scalability &
              Security. Data center IT Solution - Advanced Networking
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/data-center"
              >View More</router-link
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img :src="require('@/assets/images/icon/Infra.png')" alt="" />
            <h3>Infrastructure Services & Solutions</h3>
            <p>
              Green IT delivers a full set of services to keep your IT
              Infrastructure reliable with on-going Infrastructure
              administration, continuous monitoring and prompt troubleshooting.
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/infracture"
              >View More</router-link
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img :src="require('@/assets/images/icon/security.png')" alt="" />
            <h3>Security Services & Solution</h3>
            <p>
              Network and security are the pillars of the current digital world.
              Businesses across the globe are rapidly scaling up their processes
              to keep up with the changing customer demands and technological
              landscape.
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/security"
              >View More</router-link
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img
              :src="require('@/assets/images/icon/ServerStorage.png')"
              alt=""
            />
            <h3>Server & Storage Solution</h3>
            <p>
              Our Server solutions offer a comprehensive, innovative portfolio
              designed to address your evolving needs and deliver greater value
              to your business. We supply all type of servers by partnering with
              the following vendors and provide solutions:
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/server">View More</router-link>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img :src="require('@/assets/images/icon/voip.png')" alt="" />
            <h3>Conferencing & VOIP Solution</h3>
            <p>
              Make and receive calls from anywhere. VoIP powers the modern
              workforce with flexible, reliable, high-quality voice
              communications. We always keep our focus on offering a hassle-free
              solution to our customers.
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/conferencing-solution"
              >View More</router-link
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="4" class="service-column">
        <div class="service-section">
          <div class="content">
            <img
              :src="require('@/assets/images/icon/ServerRental.png')"
              alt=""
            />
            <h3>Server Rental Service</h3>
            <p>
              Server Rental is sub-directory of Green IT Co.,Ltd. Our rental
              service offer Server, Storage, NAS, Router, Switch, Firewall,
              Wireless AP & Wireless Controller and so on.We are a preferred
              rental partner and have over 6 years experiences.
            </p>
          </div>
          <hr />
          <div class="view-more">
            <router-link to="/services-solutions/server-rental"
              >View More</router-link
            >
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="view-all">
      <router-link to="/services-solutions" style="letter-spacing: 1px"
        >View All Solutions</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.service {
  padding: 80px 15%;
  background: linear-gradient(to bottom, #b1d7b4, #d9dbbd);
  margin-top: 30px;
}

.service-row {
  margin-top: 40px;
}

.service .service-column {
  padding-right: 10px !important;
}

.service h2 {
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.service-section {
  background: #fff;
  margin-top: 10px;
  border-radius: 5px;
}

.service .content {
  padding: 20px 20px;
}

.service .content img {
  height: 55px;
  object-fit: contain;
}

.service .content h3 {
  font-size: 27px;
  margin: 15px 0 5px;
  height: 60px;
  line-height: 28px;
}

.service .content p {
  text-align: justify;
  font-size: 22px;
  height: 120px;
}

.service .view-more {
  padding: 15px 20px;
  position: relative;
}

.service .view-more a {
  font-size: 18px;
  color: #287e3d;
  font-weight: bold;
  border-bottom: 3px solid #ecebeb;
  position: relative;
  letter-spacing: 1px;
}

.service .view-more a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #287e3d;
  transition: width 0.3s ease;
}

.service .view-more a:hover::before {
  width: 100%;
}

.service .view-all {
  text-align: center !important;
  margin: 40px auto 10px;
}

.service .view-all a {
  background-color: #287e3d;
  color: #fff;
  padding: 15px 20px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
}

.service .view-all a:hover {
  background-color: #08521a;
}

@media (max-width: 1630px) {
  .service {
    padding: 80px 9%;
    margin-top: 20px;
  }

  .service-row {
    margin-top: 30px;
  }

  .service .service-column {
    padding-right: 10px !important;
  }

  .service h2 {
    font-size: 35px;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  .service-section {
    background: #fff;
    margin-top: 10px;
    border-radius: 5px;
  }

  .service .content {
    padding: 20px;
  }

  .service .content img {
    height: 50px;
    object-fit: contain;
  }

  .service .content h3 {
    font-size: 24px;
    margin: 15px 0 5px;
    height: 60px;
    line-height: 28px;
  }

  .service .content p {
    text-align: justify;
    font-size: 20px;
  }

  .service .view-more {
    padding: 15px 20px;
  }

  .service .view-more a {
    font-size: 17px;
    color: #287e3d;
    font-weight: bold;
    border-bottom: 3px solid #ecebeb;
  }

  .service .view-all {
    text-align: center !important;
    margin: 40px auto 10px;
  }

  .service .view-all a {
    background-color: #287e3d;
    color: #fff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;
  }

  .service .view-all a:hover {
    background-color: #08521a;
  }
}

@media (max-width: 1200px) {
  .service {
    padding: 80px 3%;
  }
}

@media (max-width: 1080px) {
  .service-row {
    padding: 10px 15px;
  }
  .service {
    padding: 80px 1%;
  }

  .service h2 {
    padding: 0 3%;
  }
}

@media (max-width: 768px) {
  .service .content p {
    height: 140px;
  }
}

@media (max-width: 480px) {
  .service {
    padding: 40px 3%;
  }
  .service h2 {
    padding: 0 3%;
    font-size: 26px;
  }
}
</style>
