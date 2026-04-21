<script setup>
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
}

.hero-left {
  color: white;
  grid-column: 2 / 7;
}

.hero-title {
  font-size: 4rem;
  font-weight: 500;
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

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.hero-right {
  display: flex;
  justify-content: center;
  grid-column: 7 / -1;
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
</style>
