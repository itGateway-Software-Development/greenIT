<template>
  <div class="about-us">
    <div class="header">
      <h5>ABOUT</h5>
      <h2>Yours bests IT Partner</h2>
      <h6>Everyone has a story. Here's ours.</h6>
    </div>
    <div class="img">
      <img :src="require('@/assets/images/yangon.jpg')" alt="" />
      <p>
        Green IT is leading Information Technology Company, found in 2015, is
        not only Technical Services & Solutions provider but also supply the
        most qualified enterprise Networking devices to all size of Business
        across Myanmar and Singapore.
      </p>
    </div>
    <div class="we-are">
      <h6>We are</h6>
      <div class="items">
        <div class="item">
          <div class="block">Passionate</div>
          <p>
            We are intensely enthusiastic about providing a superior experience
          </p>
        </div>

        <div class="item">
          <div class="block">Respectful</div>
          <p>
            We are polite, kind and conpassion to one another, even when it gets
            though.
          </p>
        </div>

        <div class="item">
          <div class="block">Ownership</div>
          <p>We are empowered to do our jobs and work towards a common goal.</p>
        </div>

        <div class="item">
          <div class="block">Unified</div>
          <p>
            We work as a team and trust each other to create a seamless
            experience.
          </p>
        </div>

        <div class="item">
          <div class="block">Reliable</div>
          <p>
            We are consistently good in quality control, performance, services
            and able to trusted.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="aboutus-video">
    <iframe
      src="https://www.youtube.com/embed/pygRoZSd80A?si=WMTHpGivb1Aq06dG"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>

  <div class="about-us-text">
    <h2>A team built on experience</h2>
    <p>
      We're continuing to build our network nationally, bringing together a
      vibrant team with best-in-class service and techinical skills alike. With
      the experience of 1K projects we had done in Yangon and Singapore, our
      team is growing fast.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-us {
  padding: 30px 20% 10px;
}

.about-us .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.about-us .header h5 {
  background: #7fb773;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}

.about-us .header h2 {
  font-size: 40px;
  margin: 10px auto 2px;
}

.about-us .header h6 {
  font-size: 20px;
}

.about-us .img {
  position: relative;
}

.about-us img {
  width: 100%;
  height: 600px;
}

.about-us .img p {
  position: absolute;
  bottom: 12%;
  padding: 0 8%;
  font-size: 22px;
  color: #fff;
  line-height: 50px;
  text-indent: 50px;
}

.about-us .we-are {
  padding: 30px 2% 0px;
}

.about-us .we-are h6 {
  font-size: 22px;
}

.about-us .items {
  margin: 20px 0;
  display: flex;
  gap: 15px;
}

.about-us .item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.about-us .item .block {
  width: 140px;
  height: 140px;
  background: #7fb773;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 20px;
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 1px;
}

.about-us .item p {
  font-size: 19px;
  text-align: center;
  height: 80px;
  word-spacing: -1px;
}

.aboutus-video {
  margin: 20px auto;
  text-align: center;
}

.aboutus-video iframe {
  width: 1000px;
  height: 570px;
}

.about-us-text {
  background: #f7f6dc;
  padding: 50px 25%;
}

.about-us-text h2 {
  text-align: center;
  font-size: 35px;
  margin: 10px auto 30px;
}

.about-us-text p {
  text-align: center;
  font-size: 22px;
  padding: 0 1%;
}

@media (max-width: 1650px) {
  .about-us .img p {
    bottom: 11%;
    line-height: 40px;
  }
}

@media (max-width: 1620px) {
  .about-us {
    padding: 30px 15% 10px;
  }
  .about-us .img p {
    bottom: 12%;
    line-height: 50px;
  }
}

@media (max-width: 1200px) {
  .about-us {
    padding: 30px 10% 10px;
  }

  .about-us .items {
    margin: 20px 0;
    display: flex;
    gap: 5px;
  }

  .about-us .item .block {
    font-size: 20px;
  }

  .about-us .item p {
    font-size: 18px;
  }

  .aboutus-video iframe {
    width: 700px;
    height: 400px;
  }
}

@media (max-width: 990px) {
  .about-us {
    padding: 30px 4% 10px;
  }

  .about-us .header h5 {
    font-size: 14px;
  }

  .about-us .header h2 {
    font-size: 35px;
  }

  .about-us .header h6 {
    font-size: 20px;
  }

  .about-us img {
    width: 100%;
    height: 450px;
  }

  .about-us .img p {
    bottom: 12%;
    padding: 0 7%;
    font-size: 20px;
    line-height: 40px;
    text-indent: 50px;
  }

  .about-us .we-are {
    padding: 30px 1% 0px;
  }

  .about-us .we-are h6 {
    font-size: 18px;
  }

  .about-us .items {
    margin: 20px 0;
    gap: 10px;
  }

  .about-us .item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .about-us .item .block {
    width: 140px;
    height: 120px;
    padding: 0 20px;
  }

  .about-us .item p {
    font-size: 18px;
    height: 80px;
    word-spacing: 0px;
  }

  .about-us-text {
    padding: 50px 12%;
  }

  .about-us-text h2 {
    font-size: 30px;
  }

  .about-us-text p {
    font-size: 20px;
  }
}

@media (max-width: 865px) {
  .about-us .img p {
    bottom: 12%;
    padding: 0 7%;
    line-height: 40px;
  }

  .aboutus-video iframe {
    width: 590px;
    height: 330px;
  }
}

@media (max-width: 800px) {
  .about-us .items {
    margin: 20px 0;
    gap: 10px;
    flex-wrap: wrap;
  }

  .about-us .item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 22%;
  }

  .about-us .item .block {
    width: 100%;
    height: 120px;
    padding: 0 20px;
  }
}

