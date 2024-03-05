<template>
  <div class="about-us-section">
    <div class="about-us">
      <div class="content">
        <img :src="require('@/assets/images/logo.png')" alt="" />
        <div class="info">
          <!-- <h2>About Us</h2> -->
          <div class="myanmar">
            <h3>MYANMAR</h3>
            <div class="address">
              <v-icon>mdi-map-marker-radius</v-icon>
              <span
                >No-1, 3rd-4th Floor, Corner of U Lu Maung Street, <br />
                and Lower Kyi Myint Daing Road, Kyi Myin Daing Tsp, <br />
                Yangon, Myanmar</span
              >
            </div>
            <div class="phone">
              <v-icon>mdi-cellphone-wireless</v-icon>
              <span>+959 896 237 358, +959 896 237 359</span>
            </div>
            <div class="mail">
              <v-icon>mdi-email-check</v-icon>
              <span>info@greenitmm.com</span>
            </div>
          </div>

          <div class="singapore">
            <h3>SINGAPORE</h3>
            <div class="address">
              <v-icon>mdi-map-marker-radius</v-icon>
              <span
                >#11-20, International Plaza, 10 Anson Road, Singapore
                (079903)</span
              >
            </div>
            <div class="phone">
              <v-icon>mdi-cellphone-wireless</v-icon>
              <span>+65 8212 7669, +65 9882 6584</span>
            </div>
            <div class="mail">
              <v-icon>mdi-email-check</v-icon>
              <span>sg.presales@greenitmm.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <img :src="require('@/assets/images/map.png')" alt="" />
      </div>
      <div class="qr">
        <img :src="require('@/assets/images/qr.png')" alt="" class="qr" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-us-section {
  background-image: url("../assets//images/bg.jpg");
  height: 850px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.about-us {
  padding: 60px 15% 20px;
  position: relative;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 40px;
}

.content img {
  width: 250px;
}

.content .info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info .myanmar h3,
.singapore h3 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 20px;
}

.info span {
  font-size: 20px;
}

.address,
.phone,
.mail {
  color: #fff;
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.map {
  position: absolute;
  top: 1%;
  left: 20%;
}

.map img {
  width: 75%;
}

.qr {
  position: absolute;
  bottom: 0px;
  right: 20%;
}

.qr img {
  width: 130px;
}

@media (max-width: 1630px) {
  .about-us-section {
    height: 750px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .about-us {
    padding: 60px 9% 20px;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 40px;
  }

  .content img {
    width: 200px;
  }

  .content .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info h2 {
    font-size: 37px;
  }

  .info .myanmar h3,
  .singapore h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .address,
  .phone,
  .mail {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .map {
    position: absolute;
    top: 10%;
    left: 20%;
  }

  .map img {
    width: 90%;
  }

  .qr {
    position: absolute;
    bottom: 0px;
    right: 8%;
  }

  .qr img {
    width: 110px;
  }
}

@media (max-width: 1200px) {
  .about-us {
    padding: 60px 3% 20px;
    position: relative;
  }

  .map {
    position: absolute;
    top: 5%;
    left: 0%;
    right: 40px;
  }

  .map img {
    width: 100%;
  }

  .qr {
    position: absolute;
    bottom: 0px;
    right: 3%;
  }

  .qr img {
    width: 110px;
  }
}

@media (max-width: 1080px) {
  .about-us {
    padding: 60px 1% 20px;
    position: relative;
  }
}

@media (max-width: 900px) {
  .map {
    position: absolute;
    top: 12%;
    left: 0%;
    right: 40px;
  }

  .map img {
    width: 100%;
  }

  .qr {
    position: absolute;
    bottom: 0px;
    right: 3%;
  }

  .qr img {
    width: 110px;
  }
}

@media (max-width: 768px) {
  .map {
    position: absolute;
    top: 30%;
    left: 0%;
    right: 40px;
  }

  .map img {
    width: 100%;
  }

  .qr {
    position: absolute;
    bottom: 0px;
    right: 3%;
  }

  .qr img {
    width: 110px;
  }
}

@media (max-width: 600px) {
  .about-us-section {
    height: 1250px;
    background-size: cover;
    background-position: center;
    overflow: visible;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .map {
    position: relative;
    margin-left: -200px;
  }

  .map img {
    width: 700px;
  }

  .qr {
    position: absolute;
    bottom: 0px;
    right: 3%;
  }

  .qr img {
    width: 110px;
  }
}

@media (max-width: 490px) {
  .about-us-section {
    height: 1300px;
    background-size: cover;
    background-position: center;
    overflow: visible;
  }
  .map {
    position: relative;
    margin-left: -250px;
  }
}
</style>
