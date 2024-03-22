<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const openSideBar = ref(false);

const toggleSideBar = () => {
    openSideBar.value = !openSideBar.value;
}

const shouldShowToggleButton = computed(() => {
  return window.innerWidth < 768; 
});


window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        openSideBar.value = true; 
    } else {
        openSideBar.value = false;
    }
});


if (window.innerWidth >= 768) {
    openSideBar.value = true; 
} else {
    openSideBar.value = false; 
}
</script>

<template>
    <!-- nav-bar -->
    <nav class="panel-header">
        <div class="nav-wrap">
            <div class="nav-left">
                <button v-if="shouldShowToggleButton" class="sideBar-toggle" @click="toggleSideBar">☰</button>
            </div>
            <div class="nav-right">
                <button class="item-notification-dot">🔔</button>
                <button class="user-icon">👤</button>
            </div>
        </div>
    </nav>

    <!-- sideBar -->
    <aside :class="{ 'is-active': openSideBar }" class="sidebar">
      <div class="sidebar-header">
        <p class="sidebar-title">Princeps</p>
        <button class="close-button" @click="toggleSideBar">✖</button>
      </div>
      <ul class="menu-list">
            <li>
                <router-link to="/" class="menu-link" active-class="active-link"><i class="fas fa-home"></i> Dashboard</router-link>
            </li>
            <li>
                <router-link to="/loan" class="menu-link" active-class="active-link"><i class="fas fa-money-bill-wave"></i> Loan</router-link>
            </li>
            <li>
                <router-link to="/creditAlert" class="menu-link" active-class="active-link"><i class="fas fa-credit-card"></i> Credit Alert</router-link>
            </li>
            <li>
                <router-link to="/verifications" class="menu-link" active-class="active-link"><i class="fas fa-tasks"></i> Verification</router-link>
            </li>
            <li>
                <router-link to="/deduction" class="menu-link" active-class="active-link"><i class="fas fa-donate"></i> Deductions</router-link>
            </li>
            <li>
                <router-link to="/revenueAssurance" class="menu-link" active-class="active-link"><i class="fas fa-chart-line"></i> Revenue Assurance</router-link>
            </li>
            <li>
                <router-link to="/reports" class="menu-link" active-class="active-link"><i class="fas fa-file-alt"></i> Reports</router-link>
            </li>
            <li>
                <router-link to="/loanDiskOperation" class="menu-link" active-class="active-link"><i class="fas fa-database"></i> Loan Disk Operations</router-link>
            </li>
            <li>
                <router-link to="/issuesLibrary" class="menu-link" active-class="active-link"><i class="fas fa-bug"></i> Issues Library</router-link>
            </li>
            <li>
                <router-link to="/portBalance" class="menu-link" active-class="active-link"><i class="fas fa-balance-scale"></i> Portal Balance</router-link>
            </li>
      </ul>
    </aside>
</template>

<style scoped>

</style>
