<script setup>
import Amount from '../components/LoanApplication.vue/Amount.vue'
import LoanBreakdown from '../components/LoanApplication.vue/LoanBreakdown.vue'
import PersonalInformation from '../components/LoanApplication.vue/PersonalInfo.vue'
import ContactInformation from '../components/LoanApplication.vue/ContactInfo.vue'
import EmploymentInformation from '../components/LoanApplication.vue/EmploymentInfo.vue'

import { ref } from 'vue'

const activeComponent = ref('Amount')

const setActive = (component) => {
  console.log('component clicked')
  activeComponent.value = component
}

</script>

<template>
  <div class="container">
   <div class="container-wrapper">
      <div class="form-container">
        <div class="form-header">
          <div class="logo">
            <img src="https://res.cloudinary.com/dqrykh6qy/image/upload/v1712199768/sentinel_flex_logoO_1_hpc3ms.png" alt="">
          </div>

          <!-- //Btn-Navtigations -->
          <div class="loan-nav-btn">
            <Amount @click="setActive('Amount')" :active="activeComponent === 'Amount'"/>
            <LoanBreakdown @click="setActive('LoanBreakdown')" :class="{ 'active': activeComponent === 'LoanBreakdown' }"/>
            <PersonalInformation @click="setActive('PersonalInformation')" :class="{ 'active': activeComponent === 'PersonalInformation' }"/>
            <ContactInformation  @click="setActive('ContactInformation')" :class="{ 'active': activeComponent === 'ContactInformation' }"/>
            <EmploymentInformation @click="setActive('EmploymentInformation')" :class="{ 'active': activeComponent === 'EmploymentInformation' }"/>
          </div>
          <h3>Instant Loans: Access funds within 30 minutes!</h3>
          <div class="loan-form">
            <h1>forms</h1>
          </div>
          
          <div class="application-btn">
           <div class="application-navigation-btn">
            <button class="previous-btn">Previous</button>
           </div>
           <div class="application-navigation-btn">
            <button class="apply-btn">Apply Now</button>
           </div>
        </div>
        </div> 
      </div>

      <div class="form-container-img">
        <div class="side">
          <img src="https://res.cloudinary.com/dqrykh6qy/image/upload/v1712199770/7xm_1_fxdb4s.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.container-wrapper {
  display: flex;
  align-items: flex-start;
  margin-left: 200px;
  /* width: 100%; */
}

.form-container {
  /* border: 1px solid black; */
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 18%;
}

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
}

.logo img {
  width: 100px;
}

.loan-nav-btn {
  display: flex;
  text-transform: capitalize;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  /* border: 1px solid black; */
}


h3 {
  font-size: 28px;
  font-weight: 700;
  line-height: 23.87px;
  color: #FF0000;
  margin: 20px;
}

.application-btn {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
}

.application-btn button {
  padding: 10px;
  border: 1px solid  #131A29;
  border-radius: 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 19px;
  line-height:25.41px;
  letter-spacing: 2px;
  transition: background-color 0.3s ease;
}

.application-navigation-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.application-btn button.previous-btn {
  background-color: transparent;
  color: #131A29;
}

.application-btn button.apply-btn {
  background-color:#FF0000;
  border: none;
  color: #fff;
  /* box-shadow: ; */
}

.application-btn .apply-btn:hover {
  background-color: transparent;
  color: #131A29;
  border: 1px solid #131A29;
}
.application-btn .previous-btn:hover {
  background-color:#FF0000 ;
  color: #fff;
  border: none;
}



/* //Image .container */
.form-container-img {
  margin-left: 100px;

}

.side img {
  /* max-width: 100%; */
  /* height: auto; */
}

</style>
