<script setup>
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Add your project description here. This is where you can explain what the project is about, the technologies used, and your role in creating it.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Add your project description here. This is where you can explain what the project is about, the technologies used, and your role in creating it.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Add your project description here. This is where you can explain what the project is about, the technologies used, and your role in creating it.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Add your project description here. This is where you can explain what the project is about, the technologies used, and your role in creating it.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Add your project description here. This is where you can explain what the project is about, the technologies used, and your role in creating it.',
    image: 'https://via.placeholder.com/400x300'
  }
]
</script>

<template>
  <div class="projects-content">
    <h1>Mine Projekter</h1>
    
    <div v-for="(project, index) in projects" :key="project.id" class="project-item" :class="{ 'reverse': index % 2 === 1 }">
      <div class="project-image">
        <img :src="project.image" :alt="project.title" />
      </div>
      
      <div class="project-description">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
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
  padding: 4rem 0;
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
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 4 / 3;
}

.project-description h2 {
  font-size: 2rem;
  font-family: bebas neue, sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin: 0 0 1rem 0;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
