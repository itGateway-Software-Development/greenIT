<template>
  <div class="recognize">
    <div class="content">
      <h2>Recognized by the best</h2>
      <p>
        The company needed to complete a complex migration on a tight deadline
        to avoid millions of dollars in post-contract fees and fines.
      </p>
    </div>
    <div class="logo-container">
      <div class="logo-row">
        <img
          :src="require('@/assets/images/logo/cisco.png')"
          alt=""
          class="logo"
        />
        <img
          :src="require('@/assets/images/logo/fortinet.png')"
          alt=""
          class="fortinet"
        />
      </div>

      <div class="logo-row">
        <img
          :src="require('@/assets/images/logo/hpe.png')"
          alt=""
          class="logo"
        />
        <img
          :src="require('@/assets/images/logo/dell_emc.png')"
          alt=""
          class="dell-emc"
        />
        <img
          :src="require('@/assets/images/logo/apc.png')"
          alt=""
          class="logo"
        />
      </div>

      <div class="logo-row last-row">
        <img
          :src="require('@/assets/images/logo/watchguard.png')"
          alt=""
          class="logo"
        />
        <img
          :src="require('@/assets/images/logo/mc.png')"
          alt=""
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.recognize {
  padding: 30px 15%;
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.recognize .content {
  width: 40%;
}

.content h2 {
  font-size: 40px;
  margin-bottom: 15px;
}

.content p {
  font-size: 22px;
  color: #8a8989;
}

.logo-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.logo-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
}

.logo-row img {
  width: 150px;
}

.last-row img {
  width: 200px;
  margin-top: 10px;
}

.logo-row .dell-emc {
  width: 280px;
}

.logo-row .fortinet {
  width: 200px;
}

@media (max-width: 1630px) {
  .recognize {
    padding: 30px 9%;
    margin: 50px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .recognize .content {
    width: 40%;
  }

  .content h2 {
    font-size: 37px;
    margin-bottom: 15px;
  }

  .logo-container {
    gap: 10px;
  }

  .logo-row {
    gap: 60px;
  }

  .logo-row img {
    width: 100px;
  }

  .last-row img {
    width: 150px;
    margin-top: 10px;
  }

  .logo-row .dell-emc {
    width: 200px;
  }

  .logo-row .fortinet {
    width: 180px;
  }
}

@media (max-width: 1200px) {
  .recognize {
    padding: 30px 3%;
  }
}

@media (max-width: 1080px) {
  .recognize {
    padding: 30px 1%;
  }

  .recognize .content {
    width: 40%;
  }

  .content h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }

  .content p {
    font-size: 20px;
  }

  .logo-container {
    gap: 10px;
  }

  .logo-row {
    gap: 60px;
  }

  .logo-row img {
    width: 90px;
  }

  .last-row img {
    width: 120px;
    margin-top: 10px;
  }

  .logo-row .dell-emc {
    width: 150px;
  }

  .logo-row .fortinet {
    width: 160px;
  }
}

@media (max-width: 850px) {
  .content h2 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .logo-row img {
    width: 80px;
  }

  .last-row img {
    width: 110px;
  }

  .logo-row .dell-emc {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .recognize .content {
    width: 80%;
    margin-bottom: 20px;
  }
  .content h2 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .logo-container {
    gap: 10px;
    padding: 0 15px;
  }

  .logo-row {
    gap: 60px;
  }

  .logo-row img {
    width: 100px;
  }

  .last-row img {
    width: 140px;
  }

  .logo-row .dell-emc {
    width: 150px;
  }

  .logo-row .fortinet {
    width: 160px;
  }
}
</style>
