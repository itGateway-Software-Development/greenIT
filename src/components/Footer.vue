<template>
  <div class="footer-section">
    <div class="footer">
      <div class="address">
        <div class="divider address-divider"></div>
        <span
          >No-1, 3rd-4th Floor, Corner of U Lu Maung Street, and Lower Kyi Myint
          Daing Road, Kyi Myin Daing Tsp, Yangon, Myanmar</span
        >
      </div>
      <div class="contact">
        <div class="divider"></div>
        <div class="info">
          <div class="phone">T: +959 896 237 358, +959 896 237 359</div>
          <div class="email">E: info@greenitmm.com</div>
        </div>
      </div>
      <div class="social">
        <div class="divider"></div>
        <div class="social-info">
          <a href="https://www.youtube.com/@Green-IT" target="_blank"
            ><i style="color: #cd201f" class="fa-brands fa-youtube"></i
          ></a>
          <a href="https://www.facebook.com/GreenIT.MM" target="_blank"
            ><i style="color: #3b5998" class="fa-brands fa-facebook"></i
          ></a>
          <a href="https://www.instagram.com/green_it_co_ltd" target="_blank"
            ><i style="color: #e4405f" class="fa-brands fa-instagram"></i
          ></a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fgreenitcoltd"
            target="_blank"
            ><i style="color: #0072b1" class="fa-brands fa-twitter"></i
          ></a>
          <a
            href="https://www.linkedin.com/company/greenitcoltd/"
            target="_blank"
            ><i style="color: #0072b1" class="fa-brands fa-linkedin"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="policy">
      <div>&copy; 2023 Green-IT</div>
      <div>Terms & Conditions</div>
      <div>Privacy Policy</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-section {
  padding: 50px 15% 20px;
  background: #f5f5f5;
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.address,
.contact,
.social {
  width: 31%;
}

.address span {
  font-size: 19px;
}

.divider {
  width: 5px;
  height: 60px;
  background: #287e3d;
}

.address-divider {
  width: 10px !important;
  height: 60px;
  background: #287e3d;
  display: none;
}

.address-divider span {
  font-size: 20px;
}

.contact,
.social {
  display: flex;
  gap: 50px;
}

.info div {
  font-size: 19px;
}

.social-info i {
  font-size: 35px;
  margin: 5px 5px;
}

.policy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
}

.policy div {
  font-weight: 500;
  font-size: 19px;
}

@media (max-width: 1630px) {
  .footer-section {
    padding: 50px 9% 20px;
  }
}

@media (max-width: 1200px) {
  .footer-section {
    padding: 50px 3% 20px;
  }

  .divider {
    width: 5px;
    height: 60px;
  }

  .contact,
  .social {
    display: flex;
    gap: 30px;
  }
}

@media (max-width: 1080px) {
  .footer-section {
    padding: 50px 1% 20px;
  }

  .divider {
    width: 5px;
    height: 60px;
  }

  .contact,
  .social {
    display: flex;
    gap: 20px;
  }

  .address span,
  .info div {
    font-size: 18px;
  }

  .social-info i {
    font-size: 30px;
    margin: 5px 5px;
  }

  .policy div {
    font-size: 18px;
  }
}

@media (max-width: 760px) {
  .footer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .address,
  .contact,
  .social {
    width: 45%;
    margin-bottom: 30px;
  }

  .social .divider {
    display: none;
  }

  .policy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
  }
}

@media (max-width: 530px) {
  .footer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .address,
  .contact,
  .social {
    width: 80%;
    margin-bottom: 30px;
  }

  .address-divider {
    display: inline-block;
  }

  .address {
    display: flex;
    gap: 15px;
  }

  .social .divider {
    display: inline-block;
  }

  .policy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
  }
}

@media (max-width: 440px) {
  .policy div {
    font-size: 12px;
  }
}
</style>
