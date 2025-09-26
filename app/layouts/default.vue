<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator />
    <AppHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
// 默认布局：头部 + 页面 + 底部
</script>

<style>
:global(html) {
  --brand-primary: #e11d48; /* rose-600 */
  --brand-secondary: #f43f5e; /* rose-500 */
  --brand-accent: #fb7185; /* rose-400 */
  --text-primary: #1f2937; /* gray-800 */
  --text-secondary: #6b7280; /* gray-500 */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb; /* gray-50 */
  --border-color: #e5e7eb; /* gray-200 */
}

:global(body) {
  font-family: 'Noto Sans SC', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  color: var(--text-primary);
  background: var(--bg-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:global(*, *::before, *::after) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(img) {
  max-width: 100%;
  height: auto;
}

/* 响应式字体大小 */
:global(h1) {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
}

:global(h2) {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  line-height: 1.3;
}

:global(h3) {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  line-height: 1.4;
}

/* 移动端优化 */
@media (max-width: 768px) {
  :global(body) {
    font-size: 14px;
  }
}
</style>
