<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/95 transition-all duration-300"
    role="banner"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="主导航">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a
            href="#top"
            class="flex items-center gap-3 text-xl font-bold tracking-tight text-gray-900 hover:text-rose-600 transition-colors duration-200"
          >
            <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg shadow-sm">
              <span class="text-white font-bold text-lg">肉</span>
            </div>
            <span class="hidden sm:inline">肉包文化</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors duration-200 relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 transition-colors duration-200"
            aria-expanded="false"
          >
            <span class="sr-only">打开主菜单</span>
            <!-- Hamburger icon -->
            <svg class="h-6 w-6" :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg class="h-6 w-6" :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { href: '#about', label: '我们是谁' },
  { href: '#services', label: '服务能力' },
  { href: '#progress', label: '当前进展' },
  { href: '#contact', label: '联系我们' },
]
</script>

<style scoped>
/* 移动端优化 */
@media (max-width: 768px) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* 滚动时头部阴影效果 */
header.scrolled {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
