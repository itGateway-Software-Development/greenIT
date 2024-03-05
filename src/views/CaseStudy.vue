<template>
  <div class="case-study">
    <div class="header">
      <span>CASE STUDIES</span>
      <h1>Featured case studies</h1>
    </div>
    <div class="content">
      <h3>Success Stories</h3>
      <div class="card-wrapper">
        <div class="story-card">
          <img
            :src="require('@/assets/images/case-study/Cookie-media.png')"
            alt=""
          />
          <div class="divider"></div>
          <div class="info">
            <h2>Cookie Media</h2>
            <p>
              Fortigate SD-WAN load balance and port forward to Ubuntu server
              setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>Education Distance University</h3>
            <h3>MANDALAY</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>Education Distance University, MDY</h2>
            <p>
              ASA wan failover and Ubiquiti Unifi wireless access point setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <img
            :src="require('@/assets/images/case-study/Genesis.jpg')"
            alt=""
          />
          <div class="divider"></div>
          <div class="info">
            <h2>IGensis</h2>
            <p>
              Fortigate ATP, URL Content Filtering, and User ID Filtering setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <img
            :src="require('@/assets/images/case-study/info-myanmar.jpg')"
            alt=""
          />
          <div class="divider"></div>
          <div class="info">
            <h2>Info Myanmar College</h2>
            <p>
              Fortigate SD-WAN Load balance, Yeastar GSM Gateway, 3CX PBX
              Collaboration, Cisco CT2504 WLC, AIR-AP1815i-H-K9 configuration
              setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>Myanmar Media Linkage</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>Myanmar Media Linkage</h2>
            <p>
              Fortigate HA, Cisco Switch HA, and Port forwarding system setup
            </p>
          </div>
        </div>

        <div class="story-card">
          <img
            :src="require('@/assets/images/case-study/Shinhan.jpg')"
            alt=""
          />
          <div class="divider"></div>
          <div class="info">
            <h2>Myanmar Shinhan Microfinance</h2>
            <p>2 x ASA HA failover Setup | 2 x ASA HA failover Setup</p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>Nay Pyi Taw</h3>
            <h3>(ESP Electric)</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>Nay Pyi Taw (ESP Electric)</h2>
            <p>
              Fortigate port forwarding from digital electric meter to bill
              scanner software and RAS VPN IPsec setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>University of Computer Studies</h3>
            <h3>MANDALAY</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>University of Computer Studies, MDY</h2>
            <p>
              Associated with Green IT Co.,Ltd <br />
              Mikrotik per connection classifier (PCC) mangle rule wan load
              balance, hotspot portal, radius, user manager with user control
              profile setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>Valentis</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>Valentis</h2>
            <p>
              Associated with Green IT Co.,Ltd<br />
              IP star satellite uplink Ubiquiti outdoor point to point and
              Mikrotik NAT, Hotspot, DHCP, User manager and distribute internet
              rocket m2 with Omni setup.
            </p>
          </div>
        </div>

        <div class="story-card">
          <div class="logo">
            <h3>UK Bakery Myanmar</h3>
          </div>
          <div class="divider"></div>
          <div class="info">
            <h2>UK Bakery Myanmar</h2>
            <p>
              Associated with Green IT Co.,Ltd<br />
              Relocation data center & new structure Network cabeling migration
              cable structure
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.case-study .header {
  text-align: center;
  padding: 40px 0px 30px;
}

.case-study .header span {
  background: #7fb773;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
}

.case-study .header h1 {
  font-size: 45px;
  margin-top: 10px;
}

.case-study .content {
  padding: 20px 15%;
  background: #f7f6dc;
}

.case-study .content h3 {
  margin: 10px 15px 30px;
}

.case-study .card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
.case-study .story-card {
  background: #fff;
  width: 32%;
}

.case-study .story-card {
  border: 2px solid #eee;
  padding: 20px 10px;
  border-radius: 5px;
}

.case-study .story-card img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  border-radius: 5px;
}

.case-study .story-card .logo {
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.case-study .story-card .logo h3 {
  font-size: 26px;
  font-weight: bold;
  color: #287e3d;
  text-align: center;
  margin-bottom: 2px;
}

.case-study .story-card .divider {
  width: 98%;
  height: 3px;
  background: #7fb773;
  margin: 0 auto;
}

.case-study .story-card .info {
  padding: 20px 5px;
}

.case-study .story-card .info h2 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 1px;
}

.case-study .story-card .info p {
  font-size: 21px;
  text-align: justify;
}

@media (max-width: 1650px) {
  .case-study .content {
    padding: 20px 9%;
  }

  .case-study .story-card .logo h3 {
    font-size: 24px;
  }

  .case-study .story-card .info h2 {
    font-size: 20px;
  }
}

@media (max-width: 1575px) {
  .case-study .story-card .logo h3 {
    font-size: 23px;
  }
}

@media (max-width: 1300px) {
  .case-study .content {
    padding: 20px 7%;
  }
  .case-study .header span {
    font-size: 14px;
  }

  .case-study .header h1 {
    font-size: 38px;
  }

  .case-study .story-card .logo h3 {
    font-size: 19px;
  }
}

@media (max-width: 1200px) {
  .case-study .content {
    padding: 20px 3%;
  }

  .case-study .story-card .info p {
    font-size: 18px;
  }

  .case-study .story-card .info h3 {
    font-size: 18px;
  }

  .case-study .story-card .logo h3 {
    font-size: 21px;
  }
}

@media (max-width: 1080px) {
  .case-study .content {
    padding: 20px 1%;
  }
}

@media (max-width: 990px) {
  .case-study .story-card {
    width: 48%;
  }

  .case-study .story-card .logo h3 {
    font-size: 23px;
  }

  .case-study .story-card .info p {
    text-align: justify;
  }
}

@media (max-width: 650px) {
  .case-study .header span {
    font-size: 12px;
  }
  .case-study .header h1 {
    font-size: 34px;
  }

  .case-study .content h3 {
    margin: 10px 80px 30px;
  }
  .case-study .story-card {
    width: 75%;
  }
}

@media (max-width: 550px) {
  .case-study .content h3 {
    margin: 10px 50px 30px;
  }
  .case-study .story-card {
    width: 85%;
  }
}

@media (max-width: 550px) {
  .case-study .header span {
    font-size: 11px;
  }
  .case-study .header h1 {
    font-size: 30px;
  }

  .case-study .content h3 {
    margin: 10px 20px 30px;
  }
  .case-study .story-card {
    width: 95%;
  }
}
</style>
