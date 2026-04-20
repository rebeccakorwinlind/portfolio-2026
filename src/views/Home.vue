<script setup>
import video from '@/assets/Rebecca_videoCV.mp4'
</script>

<template>
  <div class="hero">
    <div class="hero-left">
      <h1 class="hero-title">Rebecca Korwin Lind</h1>
      <p class="hero-description">Multimedie design studerende, med fokus på interaktive og visuelle oplevelser</p>
      <button class="cta-button">Download CV</button>
    </div>
    
    <div class="hero-right">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/6H0FDdhDHPI" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <p>Rul ned for at se mit arbejde!</p>
    <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px 64px 64px ;
  height: calc(100vh - 100px);
  gap: 3rem;
}

.hero-left {
  flex: 1;
  color: white;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin: 0 0 0 0;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
}

.hero-description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 400px;
}

.cta-button {
  background: white;
  color: #9933ff;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.05rem;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.video-container {
  border-radius: 5px;
  width: 100%;
  padding: 5%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.352);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.video-container video,
.video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}

.scroll-indicator p {
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
