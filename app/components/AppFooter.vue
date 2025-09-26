<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <span class="text-white font-bold text-lg">肉</span>
            </div>
            <h3 class="text-xl font-bold">肉包文化</h3>
          </div>
          <p class="text-gray-300 leading-relaxed max-w-md">
            我们是一家面向 ACG/galgame 领域的合作与推广团队。致力于与优秀会社携手，把好作品带到更多玩家身边。
          </p>
          <div class="mt-6 flex space-x-4">
            <a 
              href="https://space.bilibili.com/3546874040551694/dynamic" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-rose-400 transition-colors duration-200"
              aria-label="Bilibili"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 2.5c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1.5 15.5v-11l8 5.5-8 5.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">快速导航</h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-200">
                关于我们
              </a>
            </li>
            <li>
              <a href="#catalog" class="text-gray-300 hover:text-white transition-colors duration-200">
                商品活动
              </a>
            </li>
            <li>
              <a href="#news" class="text-gray-300 hover:text-white transition-colors duration-200">
                最新资讯
              </a>
            </li>
            <li>
              <a href="#account" class="text-gray-300 hover:text-white transition-colors duration-200">
                账户管理
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal & Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4">法律与联系</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                隐私条款
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                使用条款
              </a>
            </li>
            <li>
              <span class="text-gray-300">合作联系：邮箱稍后开放</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- User Actions -->
      <div class="border-t border-gray-800 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold mb-4">用户功能</h4>
            <div class="flex flex-wrap gap-3">
              <a 
                href="#account" 
                class="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 text-sm"
              >
                账户管理
              </a>
              <a 
                href="#news" 
                class="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 text-sm"
              >
                新闻订阅
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">备案信息</h4>
            <p class="text-gray-400 text-sm">
              ICP备案号（占位）<br>
              公安网安备案（占位）
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2025 肉包文化 Nikumann Official. 保留所有权利。
          </p>
          <div class="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for ACG community</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 静态页脚，可后续替换为动态数据。
</script>

<style scoped>
/* 移动端优化 */
@media (max-width: 768px) {
  footer {
    text-align: center;
  }
  
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .lg\:grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>
