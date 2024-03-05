<template>
  <div class="partner-software">
    <h2>Software</h2>
    <div class="software-container">
      <div class="sub-section">
        <span>Operating Systems</span>
        <div class="items">
          <div class="item" v-for="(item, i) in os" :key="i">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>

      <div class="sub-section">
        <span>Application Software</span>
        <div class="items">
          <div class="item" v-for="(item, i) in appsoftware" :key="i">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>

      <div class="sub-section">
        <span>Virtualization</span>
        <div class="items">
          <div class="item" v-for="(item, i) in virtualization" :key="i">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <div class="sub-section">
        <span>Cloud Services</span>
        <div class="items">
          <div class="item" v-for="(item, i) in cloud" :key="i">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>

      <div class="sub-section">
        <span>Endpoint Security</span>
        <div class="items">
          <div
            class="item"
            v-for="(item, i) in endpoint"
            :key="i"
            :class="{ acron: item == '/img/Acronis.5e03e7ce.png' }"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let os = [
      require("@/assets/images/partners/software/os/windows.png"),
      require("@/assets/images/partners/software/os/ms_server.png"),
      require("@/assets/images/partners/software/os/red-hat.png"),
    ];

    let appsoftware = [
      require("@/assets/images/partners/software/appsoftware/Adobe.png"),
      require("@/assets/images/partners/software/appsoftware/autodesk.png"),
      require("@/assets/images/partners/software/appsoftware/cloudflare.png"),
      require("@/assets/images/partners/software/appsoftware/dropbox.png"),
      require("@/assets/images/partners/software/appsoftware/Microsoft.png"),
      require("@/assets/images/partners/software/appsoftware/red-hat.png"),
      require("@/assets/images/partners/software/appsoftware/Solarwind.png"),
      require("@/assets/images/partners/software/appsoftware/veeam.png"),
      require("@/assets/images/partners/software/appsoftware/workspace.png"),
      require("@/assets/images/partners/software/appsoftware/Zoom.png"),
    ];

    let virtualization = [
      require("@/assets/images/partners/software/virtualization/Microsoft.png"),
      require("@/assets/images/partners/software/virtualization/Nutanix.png"),
      require("@/assets/images/partners/software/virtualization/red-hat.png"),
      require("@/assets/images/partners/software/virtualization/vm.png"),
    ];

    let cloud = [
      require("@/assets/images/partners/software/cloud/Alibaba.png"),
      require("@/assets/images/partners/software/cloud/aws.png"),
      require("@/assets/images/partners/software/cloud/azure.png"),
      require("@/assets/images/partners/software/cloud/gc.png"),
    ];

    let endpoint = [
      require("@/assets/images/partners/software/endpoint/Acronis.png"),
      require("@/assets/images/partners/software/endpoint/Bitfinder.png"),
      require("@/assets/images/partners/software/endpoint/fire-eye.png"),
      require("@/assets/images/partners/software/endpoint/ftn.png"),
      require("@/assets/images/partners/software/endpoint/kaspersky.png"),
      require("@/assets/images/partners/software/endpoint/Mcfare.png"),
      require("@/assets/images/partners/software/endpoint/Sophos.png"),
      require("@/assets/images/partners/software/endpoint/Symantec.png"),
      require("@/assets/images/partners/software/endpoint/Trendmicro.png"),
    ];

    return { os, appsoftware, virtualization, cloud, endpoint };
  },
};
</script>

<style scoped>
.partner-software {
  margin: 10px auto 50px;
}
.partner-software h2 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 8px;
}

.partner-software .software-container {
  background: #f7f6dc;
  padding-bottom: 20px;
}

.partner-software .sub-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.partner-software .sub-section span {
  margin: 10px auto 20px;
  font-size: 20px;
}

.partner-software .sub-section .items {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 15px 26%;
}

.partner-software .item {
  width: 140px;
  height: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  box-shadow: 2px 2px 5px #b3b1b1;
  overflow: hidden;
}

.partner-software .item img {
  width: 80%;
  object-fit: contain;
}

.partner-software .item.acron {
  background: #00204d;
}

@media (max-width: 1650px) {
  .partner-software .sub-section .items {
    padding: 15px 23%;
  }
}

@media (max-width: 1410px) {
  .partner-software .sub-section .items {
    padding: 15px 20%;
  }
}

@media (max-width: 1270px) {
  .partner-software .sub-section .items {
    padding: 15px 15%;
  }
}

@media (max-width: 1070px) {
  .partner-software .sub-section .items {
    padding: 15px 13%;
  }

  .partner-software .item {
    width: 120px;
    height: 100px;
  }
}

@media (max-width: 990px) {
  .partner-software .sub-section .items {
    padding: 15px 17%;
  }
  .partner-software h2 {
    font-size: 26px;
  }
  .partner-software .item {
    width: 100px;
    height: 90px;
  }
}

@media (max-width: 850px) {
  .partner-software .item {
    width: 90px;
    height: 80px;
  }
}

@media (max-width: 800px) {
  .partner-software .item {
    width: 90px;
    height: 80px;
  }
}

@media (max-width: 775px) {
  .partner-software .sub-section .items {
    padding: 15px 15%;
  }
}

@media (max-width: 735px) {
  .partner-software .sub-section .items {
    padding: 15px 10%;
  }
}

@media (max-width: 640px) {
  .partner-software .item {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 560px) {
  .partner-software .sub-section .items {
    padding: 15px 5%;
  }
}

@media (max-width: 515px) {
  .partner-software .sub-section .items {
    padding: 15px 3%;
  }
}
</style>
