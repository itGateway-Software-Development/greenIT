<template>
  <div class="products software">
    <div class="product-section">
      <div class="product-item">
        <h4>Endpoint Security</h4>
        <div class="d-flex">
          <ul>
            <li>Fortinet</li>
            <li>Symantec</li>
            <li>Trend Micro</li>
            <li>SOPHOS</li>
            <li>Kaspersky</li>
            <li>Bitdefender</li>
            <li>McAfee</li>
            <li>Acronis</li>
            <li>Fireeye</li>
          </ul>
        </div>
      </div>
      <div class="product-item right">
        <h4>Application Software</h4>
        <div class="d-flex">
          <ul>
            <li>Microsoft</li>
            <li>Adobe</li>
            <li>Red Hat Enterprise Linux</li>
            <li>Autodesk</li>
            <li>Google Workspace</li>
            <li>Dropbox</li>
            <li>Solarwinds</li>
            <li>Veeam</li>
            <li>ZOOM</li>
            <li>Cloudflare</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="product-section">
      <div class="product-item">
        <h4>Virtualization</h4>
        <ul>
          <li>VMware</li>
          <li>Red Hat</li>
          <li>Nutanix</li>
          <li>Microsoft</li>
        </ul>
      </div>
      <div class="product-item right">
        <h4>Operation Systems and Cloud</h4>
        <ul>
          <li>Windows</li>
          <li>Windows Server</li>
          <li>Red Hat Enterprise Linux</li>
          <li>Azure</li>
          <li>AWS</li>
          <li>Google Cloud</li>
          <li>Alibaba Cloud</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="products-vendor software">
    <div class="logo">
      <img :src="require('@/assets/images/products/Software.png')" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.products.software {
  padding: 30px 3% 10px;
  display: block !important;
}

.products.software .product-section {
  display: flex;
  justify-content: space-around;
  gap: 50px;
}

.products.software .product-item {
  width: 45%;
  margin-bottom: 20px;
}

.products.software .product-item h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.products.products.software .product-item ul {
  margin-left: 25px;
}

.products.software .product-item ul li {
  font-size: 18px;
  margin-bottom: 3px;
}

@media (max-width: 1260px) {
  .products.software .product-section {
    gap: 10px;
  }

  .products.software .product-item {
    width: 43%;
    margin-bottom: 20px;
  }

  .products.products.software .product-item.right {
    width: 50%;
    margin-left: -20px;
  }
}

@media (max-width: 1080px) {
  .products.software .product-item h4 {
    font-size: 18px;
  }

  .products.software .product-item ul li {
    font-size: 16px;
  }
}

@media (max-width: 910px) {
  .products.software .product-item h4 {
    font-size: 17px;
  }

  .products.software .product-item ul li {
    font-size: 15px;
  }
}

@media (max-width: 815px) {
  .products.products.software .product-item.right {
    width: 55%;
    margin-left: -25px;
  }
}
</style>
