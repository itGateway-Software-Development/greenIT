<template>
  <div class="strength">
    <v-row class="" no-gutters>
      <v-col cols="12" sm="6" md="6" lg="3" class="strength-column">
        <div class="content">
          <img :src="require('@/assets/images/icon/cost.png')" alt="" />
          <h2>Cost-effectiveness</h2>
          <p>
            We offer affordable IT solutions that help you reduce costs and
            improve your bottom line.
          </p>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="3" class="strength-column">
        <div class="content">
          <img :src="require('@/assets/images/icon/expert.png')" alt="" />
          <h2>Industry Expertise</h2>
          <p>
            We specialize in serving specific industries, such as healthcare,
            finance, or manufacturing, and offer tailored solutions that meet
            your unique needs.
          </p>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="3" class="strength-column">
        <div class="content">
          <img :src="require('@/assets/images/icon/scalable.png')" alt="" />
          <h2>Scalability</h2>
          <p>
            Our solutions are scalable and can grow with your business, ensuring
            that you get the most value out of your investment.
          </p>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="3" class="strength-column">
        <div class="content">
          <img :src="require('@/assets/images/icon/innovative.png')" alt="" />
          <h2>Innovative Technology</h2>
          <p>
            We stay up-to-date with the latest technology trends and offer
            innovative solutions that help you stay ahead of the competition.
          </p>
        </div>
      </v-col>
    </v-row>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.strength {
  padding: 20px 15%;
  margin-top: 20px;
}

.strength-column {
  margin-bottom: 30px;
}

.strength-column .content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.strength-column .content img {
  width: 80px;
  height: 80px;
}

.strength-column .content p {
  text-align: justify;
  font-size: 22px;
}

@media (max-width: 1630px) {
  .strength {
    padding: 20px 9%;
    margin-top: 20px;
  }

  .strength-column {
    margin-bottom: 30px;
  }

  .strength-column .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px 10px 10px;
  }

  .strength-column .content h2 {
    font-size: 23px;
  }

  .strength-column .content img {
    width: 65px;
    height: 65px;
  }

  .strength-column .content p {
    text-align: justify;
    font-size: 20px;
  }
}

@media (max-width: 1200px) {
  .strength {
    padding: 20px 3%;
  }
}
</style>
