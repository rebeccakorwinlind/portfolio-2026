<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitMessage = ref('')

emailjs.init('xrUWFvNNAndN81w33')

const handleSubmit = async (e) => {
  e.preventDefault()
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await emailjs.send(
      'service_wy18vlm',
      'template_ouvgnbw',
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
        to_email: 'reblin01@easv365.dk',
      }
    )

    submitMessage.value = '✓ Besked sendt! Jeg vender tilbage hurtigst muligt.'
    name.value = ''
    email.value = ''
    message.value = ''

    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('Error:', error)
    submitMessage.value = '✗ Fejl ved afsendelse. Prøv igen.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="kontakt-content">
    <h1>Kontakt mig</h1>
    
    <div class="contact-info">
      <div class="contact-item">
        <h2>Email</h2>
        <p><a href="mailto:reblin01@easv365.dk">reblin01@easv365.dk</a></p>
      </div>

      <div class="contact-item">
        <h2>Telefon</h2>
        <p><a href="tel:+4529210115">+45 29 21 01 15</a></p>
      </div>

      <div class="contact-item">
        <h2>Find mig her</h2>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/rebecca-korwin-lind-55769b242/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn%2Fp5icvtTEaszOBAKU2DFg%3D%3D" class="social-link">LinkedIn</a>
 <!--          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">GitHub</a> -->
        </div>
      </div>
    </div>

<form @submit="handleSubmit" class="contact-form">
  <div class="form-group">
    <label for="name">Navn</label>
    <input type="text" id="name" v-model="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" required>
  </div>

  <div class="form-group">
    <label for="message">Besked</label>
    <textarea id="message" v-model="message" rows="5" required></textarea>
  </div>

  <p v-if="submitMessage" class="submit-message" :class="{ success: submitMessage.includes('✓'), error: submitMessage.includes('✗') }">
    {{ submitMessage }}
  </p>

  <button type="submit" class="submit-button" :disabled="isSubmitting">
    {{ isSubmitting ? 'Sender...' : 'Send besked' }}
  </button>
</form>
  </div>
</template>

<style scoped>
.kontakt-content {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: white;
}

.kontakt-content h1 {
  font-size: 3rem;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-family: bebas neue, sans-serif;
}

.contact-item p {
  font-size: 1.1rem;
}

.contact-item a {
  color: #ffdd00;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item a:hover {
  text-shadow: 0 0 10px rgba(255, 221, 0, 0.5);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(255, 221, 0, 0.5);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: white;
  color: #9933ff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: bebas neue, sans-serif;
  letter-spacing: 0.05rem;
}

.submit-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.submit-message {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: rgba(0, 255, 0, 0.2);
  color: #00ff00;
}

.submit-message.error {
  background: rgba(255, 0, 0, 0.2);
  color: #ff6b6b;
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
