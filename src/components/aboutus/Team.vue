<template>
  <div class="team">
    <div class="header">
      <h5>TEAM</h5>
      <h2>Get to know us better</h2>
      <h6 style="letter-spacing: 1px" class="text-center">
        Our staff has a variety of industry-recognized certifications and
        degrees
      </h6>
    </div>

    <div class="img">
      <img :src="require('@/assets/images/team.jpg')" alt="" />
      <p style="letter-spacing: 1px">
        One of many ways that we aim to keep providing customers with the best
        possible service is our continued investment in the education and growth
        of our people. We only hire the most highly-skilled professionals, and
        continually training them so we can help you win and grow your business.
      </p>
    </div>

    <div class="content">
      <h2>Our Team Is Here to Support Your Team</h2>

      <div class="team-content-section">
        <div class="item" style="background: #287e3d">
          <h3>Technical Sales</h3>
          <ul>
            <li>Sales Engineer</li>
            <li>sales@greenitmm.com</li>
            <li>+959 896 237 359</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>

        <div class="item" style="background: #dc7844">
          <h3>Licensing</h3>
          <ul>
            <li>Licensing Specialist</li>
            <li>licensing@greenitmm.com</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>

        <div class="item" style="background: #874e38">
          <h3>Rental</h3>
          <ul>
            <li>Rental Specialist</li>
            <li>server.rental@greenitmm.com</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>

        <div class="item" style="background: #287e3d">
          <h3>Presales & Solutions</h3>
          <ul>
            <li>Presales Engineer Team</li>
            <li>presales@greenitmm.com</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>

        <div class="item" style="background: #dc7844">
          <h3>Network Team</h3>
          <ul>
            <li>Network Engineer Team</li>
            <li>network@greenitmm.com</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>

        <div class="item" style="background: #874e38">
          <h3>Systems Team</h3>
          <ul>
            <li>Systems Engineer Team</li>
            <li>systems@greenitmm.com</li>
            <li>+959 880 441 215</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="team-footer">
    <p style="letter-spacing: 1px">
      For general inquiry, you can reach us to our Customer Services Team at
    </p>
    <span style="letter-spacing: 1px"
      >Email: <b>info@greenitmm.com</b> / Hot Line:
      <b>+959 880 441 215</b></span
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team {
  margin-top: 80px;
  padding: 30px 20%;
}

.team .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.team .header h5 {
  background: #7fb773;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}

.team .header h2 {
  font-size: 40px;
  margin: 10px auto 2px;
}

.team .header h6 {
  font-size: 20px;
}

.team .img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.team img {
  width: 90%;
}

.team .img p {
  padding: 30px 8%;
  text-align: justify;
  font-size: 22px;
  text-indent: 50px;
}

.team .content {
  margin-top: 40px;
}

.team .content h2 {
  font-size: 35px;
  text-align: center;
}

.team-content-section {
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.team-content-section .item {
  width: 20%;
  padding: 10px 5px 10px 20px;
  border-radius: 7px;
  margin: 0 40px 20px;
}

.team-content-section .item h3 {
  color: #fff;
  margin-bottom: 7px;
  font-size: 24px;
}

.team-content-section .item ul {
  padding-left: 15px;
  color: #fff;
}

.team-content-section .item ul li {
  margin-bottom: 5px;
  font-size: 17px;
}

.team-footer {
  background: #f7f6dc;
  padding: 20px 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.team-footer p {
  font-size: 22px;
}

.team-footer span {
  font-size: 21px;
}

@media (max-width: 1850px) {
  .team-content-section .item {
    width: 20%;
    padding: 10px 5px 10px 20px;
    margin: 0 35px 20px;
  }
}

@media (max-width: 1650px) {
  .team {
    margin-top: 80px;
    padding: 30px 15%;
  }

  .team-footer {
    padding: 20px 15%;
  }

  .team-content-section .item {
    width: 20%;
    padding: 10px 5px 10px 20px;
    margin: 0 30px 20px;
  }
}

@media (max-width: 1400px) {
  .team-content-section .item {
    width: 23%;
    padding: 10px 5px 20px 20px;
    margin: 0 10px 20px;
  }
}

@media (max-width: 1260px) {
  .team {
    margin-top: 80px;
    padding: 30px 12%;
  }
}

@media (max-width: 1200px) {
  .team {
    margin-top: 80px;
    padding: 30px 7%;
  }

  .team-content-section .item {
    width: 23%;
    padding: 10px 5px 20px 20px;
    margin: 0 30px 20px;
  }
}

@media (max-width: 1050px) {
  .team-content-section .item {
    width: 24%;
    padding: 10px 5px 20px 20px;
    margin: 0 30px 20px;
  }
}

@media (max-width: 990px) {
  .team {
    margin-top: 60px;
  }
  .team .header h5 {
    font-size: 12px;
  }

  .team .header h2 {
    font-size: 35px;
  }

  .team .img p {
    padding: 30px 10%;
    font-size: 20px;
  }
  .team .content h2 {
    font-size: 30px;
  }

  .team-content-section .item {
    width: 26%;
    padding: 10px 5px 20px 20px;
    margin: 0 20px 20px;
  }
}

@media (max-width: 880px) {
  .team-content-section .item {
    width: 32%;
    padding: 10px 5px 20px 20px;
    margin: 0 20px 20px;
  }

  .team-footer {
    gap: 5px;
  }

  .team-footer p,
  .team-footer span {
    font-size: 20px;
  }
}

@media (max-width: 760px) {
  .team .content h2 {
    font-size: 27px;
    padding: 0 10%;
  }
  .team-content-section .item {
    width: 35%;
    padding: 10px 5px 20px 20px;
    margin: 0 20px 20px;
  }
}

@media (max-width: 650px) {
  .team .header h2 {
    font-size: 30px;
  }

  .team .header h6 {
    font-size: 16px;
  }

  .team .img p {
    padding: 30px 5%;
  }

  .team .content h2 {
    font-size: 24px;
    padding: 0 10%;
  }
  .team-content-section .item {
    width: 45%;
    padding: 10px 5px 20px 20px;
    margin: 0 10px 20px;
  }

  .team-footer {
    gap: 5px;
    padding: 20px 10%;
  }

  .team-footer p,
  .team-footer span {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .team .header h2 {
    font-size: 25px;
  }

  .team {
    margin-top: 80px;
    padding: 30px 3%;
  }

  .team-content-section .item h3 {
    font-size: 22px;
  }

  .team-content-section .item ul {
    padding-left: 20px;
    font-size: 13px;
  }

  .team-footer {
    gap: 3px;
    padding: 20px 5%;
  }
}

@media (max-width: 427px) {
  .team .header h2 {
    font-size: 24px;
  }

  .team .header h6 {
    font-size: 15px;
    padding: 0 10%;
    text-align: center;
  }
  .team-content-section .item {
    width: 60%;
    padding: 10px 5px 20px 20px;
    margin: 0 10px 20px;
  }
}
</style>
