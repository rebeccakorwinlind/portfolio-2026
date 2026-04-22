<script setup>
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/Rebecca Korwin Lind CV 2026.pdf'
  link.download = 'Rebecca Korwin Lind CV 2026.pdf'
  link.click()
}
</script>

<template>
  <div class="hero">
    <div class="hero-left">
      <h1 class="hero-title">Rebecca Korwin Lind</h1>
      <p class="hero-description">Multimedie design studerende, med fokus på interaktive og visuelle oplevelser</p>
      <button class="cta-button" @click="downloadCV">Download CV</button>
    </div>
    
    <div class="hero-right">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/6H0FDdhDHPI" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  align-items: center;
  height: calc(100vh - 100px);
  gap: 3rem;
  width: 100%;
  padding-bottom: 4rem;
}

@media (max-width: 1024px) {
  .hero {
    gap: 2rem;
    height: auto;
    padding: 2rem 0 4rem 0;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: repeat(12, 1fr);
    gap: 1.5rem;
    padding: 2rem 0 4rem 0;
    height: auto;
  }
}

.hero-left {
  color: white;
  grid-column: 2 / 7;
}

@media (max-width: 1024px) {
  .hero-left {
    grid-column: 2 / 12;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-left {
    grid-column: 1 / -1;
    padding: 0 1rem;
    text-align: center;
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 500;
  margin: 0 0 0 0;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
}

.hero-description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 400px;
}

@media (max-width: 768px) {
  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.8rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.15rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .cta-button {
    font-size: 1rem;
    padding: 0.7rem 1.4rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
  color: #ffcb05;
}

.hero-right {
  display: flex;
  justify-content: center;
  grid-column: 7 / -1;
}

@media (max-width: 1024px) {
  .hero-right {
    grid-column: 2 / 12;
  }
}

@media (max-width: 768px) {
  .hero-right {
    grid-column: 1 / -1;
    padding: 0 1rem;
  }
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

@media (max-width: 768px) {
  .video-container {
    padding: 3%;
    max-width: 100%;
  }
}

.video-container video,
.video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
