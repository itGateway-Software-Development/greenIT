<template>
  <div class="career">
    <div class="header">
      <h5>CAREERS</h5>
      <h2>Start your journey</h2>
      <h6>
        Grow your career as we grow. Join the team that's changing IT Services
      </h6>
    </div>
    <div class="img">
      <img :src="require('@/assets/images/journey.jpg')" alt="" />
      <p>
        “We put our people first.” It's something a lot of companies say, but
        not a lot of companies do. Here at Tecnologia, it's our most important
        core value. We believe when we place a high value on our team's
        happiness, work/life balance, and professional development, everybody
        wins—clients included.
      </p>
    </div>
  </div>

  <div class="career-head"><span>Green IT</span> is a place to grow.</div>

  <div class="vacuncy">
    <div class="v-img">
      <img :src="require('@/assets/images/hiring.jpg')" alt="" />
    </div>
    <div class="jobs">
      <div class="job">
        <a @click="job = 'bd'">
          <i class="fa-solid fa-circle"></i>
          <span>Business Development Manager</span>
        </a>

        <a @click="job = 'technicalSale'">
          <i class="fa-solid fa-circle"></i>
          <span>Technical Sales Engineer</span>
        </a>

        <a @click="job = 'businessAnalyst'">
          <i class="fa-solid fa-circle"></i>
          <span>Business Analyst</span>
        </a>

        <a @click="job = 'presale'">
          <i class="fa-solid fa-circle"></i>
          <span>Presales Engineer</span>
        </a>

        <a @click="job = 'graphic'">
          <i class="fa-solid fa-circle"></i>
          <span>Assistant Graphic Designer</span>
        </a>
        <a @click="job = 'showroom'">
          <i class="fa-solid fa-circle"></i>
          <span>Jr. Showroom Sales</span>
        </a>
      </div>
    </div>
  </div>

  <Jobs :job="job"></Jobs>

  <div class="job-info">
    <div class="note">
      <h3>Position 1, 2, 3, 4 & 5</h3>
      <span
        >Monday to Friday (9:00 AM - 5:00 PM), Saturday & Public Holiday
        Off</span
      >
    </div>

    <div class="note">
      <h3>Position 6</h3>
      <span>Operating daily 12:00 PM to 8:00 PM, Off Day - 1 day per week</span>
    </div>

    <p>Only shortlisted candidates will be contacted</p>
  </div>

  <div class="apply-address">
    <h4>
      If you are interested to apply, please send your CV to hr@greenitmm.com or
      hr@globetradingmm.com
    </h4>

    <div class="address">
      <span
        >No:1, 3rd and 4th Floor, Corner of Lower Kyi Myin Dine Road & U Lu
        Maung Street,</span
      >
      <span>Kyi Myin Dine Tsp, Yangon, Myanmar.</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Jobs from "../components/carrer/Jobs";
export default {
  components: { Jobs },
  setup() {
    const job = ref("");

    onMounted(() => {
      //   window.scrollTo(0, 0);
    });

    return { job };
  },
};
</script>

<style scoped>
.career {
  padding: 30px 20% 10px;
}

.career .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.career .header h5 {
  background: #7fb773;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}

.career .header h2 {
  font-size: 40px;
  margin: 10px auto 2px;
}

.career .header h6 {
  font-size: 20px;
}

.career .img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.career img {
  width: 100%;
}

.career .img p {
  padding: 20px 5%;
  font-size: 22px;
  text-indent: 50px;
}

.career-head {
  background: #f7f6dc;
  padding: 20px 20%;
  margin-top: 30px;
  font-size: 22px;
}

.career-head span {
  font-weight: bold;
  font-size: 25px;
  margin-right: 10px;
}

.vacuncy {
  display: flex;
  padding: 20px 20%;
  gap: 35px;
}

.vacuncy .v-img {
  width: 50%;
}

.vacuncy img {
  width: 100%;
}

.vacuncy .jobs {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-items: center;
}

.vacuncy .jobs a {
  display: block;
  padding: 20px 20px;
  border-radius: 7px;
  margin-bottom: 20px;
  transition: 0.3s ease-out;
  background: rgb(244, 244, 241, 0.7);
  cursor: pointer;
}

.vacuncy .jobs a:hover {
  background: #f3f3f0;
}

.vacuncy a i {
  color: #287e3d;
  margin-right: 10px;
}

.vacuncy a span {
  font-size: 20px;
}

.job-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 10px;
}

