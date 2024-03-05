<template>
  <div class="form">
    <h2 v-if="!isSending" class="text-center">Schedule a Free Consultation</h2>
    <div v-if="!isSending" class="divider">
      <v-divider></v-divider>
      <v-icon style="transform: rotate(90deg)">mdi-share</v-icon>
      <v-divider></v-divider>
    </div>

    <form v-if="!isSending" @submit.prevent="sendMessage">
      <div class="form-data">
        <div class="name">
          <div class="first-name form-group">
            <label for="">First Name</label>
            <input type="text" required v-model="formData.firstName" />
          </div>
          <div class="last-name form-group">
            <label for="">Last Name</label>
            <input type="text" v-model="formData.lastName" required />
          </div>
        </div>
        <div class="form-group">
          <label for="">Company / Orginization</label>
          <input type="text" v-model="formData.company" required />
        </div>
        <div class="form-group">
          <label for="">Company Email</label>
          <input type="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="">Phone</label>
          <input type="text" v-model="formData.phone" required />
        </div>
        <div class="form-group">
          <label for="">How Can We Help You ?</label>
          <v-select
            v-model="formData.subject"
            label="Select"
            :items="[
              'Data Center Service and Solution',
              'Infrastructure Services & Solutions',
              'Security Services & Solution',
              'Server & Storage Solution',
              'Conferencing & VOIP Solution',
              'Server Rental Service',
              'Other',
            ]"
            required
          ></v-select>
        </div>
        <div class="form-group">
          <label for="">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            v-model="formData.message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div v-if="isSending"><Loading></Loading></div>
  </div>
</template>

<script>
import Loading from "./Loading";
import { ref } from "vue";
import axios from "axios";
import api from "@/api/api";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  components: { Loading },
  setup() {
    const $toast = useToast();

    let showToast = () => {
      $toast.open({
        message: "Message is sent successfully",
        type: "success",
        position: "top-right",
      });
    };

    let showErrorToast = () => {
      $toast.open({
        message: "Message is not sent. Try later !",
        type: "error",
        position: "top-right",
      });
    };

    let clearForm = () => {
      formData.value.firstName = "";
      formData.value.lastName = "";
      formData.value.company = "";
      formData.value.email = "";
      formData.value.phone = "";
      formData.value.subject = "";
      formData.value.message = "";
    };

    let isSending = ref(false);
    let error = ref(null);
    let formData = ref({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    let sendMessage = async () => {
      isSending.value = true;

      try {
        const res = await axios.post(api.sendEmail, formData);

        if (res.status === 404) {
          throw new Error("page not found");
        }

        console.log(res.data);
        isSending.value = false;
        showToast();
        clearForm();
      } catch (err) {
        error.value = err.message;
        clearForm();
        isSending.value = false;
        showErrorToast();
      }
    };

    return { isSending, sendMessage, formData, showToast };
  },
};
</script>

<style scoped>
.form {
  width: 500px;
  background: #fff;
  padding: 10px 0;
}

.divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.form-data {
  padding: 20px;
}

.form .name {
  display: flex;
}

.form .name input {
  width: 220px;
  margin-right: 15px;
}

.form label {
  font-size: 20px;
}

.form input,
select,
textarea {
  border: 1px solid #c4c0c0;
  padding: 7px 4px;
  transition: border-color 0.3s;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

button {
  background: #287e3d;
  margin-top: 15px;
  padding: 8px 20px;
  border-radius: 5px;
  color: #fff;
}

.form input:hover,
.form input:focus,
textarea:hover,
textarea:focus,
select:hover,
select:focus {
  border: 1.5px solid #287e3d;
}

.form .v-select__selection input {
  font-size: 20px !important;
}

.form button {
  font-size: 20px;
}

@media (max-width: 1630px) {
  .form {
    width: 500px;
    padding: 10px 0;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 15px 0;
  }

  .form-data {
    padding: 20px;
  }

  .form .name {
    display: flex;
    gap: 2px;
  }

  .form input,
  select,
  textarea {
    border: 1px solid #c4c0c0;
    padding: 7px 4px;
    transition: border-color 0.3s;
  }

  .first-name input,
  .last-name input {
    width: 178px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  button {
    background: #287e3d;
    margin-top: 15px;
    padding: 8px 20px;
    border-radius: 5px;
    color: #fff;
  }

  .form input:hover,
  .form input:focus,
  textarea:hover,
  textarea:focus,
  select:hover,
  select:focus {
    border: 1.5px solid #287e3d;
  }
}

@media (max-width: 1200px) {
  .form {
    width: 440px;
    padding: 5px 0;
  }
  .form .name {
    flex-direction: column;
  }

  .form label {
    font-size: 19px;
  }

  .form .name input {
    width: 100%;
  }

  .form-group {
    margin-top: 5px;
  }
}

@media (max-width: 1080px) {
  .form h2 {
    font-size: 24px;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0px 0;
  }

  .form label {
    font-size: 18px;
  }

  .form button {
    font-size: 18px;
  }
}

@media (max-width: 990px) {
  .form {
    width: 350px;
    padding: 5px 0;
  }

  .form h2 {
    font-size: 18px;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .form-data {
    padding: 10px;
  }

  .form .name {
    display: flex;
    gap: 2px;
  }

  .form input,
  select,
  textarea {
    border: 1px solid #c4c0c0;
    padding: 5px 4px;
    transition: border-color 0.3s;
  }

  .first-name,
  .last-name {
    display: flex;
    flex-direction: column;
  }

  .first-name input,
  .last-name input {
    width: 150px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  button {
    background: #287e3d;
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
  }

  .form input:hover,
  .form input:focus,
  textarea:hover,
  textarea:focus,
  select:hover,
  select:focus {
    border: 1.5px solid #287e3d;
  }
}

@media (max-width: 768px) {
  .form {
    width: 500px;
    padding: 5px 0;
  }

  .form h2 {
    font-size: 25px;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 15px 0;
  }

  .form-data {
    padding: 10px;
  }

  .form label {
    font-size: 22px;
  }

  .form .name {
    display: flex;
    gap: 2px;
  }

  .form input,
  select,
  textarea {
    border: 1px solid #c4c0c0;
    padding: 10px;
    transition: border-color 0.3s;
  }

  .first-name,
  .last-name {
    display: flex;
    flex-direction: column;
  }

  .first-name input,
  .last-name input {
    width: 240px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  button {
    background: #287e3d;
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
    font-size: 19px;
  }

  .form input:hover,
  .form input:focus,
  textarea:hover,
  textarea:focus,
  select:hover,
  select:focus {
    border: 1.5px solid #287e3d;
  }
}

@media (max-width: 550px) {
  .form {
    width: auto;
    padding: 5px 0;
  }

  .form h2 {
    font-size: 18px;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 15px 0;
  }

  .form-data {
    padding: 10px;
  }

  .form .name {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form input,
  select,
  textarea {
    border: 1px solid #c4c0c0;
    padding: 10px;
    transition: border-color 0.3s;
  }

  .first-name,
  .last-name {
    display: flex;
    flex-direction: column;
  }

  .first-name input,
  .last-name input {
    width: auto;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  button {
    background: #287e3d;
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
  }

  .form input:hover,
  .form input:focus,
  textarea:hover,
  textarea:focus,
  select:hover,
  select:focus {
    border: 1.5px solid #287e3d;
  }
}
</style>
