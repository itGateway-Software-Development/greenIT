<template>
  <div class="partners">
    <div class="header">
      <h5>PARTNERS</h5>
      <h2>Drive business forward by partnering with us</h2>
      <h6 style="letter-spacing: 1px" class="text-center">
        We're so proud to our partners believe in us to deliver the best service
        and solutions.
      </h6>
    </div>

    <div class="img">
      <img :src="require('@/assets/images/drive-business.jpg')" alt="" />
      <p>
        We believe technology should enable organizations to be the absolute
        best at what they do. This commitment to our customer success is why
        Green IT is recognized as the premier strategic managed service and
        solutions across Yangon and Singapore.
      </p>
    </div>
  </div>

  <PartnerCard :items="infras" :title="'Infrastructure'"></PartnerCard>
  <PartnerCard :items="network" :title="'Network'"></PartnerCard>
  <PartnerCard :items="protection" :title="'Protection'"></PartnerCard>
  <PartnerCard :items="collaboration" :title="'Collaboration'"></PartnerCard>
  <PartnerSoftware></PartnerSoftware>

  <div class="footer-text">
    More than 1K projects experiences and trusted by local and foreign
    companies.
  </div>

  <div class="partner-footer">
    <h3>Ready to try Green IT?</h3>
    <h2>Start contacting with us for your goals and achievements.</h2>
    <router-link to="/about-us/contact" style="letter-spacing: 2px"
      >CONTACT US</router-link
    >
  </div>
</template>

<script>
import PartnerSoftware from "./PartnerSoftware";
import PartnerCard from "./PartnerCard";
export default {
  components: {
    PartnerSoftware,
    PartnerCard,
  },
  setup() {
    let infras = [
      require("@/assets/images/partners/infra/dell.png"),
      require("@/assets/images/partners/infra/VMWare.png"),
      require("@/assets/images/partners/infra/Cisco.png"),
      require("@/assets/images/partners/infra/Microsoft.png"),
      require("@/assets/images/partners/infra/HPE.png"),
      require("@/assets/images/partners/infra/IBM.png"),
      require("@/assets/images/partners/infra/Lenovo.png"),
    ];

    let network = [
      require("@/assets/images/partners/network/Cisco.png"),
      require("@/assets/images/partners/network/aruba.png"),
      require("@/assets/images/partners/network/Juniper.png"),
      require("@/assets/images/partners/network/ruckus.png"),
      require("@/assets/images/partners/network/Mikrotik.png"),
      require("@/assets/images/partners/network/Ubiquiti.png"),
      require("@/assets/images/partners/network/Ruijie.png"),
    ];

    let protection = [
      require("@/assets/images/partners/protection/Cisco.png"),
      require("@/assets/images/partners/protection/Fortinet.png"),
      require("@/assets/images/partners/protection/Checkpoint.png"),
      require("@/assets/images/partners/protection/Watchguard.png"),
      require("@/assets/images/partners/protection/Sophos.png"),
      require("@/assets/images/partners/protection/Trendmicro.png"),
      require("@/assets/images/partners/protection/Symantec.png"),
    ];

    let collaboration = [
      require("@/assets/images/partners/collaboration/Aver.png"),
      require("@/assets/images/partners/collaboration/Cisco.png"),
      require("@/assets/images/partners/collaboration/Dahua.png"),
      require("@/assets/images/partners/collaboration/Logitech.png"),
      require("@/assets/images/partners/collaboration/Poly.png"),
      require("@/assets/images/partners/collaboration/Yealink.png"),
    ];

    return { infras, network, protection, collaboration };
  },
};
</script>

<style scoped>
.partners {
  margin-top: 70px;
  padding: 30px 20%;
}

.partners .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.partners .header h5 {
  background: #7fb773;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}

.partners .header h2 {
  font-size: 40px;
  margin: 10px auto;
  text-align: center;
  padding: 0 20%;
  line-height: 45px;
}

.partners .header h6 {
  font-size: 19px;
  text-align: center;
}

.partners .img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.partners img {
  width: 90%;
}

.partners .img p {
  padding: 20px 9%;
  font-size: 22px;
  text-indent: 50px;
}

.footer-text {
  text-align: center;
  margin: 20px auto 50px;
  font-size: 20px;
}

.partner-footer {
  background: #f7f6dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px;
}

.partner-footer h3 {
  font-size: 20px;
  text-align: center;
}

.partner-footer h2 {
  font-size: 30px;
  text-align: center;
}

.partner-footer a {
  background: #287e3d;
  padding: 10px 20px;
  color: #fff;
  border-radius: 7px;
  margin-top: 20px;
  font-weight: bold;
}

@media (max-width: 1650px) {
  .partners {
    padding: 30px 15%;
  }

  .partners .header h2 {
    font-size: 37px;
    padding: 0 23%;
    line-height: 45px;
  }
}

@media (max-width: 1200px) {
  .partners {
    padding: 30px 10%;
  }

  .partners .header h2 {
    font-size: 35px;
    line-height: 40px;
  }

  .partners .img p {
    padding: 20px 8%;
    font-size: 20px;
  }
}

@media (max-width: 990px) {
  .partner-footer h3 {
    font-size: 18px;
  }

  .partner-footer h2 {
    font-size: 25px;
  }

  .partner-footer a {
    padding: 7px 15px;
  }
}

@media (max-width: 900px) {
  .partners {
    padding: 30px 5%;
  }

  .partners .header h5 {
    font-size: 12px;
  }

  .partners .header h2 {
    font-size: 32px;
    line-height: 40px;
  }

  .partners .img p {
    padding: 20px 6%;
  }
}

@media (max-width: 790px) {
  .partner-footer h3 {
    font-size: 16px;
  }

  .partner-footer h2 {
    font-size: 20px;
  }

  .partner-footer a {
    padding: 7px 15px;
    font-size: 13px;
  }
}

@media (max-width: 720px) {
  .partners {
    padding: 30px 5%;
  }

  .partners .header h2 {
    font-size: 28px;
    line-height: 38px;
  }

  .partners .header h6 {
    font-size: 15px;
  }

  .partners .img p {
    padding: 20px 6%;
  }

  .footer-text {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .partners {
    padding: 30px 3%;
  }

  .partners .header h2 {
    font-size: 24px;
    line-height: 30px;
  }

  .partners .header h6 {
    font-size: 14px;
    padding: 0 12%;
  }

  .partners .img p {
    padding: 20px 6%;
  }
}

@media (max-width: 525px) {
  .partners .header h2 {
    font-size: 20px;
    line-height: 30px;
    padding: 0 10%;
  }

  .partners .header h6 {
    font-size: 13px;
  }

  .partners .img p {
    padding: 20px 6%;
  }

  .partner-footer h3 {
    font-size: 16px;
  }

  .partner-footer h2 {
    font-size: 18px;
  }

  .partner-footer a {
    padding: 5px 10px;
    font-size: 14px;
  }
}
</style>
