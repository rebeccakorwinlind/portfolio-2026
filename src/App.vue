<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const sidebarOpen = ref(false)

const goHome = () => {
  router.push('/')
  sidebarOpen.value = false
}

const goToKontakt = () => {
  router.push('/kontakt')
  sidebarOpen.value = false
}

const goToProjects = () => {
  router.push('/projects')
  sidebarOpen.value = false
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>


<template>
  <div class="app-container">
    <nav class="navbar">
      <button class="nav-button" @click="goHome">Forside</button>
      <button class="nav-button" @click="goToProjects">Projekter</button>
      <button class="nav-button" @click="goToKontakt">Kontakt mig</button>
      <button class="hamburger-button" @click="toggleSidebar">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="sidebar" :class="{ active: sidebarOpen }">
      <button class="close-button" @click="toggleSidebar">✕</button>
      <button class="sidebar-nav-button" @click="goHome">Forside</button>
      <button class="sidebar-nav-button" @click="goToProjects">Projekter</button>
      <button class="sidebar-nav-button" @click="goToKontakt">Kontakt mig</button>
    </div>

    <div class="sidebar-overlay" v-show="sidebarOpen" @click="toggleSidebar"></div>
    
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: radial-gradient(circle at 20% 30%, #3083ff 0%, transparent 40%), 
              radial-gradient(circle at 80% 60%, #3f92e4 0%, transparent 45%), 
              radial-gradient(circle at 50% 80%, #6dbdff 0%, transparent 40%), 
              radial-gradient(circle at 70% 20%, #E3F2FD 0%, transparent 70%);
  background-color: #1239d6c3;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}

.navbar {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  gap: 2rem;
  padding: 0.5rem 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.326);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  align-items: center;
  height: 70px;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .navbar {
    gap: 1rem;
    padding: 0.5rem 1rem;
  }

  .nav-button {
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    grid-template-columns: repeat(12, 1fr);
    gap: 0;
    height: 70px;
    padding: 0.5rem 0;
  }
}

.nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.nav-button:first-child {
  grid-column: 2;
}

.nav-button:nth-child(2) {
  grid-column: 3;
}

.nav-button:nth-child(3) {
  grid-column: 4;
}

.nav-button:hover {
  color: #ffcb05;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .nav-button {
    display: none !important;
  }

  .nav-button:first-child {
    grid-column: auto;
  }

  .nav-button:nth-child(2) {
    grid-column: auto;
  }

  .nav-button:nth-child(3) {
    grid-column: auto;
  }
}


.hamburger-button {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 0.35rem;
  grid-column: 12;
  padding-right: 1rem;
}

@media (max-width: 768px) {
  .hamburger-button {
    display: flex;
  }
}

.hamburger-button span {
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-button:hover span {
  background: #ffcb05;
}

.sidebar {
  position: fixed;
  right: 0;
  top: 70px;
  width: 250px;
  height: calc(100vh - 70px);
  background: rgba(48, 131, 255, 0.95);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  padding-top: 1rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.2);
}

.sidebar.active {
  transform: translateX(0);
}

@media (min-width: 769px) {
  .sidebar {
    display: none;
  }
}

.close-button {
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  line-height: 1;
}

.close-button:hover {
  color: #ffcb05;
  transform: scale(1.2);
}

.sidebar-nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
  text-align: left;
  border-left: 3px solid transparent;
}

.sidebar-nav-button:hover {
  color: #ffcb05;
  background: rgba(255, 255, 255, 0.1);
  border-left-color: #ffcb05;
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.content-wrapper {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
}
</style>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>


