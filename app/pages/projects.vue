<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">My Projects</h1>
    <p class="text-xl text-gray-600 mb-8">Here are some of the projects I've worked on</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">E-commerce Platform</h3>
          <p class="text-gray-600 mb-4">A full-stack e-commerce solution built with Vue.js and Node.js</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
          <p class="text-gray-600 mb-4">A collaborative task management application with real-time updates</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
            <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">TypeScript</span>
            <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Firebase</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Portfolio Website</h3>
          <p class="text-gray-600 mb-4">A modern portfolio website built with Nuxt.js and Tailwind CSS</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Nuxt.js</span>
            <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
            <span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Tailwind CSS</span>
          </div>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Projects'
})
</script>
