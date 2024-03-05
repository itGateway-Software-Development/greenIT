<template>
  <div class="partners">
    <div style="position: relative">
      <div class="heading">
        <span>Green IT</span>
        <h2>Consult with Us</h2>
      </div>
      <div class="body">
        <h4>
          We're happy to answer any questions you may have and help you
          determine which of our services best fit your need.
        </h4>

        <div class="call-us">
          <span>Call Us at: +959 880 441 215</span>
        </div>

        <div class="step-container">
          <div class="next">What happens next?</div>
          <div class="step">
            <div class="item">
              <h2>1</h2>
              <span
                >We Schedule a call at <br />
                your convenience</span
              >
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="69"
              viewBox="0 0 12 61"
            >
              <path
                d="m.37.6.95-.3 10.21 30.62L1.31 60.57l-.95-.33 10.11-29.32"
                fill="goldenrod"
              ></path>
            </svg>
            <div class="item">
              <h2>2</h2>
              <span
                >We do a discovery <br />
                and consulting meeting</span
              >
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="69"
              viewBox="0 0 12 61"
            >
              <path
                d="m.37.6.95-.3 10.21 30.62L1.31 60.57l-.95-.33 10.11-29.32"
                fill="goldenrod"
              ></path>
            </svg>
            <div class="item">
              <h2>3</h2>
              <span
                >We prepare a <br />
                Proposal</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <Form></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
export default {
  components: { Form },
};
</script>

<style scoped>
.partners {
  padding: 30px 15%;
  margin-top: 60px;
}

.heading {
  background-color: #7fb77e;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 5px 5px 0 0;
}

.heading span {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.heading h2 {
  color: #fff;
  font-size: 90px;
}

.body {
  background-color: #b1d7b4;
  padding: 30px 30px 50px 30px;
  display: flex;
  flex-direction: column;
  gap: 170px;
  border-radius: 0 0 5px 5px;
}

.body h4 {
  font-size: 25px;
  margin-top: 15px;
  width: 600px;
}

.body .call-us {
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.body .call-us span {
  position: relative;
}

.body .call-us span::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #287e3d;
  transition: 0.3s ease;
}

.body .call-us span:hover::before {
  width: 100%;
}

.body .next {
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 1px;
}

.body .step {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.step .item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.step .item span {
  font-size: 22px;
}

/* --------- form ---------*/
.form {
  position: absolute;
  right: 10px;
  bottom: 10%;
}

@media (max-width: 1630px) {
  .partners {
    padding: 30px 9%;
    margin-top: 60px;
  }

  .heading {
    background-color: #7fb77e;
    height: 270px;
    padding: 30px;
  }

  .body {
    padding: 30px 30px 50px 30px;
    gap: 150px;
    border-radius: 0 0 5px 5px;
  }

  .body h4 {
    font-size: 23px;
    margin-top: 15px;
    width: 500px;
  }

  .body .call-us {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
  }

  .body .next {
    font-weight: bold;
    font-size: 24px;
  }

  .body .step {
    display: flex;
    gap: 10px;
    margin-top: 30px;
  }

  .step .item {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .step .item span {
    font-size: 20px;
  }

  /* --------- form ---------*/
  .form {
    position: absolute;
    right: 10px;
    bottom: 3%;
  }
}

@media (max-width: 1200px) {
  .partners {
    padding: 30px 3%;
    margin-top: 60px;
  }
}

@media (max-width: 1080px) {
  .partners {
    padding: 30px 1%;
    margin-top: 60px;
  }

  .heading {
    background-color: #7fb77e;
    height: 270px;
    padding: 30px;
  }

  .heading span {
    font-size: 20px;
  }

  .heading h2 {
    font-size: 70px;
  }

  .body {
    padding: 30px 30px 50px 30px;
    gap: 150px;
    border-radius: 0 0 5px 5px;
  }

  .body h4 {
    font-size: 23px;
    margin-top: 15px;
    width: 500px;
    text-align: justify;
  }

  .body .call-us {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
  }

  .body .next {
    font-weight: bold;
    font-size: 22px;
  }

  .body .step {
    display: flex;
    gap: 10px;
    margin-top: 30px;
  }

  .step .item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .step .item span {
    font-size: 20px;
  }

  /* --------- form ---------*/
  .form {
    position: absolute;
    right: 5px;
    bottom: 10%;
  }
}

@media (max-width: 990px) {
  .partners {
    padding: 30px 1%;
    margin-top: 60px;
  }

  .heading {
    background-color: #7fb77e;
    height: 270px;
    padding: 30px;
  }

  .heading span {
    font-size: 20px;
  }

  .body {
    padding: 30px 30px 50px 30px;
    gap: 150px;
    border-radius: 0 0 5px 5px;
  }

  .body h4 {
    font-size: 22px;
    margin-top: 15px;
    width: 380px;
    text-align: justify;
  }

  .body .call-us {
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
  }

  .body .next {
    font-weight: bold;
    font-size: 20px;
  }

  .body .step {
    display: flex;
    gap: 5px;
    margin-top: 30px;
  }

  .step .item {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .step .item span {
    font-size: 20px;
  }

  /* --------- form ---------*/
  .form {
    position: absolute;
    right: 5px;
    bottom: 13%;
  }
}

@media (max-width: 768px) {
  .partners {
    padding: 30px 1%;
    margin-top: 60px;
  }

  .heading {
    background-color: #7fb77e;
    height: 270px;
    padding: 30px;
  }

  .heading span {
    font-size: 20px;
  }

  .body {
    padding: 30px 30px 50px 30px;
    gap: 150px;
    border-radius: 0 0 5px 5px;
  }

  .body h4 {
    font-size: 22px;
    margin-top: 15px;
    width: auto;
    text-align: justify;
  }

  .body .call-us {
    font-size: 27px;
    font-weight: bold;
    display: inline-block;
  }

  .body .next {
    font-weight: bold;
    font-size: 22px;
  }

  .body .step {
    display: flex;
    gap: 10px;
    margin-top: 30px;
  }

  .step .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* --------- form ---------*/
  .form {
    position: relative;
    width: 500px;
    margin: 40px auto 20px;
  }
}

@media (max-width: 550px) {
  .partners {
    padding: 30px 1%;
    margin-top: 60px;
  }

  .heading {
    background-color: #7fb77e;
    height: 220px;
    padding: 30px;
  }

  .heading span {
    font-size: 20px;
  }

  .heading h2 {
    font-size: 60px;
  }

  .body {
    padding: 30px 30px 50px 30px;
    gap: 90px;
    border-radius: 0 0 5px 5px;
  }

  .body h4 {
    font-size: 22px;
    margin-top: 15px;
    width: auto;
    text-align: justify;
  }

  .body .call-us {
    font-size: 23px;
    font-weight: bold;
    display: inline-block;
  }

  .body .next {
    font-weight: bold;
    font-size: 21px;
  }

  .body .step {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30px;
  }

  .step .item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
  }

  .step svg {
    transform: rotate(90deg);
    margin-left: 30px;
  }

  .step .item span {
    font-size: 21px;
  }

  /* --------- form ---------*/
  .form {
    position: relative;
    width: 400px;
    margin: 40px auto 20px;
    padding: 0 10px;
  }
}

@media (max-width: 400px) {
  .form {
    position: relative;
    width: 350px;
    margin: 40px auto 20px;
    padding: 0 10px;
  }
}
</style>
