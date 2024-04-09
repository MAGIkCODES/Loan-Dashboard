<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isActive: Boolean
})
</script>


<template>
  <div class="select-btn" :class="{ 'active': isActive }">
    <button :style="{ width: isActive ? '60px' : '50px', height: isActive ? '60px' : '50px' }">
      <i class="fas fa-file-alt" :style="{ fontSize: isActive ? '24px' : '16px' }"></i>
    </button>
    <p :style="{ fontSize: isActive ? '11px' : '8px' }">Employment Information</p>
  </div>
</template>


<style scoped>
.select-btn {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
}

.select-btn button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  border: none;
  background-color: #0176AB;
  cursor: pointer;
}

.select-btn i {
  font-size: 16px; 
  color: white;
}

.select-btn p {
  font-size: 8px;
  font-weight: 500;
  line-height: 23.87px;
  margin-left: 5px;
}

.select-btn.active button {
  background-color: red !important;
  width: 60px !important;
  height: 60px !important;
}

.select-btn.active i {
  font-size: 24px !important;
}

.select-btn.active p {
  font-size: 11px !important;
}
</style>
