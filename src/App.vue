<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goToKontakt = () => {
  router.push('/kontakt')
}

const goToProjects = () => {
  router.push('/projects')
}
</script>


<template>
  <div class="app-container">
    <nav class="navbar">
      <button class="nav-button" @click="goHome">Forside</button>
      <button class="nav-button" @click="goToProjects">Projekter</button>
      <button class="nav-button" @click="goToKontakt">Kontakt mig</button>
    </nav>
    
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


