<template>
  <div class="max-w-6xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-5xl font-light text-gray-900 mb-6">Daniel Andrés Esteban</h1>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Ingeniero de software con más de 5 años de experiencia desarrollando soluciones tecnológicas 
        seguras, escalables y mantenibles.
      </p>
      <div class="flex justify-center space-x-4">
        <a href="/projects" class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-sm font-medium transition-colors">
          Ver Proyectos
        </a>
        <a href="/contact" class="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-sm font-medium transition-colors">
          Contactar
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8 text-center">Sobre mí</h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-gray-700 leading-relaxed mb-6">
          Mi enfoque está en arquitectura de software, buenas prácticas de desarrollo y cumplimiento de estándares 
          de seguridad (PCI DSS, EMV). Trabajo principalmente con Python, Django, TypeScript, NestJS y Vue/Nuxt, 
          construyendo tanto microservicios cloud-native en AWS y GCP como aplicaciones móviles y web modernas.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Me considero un entusiasta del aprendizaje continuo con mentalidad de crecimiento, siempre buscando 
          formas de optimizar procesos, mejorar equipos y entregar software de calidad.
        </p>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8 text-center">Experiencia Destacada</h2>
      <div class="space-y-8 max-w-4xl mx-auto">
        <div class="border-l-4 border-gray-300 pl-6">
          <h3 class="text-xl font-medium text-gray-900 mb-2">Tech Lead en Wompi (Bancolombia Group)</h3>
          <p class="text-gray-600 mb-3">
            Lidero la plataforma de pagos presenciales, diseñando microservicios en AWS y aplicaciones móviles 
            con React Native. Defino lineamientos técnicos, guío equipos de backend, mobile y DevOps, e integro 
            soluciones con procesadores como Nequi, Fiserv y RBM.
          </p>
        </div>
        
        <div class="border-l-4 border-gray-300 pl-6">
          <h3 class="text-xl font-medium text-gray-900 mb-2">Consultor Externo en Datak SAS</h3>
          <p class="text-gray-600 mb-3">
            Diseñé una arquitectura cloud-native en Google Cloud (Django, Nuxt, Cloud SQL, GAE) y lideré el 
            equipo de ingeniería para acelerar la entrega de productos SaaS contables.
          </p>
        </div>
        
        <div class="border-l-4 border-gray-300 pl-6">
          <h3 class="text-xl font-medium text-gray-900 mb-2">Experiencia en Banca y Telecomunicaciones</h3>
          <p class="text-gray-600">
            Lideré equipos de desarrollo en Davivienda, integrando servicios en Google Cloud, y trabajé en 
            proyectos para Iotel/Erictel e Inmetar, construyendo desde SPAs en VueJS hasta sistemas ERP 
            integrados con maquinaria industrial.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8 text-center">Habilidades Técnicas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-sm border border-gray-200">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Lenguajes & Frameworks</h3>
          <p class="text-gray-600 text-sm">Python (Django/DRF), TypeScript (NestJS, Node.js), Vue 3/Nuxt 3, React Native</p>
        </div>
        
        <div class="bg-white p-6 rounded-sm border border-gray-200">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Cloud & DevOps</h3>
          <p class="text-gray-600 text-sm">GCP, AWS, Azure DevOps, Docker, Kubernetes, CI/CD</p>
        </div>
        
        <div class="bg-white p-6 rounded-sm border border-gray-200">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Arquitectura & Seguridad</h3>
          <p class="text-gray-600 text-sm">Microservicios, DDD, Secure-SDLC, PCI DSS & EMV</p>
        </div>
        
        <div class="bg-white p-6 rounded-sm border border-gray-200">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Bases de Datos & Mensajería</h3>
          <p class="text-gray-600 text-sm">PostgreSQL, MongoDB, Redis, WebSockets</p>
        </div>
        
        <div class="bg-white p-6 rounded-sm border border-gray-200">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Frontend</h3>
          <p class="text-gray-600 text-sm">HTML, SASS, TailwindCSS, Bootstrap 5</p>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8 text-center">Formación</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div class="text-center">
          <h3 class="text-lg font-medium text-gray-900">M.Sc. en Ingeniería de Software e IS</h3>
          <p class="text-gray-600">Universidad Internacional de La Rioja, España</p>
        </div>
        <div class="text-center">
          <h3 class="text-lg font-medium text-gray-900">B.Sc. en Ingeniería Electrónica</h3>
          <p class="text-gray-600">Universidad Francisco de Paula Santander, Colombia</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- <section class="text-center">
      <div class="bg-gray-50 p-8 rounded-sm">
        <h2 class="text-2xl font-light text-gray-900 mb-4">¿Interesado en colaborar?</h2>
        <p class="text-gray-600 mb-6">Estoy disponible para proyectos freelance y oportunidades laborales</p>
        <a href="/contact" class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-sm font-medium transition-colors">
          Conversemos
        </a>
      </div>
    </section> -->
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Daniel Esteban - Ingeniero de Software'
})
</script>