@media (max-width: 785px) {
  .about-us .img p {
    bottom: 12%;
    padding: 0 7%;
    font-size: 18px;
    line-height: 30px;
  }

  .about-us img {
    width: 100%;
    height: 400px;
  }
}

@media (max-width: 670px) {
  .about-us {
    padding: 30px 2% 10px;
  }

  .about-us .header h2 {
    font-size: 25px;
  }

  .about-us .header h6 {
    font-size: 15px;
  }
  .about-us img {
    width: 100%;
    height: 350px;
  }

  .about-us .img p {
    bottom: 7%;
    padding: 0 7%;
    line-height: 25px;
  }

  .about-us .item p {
    font-size: 17px;
  }

  .aboutus-video iframe {
    width: 510px;
    height: 300px;
  }
}

@media (max-width: 550px) {
  .about-us img {
    width: 100%;
    height: 300px;
  }

  .about-us .img p {
    bottom: 12%;
    padding: 0 7%;
    font-size: 14px;
    line-height: 20px;
  }

  .about-us .items {
    justify-content: center;
    gap: 25px;
  }

  .about-us .item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-bottom: 20px;
  }

  .about-us .item .block {
    width: 100%;
    height: 110px;
    font-size: 13px;
  }

  .about-us .item p {
    font-size: 15px;
    height: 50px;
  }

  .about-us-text {
    padding: 40px 7%;
  }

  .about-us-text h2 {
    font-size: 24px;
  }

  .aboutus-video iframe {
    width: 400px;
    height: 220px;
  }
}

@media (max-width: 480px) {
  .about-us img {
    height: 270px;
  }

  .about-us .img p {
    bottom: 5%;
    padding: 0 7%;
    font-size: 13px;
    line-height: 20px;
  }

  .about-us .items {
    justify-content: center;
    gap: 25px;
  }

  .about-us .item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 40%;
  }

  .about-us .item .block {
    width: 100%;
    height: 110px;
    font-size: 13px;
  }

  .about-us .item .block {
    font-size: 22px;
  }

  .about-us .item p {
    font-size: 17px;
    height: 50px;
  }

  .about-us-text {
    padding: 40px 4%;
  }

  .about-us-text h2 {
    font-size: 22px;
  }

  .about-us-text p {
    font-size: 17px;
  }
}

@media (max-width: 430px) {
  .aboutus-video iframe {
    width: 360px;
    height: 210px;
  }
}

@media (max-width: 380px) {
  .about-us {
    padding: 10px 2% 10px;
  }
}
</style>
