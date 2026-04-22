<script setup>
const projects = [
  {
    id: 1,
    title: 'Recipe Website',
    description: 'Et super lærerigt og spændende projekt, hvor der skulle kodes en opskrifts hjemmeside med HTML og CSS. Det gav et godt indblik i strukturering af indhold. ',
    image: new URL('../assets/recipe.png', import.meta.url).href,
    url: 'https://rebeccakorwinlind.github.io/recipeupdated/'
  },
  {
    id: 2,
    title: 'Brødrene Løvehjerte',
    description: 'Dette var en del af mit eksamensprjekt, hvor vi skulle deisgne og udvikle en hjemmeside til amatørteateret SkarnTydens forestilling "Brødrene løvehjerte". Herunder blev der lavet en plakat til forestillingen, som skulle bruges til markedsføring. Plakaten er sammensat i Adobe InDesign.',
    image: new URL('../assets/brødrerne løvehjerte poster.png', import.meta.url).href
  },
  {
    id: 3,
    title: 'Frømand',
    description: 'Et 3D sculpt i programmet Nomad Sculpt, af en frø som "human-like" karakter.',
    image: new URL('../assets/Frog.png', import.meta.url).href
  },
  {
    id: 4,
    title: 'Copenhagen Coffee',
    description: 'Et 3D sculpt i programmet Nomad Sculpt, af et klassisk cafébord i stil med dem på de københavnske gader. Noget af det jeg fokusered emest på i dette projekt, var lyset og dét at få skummet på kaffen til at ligne "latte art".',
    image: new URL('../assets/Kaffe 3.png', import.meta.url).href
  },
  {
    id: 5,
    title: 'Mini me',
    description: 'Projektet "Mini me" var et sjovt projekt, hvor vi alle skulle lave os selv som karakter. Jeg valgtge at gå med stilen som de bruger i tegneserien "Family Guy". Jeg har store og meget markante briller, så det var noget jeg gerne ville fremhæve på min Mini me karakter. Karakteren er lavet i Adobe Illustrator.',
    image: new URL('../assets/mini me rebecca.png', import.meta.url).href
  }
]
</script>

<template>
  <div class="projects-content">
    <h1>Mine Projekter</h1>
    
    <div v-for="(project, index) in projects" :key="project.id" class="project-item" :class="{ 'reverse': index % 2 === 1 }">
      <div class="project-image" :class="{ 'large-padding': project.id === 5 }">
        <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" />
      </div>
      
      <div class="project-description">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="visit-button">
          Besøg hjemmesiden
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-content {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 2 / 12;
  color: white;
  gap: 3rem;
  align-content: start;
  padding: 4rem 0 6rem 0;
}

@media (max-width: 1024px) {
  .projects-content {
    grid-column: 1 / 13;
    padding: 2rem 1rem 6rem 1rem;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects-content {
    grid-column: 1 / 13;
    padding: 1.5rem 1rem 6rem 1rem;
    gap: 2rem;
  }

  .projects-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}

.projects-content h1 {
  font-size: 3rem;
  font-family: bebas neue, sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  text-align: center;
  grid-column: 1 / -1;
}

.project-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  grid-column: 1 / -1;
}

@media (max-width: 1024px) {
  .project-item {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .project-item {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-item.reverse {
    direction: ltr;
  }

  .project-item.reverse > * {
    direction: ltr;
  }
}

.project-item.reverse {
  direction: rtl;
}

.project-item.reverse > * {
  direction: ltr;
}

.project-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .project-image {
    padding: 1rem;
  }

  .project-image.large-padding {
    padding: 2rem;
  }
}

.project-image.large-padding {
  padding: 8rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-description h2 {
  font-size: 2rem;
  font-family: bebas neue, sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin: 0 0 0 0;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .project-description h2 {
    font-size: 1.5rem;
  }

  .project-description p {
    font-size: 1rem;
  }
}

.visit-button {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

@media (max-width: 768px) {
  .visit-button {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}

.visit-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}
</style>
