<template>
  <div class="rating">
    <div class="star-rate rating-content">
      <div class="point">
        <h2>4.5</h2>
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
      </div>
      <h3>Stars Rated</h3>
    </div>

    <div class="rating-content year-container year-div">
      <div class="divider"></div>
      <div class="">
        <div class="year">
          <h2>8</h2>
          <div>Years Plus</div>
        </div>
        <h3>Proven Track Record</h3>
      </div>
    </div>

    <div class="rating-content year-container customer-div">
      <div class="divider"></div>
      <div class="">
        <div class="year">
          <h2>99</h2>
          <div>%</div>
        </div>
        <h3>Customer Satisfaction</h3>
      </div>
    </div>

    <div class="rating-content year-container">
      <div class="divider"></div>
      <div class="">
        <div class="year">
          <h2>1K</h2>
          <div>&nbsp;Projects</div>
        </div>
        <h3>We have completed</h3>
      </div>
    </div>

    <div class="rating-content year-container">
      <div class="divider"></div>
      <div class="">
        <div class="year">
          <h2>5</h2>
          <div>Mins</div>
        </div>
        <h3>Average Response Time</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let rating = ref(4.5);

    return { rating };
  },
};
</script>

<style scoped>
.rating {
  padding: 60px 15%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rating .rating-content {
  width: 20%;
}

.star-rate .point {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.star-rate .point h2,
.year h2 {
  font-size: 48px;
  font-weight: bolder;
  letter-spacing: 8px;
}

.star-rate .point div i {
  color: #287e3d;
  margin-left: 10px;
}

.year-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.year-container .divider {
  width: 5px;
  height: 40px;
  background: #ffc090;
}

.star-rate h3,
.rating-content h3 {
  font-size: 22px;
  color: #adadaa;
  margin-top: -10px;
}

.year-container .year {
  display: flex;
  align-items: center;
}

.year-container .year div {
  font-size: 22px;
  font-weight: bolder;
  margin-top: 10px;
}

@media (max-width: 1630px) {
  .rating {
    padding: 30px 9%;
    margin-top: 20px;
  }

  .rating .rating-content {
    width: 20%;
  }

  .star-rate .point {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .star-rate .point h2,
  .year h2 {
    font-size: 40px;
    letter-spacing: 3px;
  }

  .star-rate .point div i {
    color: #287e3d;
    margin-left: 5px;
  }

  .year-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .year-container .divider {
    width: 5px;
    height: 40px;
    background: #ffc090;
  }

  .star-rate h3,
  .rating-content h3 {
    font-size: 19px;
    color: #adadaa;
    margin-top: -10px;
  }

  .year-container .year {
    display: flex;
    align-items: center;
  }

  .year-container .year div {
    font-size: 19px;
    font-weight: bolder;
    margin-top: 10px;
  }
}

@media (max-width: 1200px) {
  .rating {
    padding: 30px 3%;
    margin-top: 20px;
  }
}

@media (max-width: 1080px) {
  .rating {
    padding: 30px 3%;
    margin-top: 20px;
  }

  .rating .rating-content {
    width: 20%;
  }

  .star-rate .point {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .star-rate .point h2,
  .year h2 {
    font-size: 35px;
    letter-spacing: 1px;
  }

  .star-rate .point div i {
    color: #287e3d;
    margin-left: 5px;
  }

  .year-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .year-container .divider {
    width: 5px;
    height: 40px;
    background: #ffc090;
  }
  .star-rate h3,
  .rating-content h3 {
    font-size: 16px;
    color: #adadaa;
    margin-top: -10px;
  }
}

@media (max-width: 950px) {
  .rating {
    padding: 30px 1%;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .star-rate {
    width: 100% !important;
    margin: 0 0 15px 20px;
  }

  .star-rate .point h2,
  .year h2 {
    font-size: 32px;
    letter-spacing: 1px;
  }
}

@media (max-width: 700px) {
  .rating {
    padding: 30px 1%;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .rating .rating-content {
    width: 45%;
    margin-bottom: 15px;
    justify-content: start !important;
    margin-left: 15px;
    gap: 15px;
  }
}

@media (max-width: 390px) {
  .rating {
    padding: 30px 1%;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .rating .rating-content {
    width: 45%;
    margin-bottom: 15px;
    justify-content: start !important;
    margin-left: 15px;
    gap: 15px;
  }

  .star-rate .point h2,
  .year h2 {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .star-rate .point div i {
    color: #287e3d;
    margin-left: 5px;
  }

  .year-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .year-container .divider {
    width: 5px;
    height: 40px;
    background: #ffc090;
  }
  .star-rate h3,
  .rating-content h3 {
    font-size: 13px;
    color: #adadaa;
    margin-top: -10px;
  }
}
</style>
