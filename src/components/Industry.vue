<template>
  <div class="industry">
    <h2>
      Solving IT challenges in every <br />
      industry, every day
    </h2>
    <div class="content">
      <div class="item pointer">
        <img :src="require('@/assets/images/solving_it/industry.jpg')" alt="" />
        <h3>Industry & Manufacturing</h3>
      </div>
      <div class="item pointer">
        <img
          :src="require('@/assets/images/solving_it/transportation.jpg')"
          alt=""
        />
        <h3>Transportation</h3>
      </div>
      <div class="item pointer">
        <img
          :src="require('@/assets/images/solving_it/healthcare.jpg')"
          alt=""
        />
        <h3>Healthcare & Education</h3>
      </div>
      <div class="item pointer">
        <img :src="require('@/assets/images/solving_it/bank.jpg')" alt="" />
        <h3>Bank & Insurance</h3>
      </div>
      <div class="item pointer">
        <img
          :src="require('@/assets/images/solving_it/consultant.jpg')"
          alt=""
        />
        <h3>Consulting Providers</h3>
      </div>
      <div class="item pointer">
        <img
          :src="require('@/assets/images/solving_it/non-profit.jpg')"
          alt=""
        />
        <h3>Non-Profit</h3>
      </div>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.industry {
  padding: 30px 25%;
  margin-bottom: 40px;
}

.divider {
  margin: 0 15%;
  height: 3px;
  background: #aaa8a8;
}

.industry h2 {
  margin: 80px 0 30px;
  font-size: 44px;
  font-weight: bold;
  color: #0a0d31;
  letter-spacing: 1px;
}

.industry .content {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 10px 15px;
}

.industry .content .item {
  display: inline-block;
  background: #eee;
  position: relative;
  padding: 12px 20px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  height: 53px;
  margin-right: 25px;
}

.industry .content .item img {
  width: 53px;
  height: 53px;
  border-radius: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: -20px;
}

.industry .content .item h3 {
  margin-left: 20px;
  transition: 0.4s;
  font-size: 20px;
}

.industry .content .item:hover h3 {
  color: #287e3d;
}

@media (max-width: 1630px) {
  .industry {
    padding: 30px 17%;
    margin-bottom: 40px;
  }

  .divider {
    margin: 0 9%;
    height: 3px;
    background: #aaa8a8;
  }

  .industry h2 {
    margin: 70px 0 30px;
    font-size: 44px;
  }

  .industry .content {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 15px;
  }

  .industry .content .item {
    display: inline-block;
    background: #eee;
    position: relative;
    padding: 12px 20px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height: 48px;
    margin-right: 25px;
  }

  .industry .content .item img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: -20px;
  }

  .industry .content .item h3 {
    margin-left: 20px;
    transition: 0.4s;
    font-size: 18px;
  }
}

@media (max-width: 1200px) {
  .industry {
    padding: 20px 12%;
    margin-bottom: 40px;
  }

  .divider {
    margin: 0 9%;
    height: 2px;
    background: #aaa8a8;
  }

  .industry h2 {
    margin: 60px 0 30px;
    font-size: 40px;
  }

  .industry .content {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 15px;
  }

  .industry .content .item {
    display: inline-block;
    background: #eee;
    position: relative;
    padding: 12px 20px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height: 48px;
    margin-right: 25px;
  }

  .industry .content .item img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: -20px;
  }

  .industry .content .item h3 {
    margin-left: 20px;
    transition: 0.4s;
    font-size: 17px;
  }
}

@media (max-width: 1080px) {
  .industry {
    padding: 20px 13%;
    margin-bottom: 40px;
  }

  .divider {
    margin: 0 3%;
    height: 2px;
    background: #aaa8a8;
  }

  .industry h2 {
    margin: 50px 0 30px;
    font-size: 35px;
  }

  .industry .content {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 15px;
  }

  .industry .content .item {
    display: inline-block;
    background: #eee;
    position: relative;
    padding: 12px 20px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height: 43px;
    margin-right: 25px;
  }

  .industry .content .item img {
    width: 43px;
    height: 43px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: -20px;
  }

  .industry .content .item h3 {
    margin-left: 20px;
    transition: 0.4s;
  }
}

@media (max-width: 960px) {
  .industry {
    padding: 20px 5%;
    margin-bottom: 40px;
  }

  .divider {
    margin: 0 3%;
    height: 2px;
    background: #aaa8a8;
  }

  .industry h2 {
    margin: 50px 0 30px;
    font-size: 30px;
  }

  .industry .content {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 25px;
  }
}

@media (max-width: 820px) {
  .industry {
    padding: 20px 9%;
    margin-bottom: 40px;
  }

  .divider {
    margin: 0 5%;
    height: 2px;
    background: #aaa8a8;
  }

  .industry h2 {
    margin: 50px 0 30px;
    font-size: 30px;
  }
}
</style>
