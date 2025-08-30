<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
    <div class="prose prose-lg text-gray-600">
      <p class="mb-4">
        Hi, I'm Dani! I'm a passionate full-stack developer with expertise in modern web technologies.
        I love building user-friendly applications that solve real-world problems.
      </p>
      <p class="mb-4">
        My journey in software development started with curiosity and has evolved into a deep passion
        for creating elegant, efficient, and scalable solutions.
      </p>
      <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-4 rounded-lg shadow-sm border">
          <h3 class="font-medium text-gray-800">Frontend</h3>
          <p class="text-sm text-gray-600">Vue.js, React, TypeScript, Tailwind CSS</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border">
          <h3 class="font-medium text-gray-800">Backend</h3>
          <p class="text-sm text-gray-600">Node.js, Python, Databases, APIs</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm border">
          <h3 class="font-medium text-gray-800">DevOps</h3>
          <p class="text-sm text-gray-600">Docker, CI/CD, Cloud Platforms</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About'
})
</script>
