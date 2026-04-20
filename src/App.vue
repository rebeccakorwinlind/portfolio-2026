<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goToKontakt = () => {
  router.push('/kontakt')
}
</script>


<template>
  <div class="app-container">
    <nav class="navbar">
      <button class="nav-button" @click="goHome">Forside</button>
      <button class="nav-button">Download CV</button>
      <button class="nav-button" @click="goToKontakt">Kontakt mig</button>
    </nav>
    
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 20% 30%, #0066ff 0%, transparent 40%), 
              radial-gradient(circle at 80% 60%, #ff1493 0%, transparent 45%), 
              radial-gradient(circle at 50% 80%, #9933ff 0%, transparent 40%), 
              radial-gradient(circle at 70% 20%, #ffdd00 0%, transparent 70%);
  background-color: #e537a2;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  gap: 2rem;
  padding: 0.8rem 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.326);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
}

.nav-button:hover {
  color: #ffdd00;
  text-shadow: 0 0 10px rgba(255, 221, 0, 0.5);
  transform: scale(1.1);
}
</style>

<style>
body, html {
  margin: 0;
  padding: 0;
}
</style>
