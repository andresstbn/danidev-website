<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">DaniDev</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
            <!-- <a href="/about" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="/projects" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Projects</a>
            <a href="/contact" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a> -->
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-base text-gray-400">&copy; 2024 DaniDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Layout logic can be added here if needed
</script>

<style scoped>
/* Custom styles for the layout */
</style>