.job-info .note {
  border: 1px solid rgb(101, 209, 91);
  padding: 10px 60px;
  margin-bottom: 15px;
  border-radius: 10px;
}

.job-info .note h3 {
  text-align: center;
}

.job-info .note span {
  font-size: 20px;
  text-align: center;
}

.job-info p {
  margin-top: 65px;
  font-size: 22px;
  font-weight: bold;
}

.apply-address {
  background: #f7f6dc;
  padding: 40px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.apply-address h4 {
  font-size: 22px;
  text-align: center;
}

.apply-address .address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.apply-address .address span {
  text-align: center;
  font-size: 21px;
}

@media (max-width: 1650px) {
  .career {
    padding: 30px 15% 10px;
  }

  .career .header h2 {
    font-size: 38px;
  }
  .career img {
    width: 90%;
  }

  .career-head {
    padding: 20px 20%;
  }

  .vacuncy .v-img {
    width: 50%;
  }

  .vacuncy img {
    width: 90%;
  }

  .vacuncy .jobs {
    width: 50%;
    gap: 10px;
    margin-top: 15px;
  }

  .vacuncy .jobs a {
    padding: 10px 20px;
    margin-bottom: 15px;
  }

  .vacuncy a i {
    font-size: 12px;
  }
}

@media (max-width: 1200px) {
  .career {
    padding: 30px 9% 10px;
  }

  .career .header h5 {
    font-size: 13px;
  }

  .career .img p {
    font-size: 20px;
  }

  .career-head {
    font-size: 20px;
  }

  .career .header h2 {
    font-size: 32px;
  }

  .career-head {
    padding: 20px 13%;
  }

  .vacuncy {
    padding: 20px 13%;
    gap: 25px;
  }

  .vacuncy .v-img {
    width: 50%;
  }

  .vacuncy img {
    width: 90%;
  }

  .vacuncy .jobs {
    width: 50%;
    gap: 10px;
    margin-top: 15px;
  }

  .vacuncy .jobs a {
    padding: 10px 20px;
    margin-bottom: 15px;
  }

  .vacuncy a i {
    font-size: 12px;
  }

  .vacuncy a span {
    font-size: 20px;
  }

  .apply-address h4 {
    font-size: 20px;
  }

  .apply-address .address span {
    font-size: 20px;
  }
}

@media (max-width: 790px) {
  .career {
    padding: 30px 3% 10px;
  }

  .career-head {
    padding: 20px 9%;
  }

  .vacuncy {
    padding: 20px 9%;
  }

  .vacuncy .jobs a {
    padding: 10px 15px;
  }

  .apply-address .address span {
    font-size: 18px;
  }
}

@media (max-width: 690px) {
  .career .header h5 {
    font-size: 12px;
  }

  .career .header h2 {
    font-size: 27px;
  }

  .career .header h6 {
    text-align: center;
    padding: 0px 10%;
  }

  .career-head {
    padding: 20px 10%;
  }

  .career-head {
    padding: 20px 10%;
  }

  .vacuncy {
    padding: 20px 10%;
    gap: 10px;
  }

  .vacuncy .v-img {
    width: 40%;
  }

  .vacuncy img {
    width: 100%;
    margin-top: 15px;
  }

  .vacuncy .jobs {
    width: 60%;
    gap: 10px;
    margin-top: 15px;
  }

  .vacuncy .jobs a {
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  .job-info .note {
    padding: 10px 20px;
  }
}

@media (max-width: 510px) {
  .vacuncy {
    padding: 20px 10%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .vacuncy .v-img {
    width: 90%;
  }

  .vacuncy .jobs {
    width: 100%;
    gap: 10px;
    margin-top: 15px;
  }

  .vacuncy .jobs a {
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  .vacuncy a i {
    font-size: 12px;
  }

  .vacuncy a span {
    font-size: 18px;
  }

  .job-info .note {
    padding: 5px 10px;
  }

  .job-info .note h3 {
    font-size: 17px;
  }

  .job-info .note span {
    font-size: 17px;
    text-align: center;
  }

  .job-info p {
    font-size: 17px;
  }

  .apply-address h4 {
    font-size: 17px;
  }

  .apply-address .address span {
    font-size: 16px;
  }
}
</style>
