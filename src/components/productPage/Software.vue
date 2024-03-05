<template>
  <div class="products">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Software</h2>
    </div>
    <p class="head-text pb-0 mb-0">
      software is a collection of instructions, data, or computer programs that
      are used to run machines and carry out particular activities. It is the
      opposite of hardware, which refers to a computer’s external components.
    </p>
    <p class="head-text pb-0 mb-0">
      System software: This is the behind-the-scenes crew, managing the
      computer's core functions and providing a platform for other software to
      run on. Think of it as the operating system (like Windows or Other OS) and
      drivers for your hardware.
    </p>
    <p class="head-text">
      Application software: This is the star of the show, the apps and programs
      we directly interact with. From word processors and web browsers to games
      and photo editing tools, all fall under this category.
    </p>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/software/banner.png')"
      alt=""
    />

    <div class="row products-list">
      <div class="col-12 col-lg-7">
        <div class="products-list m-5 m-sm-0">
          <div class="row">
            <div
              class="col-12 col-sm-6 product"
              v-for="(item, i) in products"
              :key="i"
            >
              <div class="d-flex flex-column gap-1">
                <div>
                  <img
                    :src="require('@/assets/images/products/software/icon.png')"
                    alt=""
                  />
                  <span class="ms-2">{{ item.name }}</span>
                </div>
                <div class="ps-5">
                  <ul>
                    <li v-for="(software, i) in item.items" :key="i">
                      {{ software.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="row mb-5 justify-content-center">
          <h4 class="my-4 text-center">Application Software</h4>
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 3" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/software/logo/app-software/${i}.png`)
                "
                alt=""
                style="width: 80%"
              />
            </div>
          </div>
        </div>

        <div class="row mb-5 justify-content-center">
          <h4 class="my-4 text-center">Endpoint Security</h4>
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 9" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/software/logo/endpoint/${i}.png`)
                "
                alt=""
                :class="{ 'w-50': i == 1 }"
                style="width: 80%"
              />
            </div>
          </div>
        </div>

        <div class="row mb-5 justify-content-center">
          <h4 class="my-4 text-center">Operation System</h4>
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 3" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/software/logo/os/${i}.png`)
                "
                alt=""
                style="width: 80%"
              />
            </div>
          </div>
        </div>

        <div class="row mb-5 justify-content-center">
          <h4 class="my-4 text-center">Cloud Service</h4>
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 4" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/software/logo/cloud/${i}.png`)
                "
                alt=""
                style="width: 80%"
              />
            </div>
          </div>
        </div>

        <div class="row mb-5 justify-content-center">
          <h4 class="my-4 text-center">Virtualization</h4>
          <div class="col-6 col-sm-3 col-lg-4" v-for="i in 4" :key="i">
            <div
              class="product-logo d-flex justify-content-center align-items-center shadow mb-5"
              style="height: 100px"
            >
              <img
                :src="
                  require(`@/assets/images/products/software/logo/virtualization/${i}.png`)
                "
                alt=""
                style="width: 80%"
              />
            </div>
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
    const products = [
      {
        name: "Endpoint Security",
        items: [
          {
            name: "Fortinet",
          },
          {
            name: "Symantec",
          },
          {
            name: "Trend Micro",
          },
          {
            name: "SOPHOS",
          },
          {
            name: "Kaspersky",
          },
          {
            name: "Bitdefender",
          },
          {
            name: "McAfee",
          },
          {
            name: "Acronis",
          },
          {
            name: "Fireeye",
          },
        ],
      },

      {
        name: "Application Software",
        items: [
          {
            name: "Microsoft",
          },
          {
            name: "Adobe",
          },
          {
            name: "Red Hat Enterprise Linux",
          },
          {
            name: "Autodesk",
          },
          {
            name: "Google Workspace",
          },
          {
            name: "Dropbox",
          },
          {
            name: "Solarwinds",
          },
          {
            name: "Veeam",
          },
          {
            name: "ZOOM",
          },
          {
            name: "Cloudflare",
          },
        ],
      },
      {
        name: "Operation Systems and Cloud",
        items: [
          {
            name: "Windows",
          },
          {
            name: "Windows Server",
          },
          {
            name: "Red Hat Enterprise Linux",
          },
          {
            name: "Azure",
          },
          {
            name: "AWS",
          },
          {
            name: "Google Cloud",
          },
          {
            name: "Alibaba Cloud",
          },
        ],
      },

      {
        name: "Virtualization",
        items: [
          {
            name: "VMware",
          },
          {
            name: "Red Hat",
          },
          {
            name: "Nutanix",
          },
          {
            name: "Microsoft",
          },
        ],
      },
    ];

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.products span {
  font-size: 24px;
}
ul li {
  font-size: 18px;
  margin-bottom: 5px;
}

.products-list .product {
  align-items: start;
}

@media (max-width: 1200px) {
  .products-list .product span {
    font-size: 20px;
  }
}
</style>
