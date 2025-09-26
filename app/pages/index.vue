<template>
  <main id="top" class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-20 -top-20 w-96 h-96 opacity-20">
          <img src="/bg.png" alt="动漫角色立绘" class="w-full h-full object-contain" />
        </div>
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <!-- Logo and Title -->
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-2xl">肉</span>
              </div>
              <div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  肉包文化
                </h1>
                <p class="text-lg text-rose-600 font-medium mt-1">ACG/galgame 合作平台</p>
              </div>
            </div>

            <h2 class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
              携手好会社，把好故事带到更广阔的舞台
            </h2>

            <p class="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              我们是一家面向中文受众的 ACG/galgame 品牌与合作平台，陪伴优秀的创作团队，让细腻的情感与耐看的故事，在中文世界被更多的人温柔地看见。
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                href="https://space.bilibili.com/3546874040551694/dynamic"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                aria-label="前往肉包文化 B 站空间"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 2.5c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1.5 15.5v-11l8 5.5-8 5.5z"/>
                </svg>
                关注我们的 B 站
              </a>
              <a
                href="#about"
                class="inline-flex items-center px-6 py-3 border-2 border-rose-200 text-rose-600 font-medium rounded-full hover:bg-rose-50 hover:border-rose-300 transition-all duration-200"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                了解更多
              </a>
            </div>

            <!-- Social Proof -->
            <div class="flex items-center space-x-4 pt-4">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
                <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <span class="text-sm text-gray-600">已与多家优秀会社建立合作</span>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="relative hidden lg:block">
            <div class="absolute -inset-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl blur-xl opacity-20"></div>
            <div class="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 text-center">
                  <div class="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold">合</span>
                  </div>
                  <span class="text-sm font-medium text-rose-700">合作会社</span>
                </div>
                <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-4 text-center">
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold">推</span>
                  </div>
                  <span class="text-sm font-medium text-blue-700">作品推广</span>
                </div>
                <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-4 text-center">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold">社</span>
                  </div>
                  <span class="text-sm font-medium text-green-700">社区建设</span>
                </div>
                <div class="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-4 text-center">
                  <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold">活</span>
                  </div>
                  <span class="text-sm font-medium text-purple-700">活动联动</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 sm:py-20 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">我们是谁</h2>
            </div>
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                立足中文社群，连接海外与本地。我们以伙伴关系为核心，提供发行落地、市场沟通、社区运营与品牌呈现等支持。
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                我们愿意与创作者长期同行，耐心打磨中文版本与发布节奏，尊重作品气质，同时让更多玩家理解与喜爱。
              </p>

              <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border-l-4 border-rose-400">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">我们在做什么</h3>
                <p class="text-gray-700">
                  与 galgame 会社合作，围绕中文版本规划、发行协作与活动联动展开工作；整合渠道与宣发阵地，促成跨语言交流与社区成长。
                </p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6">
            <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">合作方向</h3>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  本地化与合规
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  联合发行与渠道合作
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  品牌与活动联动
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">我们提供的能力</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">专业的服务支持，助力作品在中文社区得到更广的传播</p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
              <span class="text-white font-bold text-xl">项</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">项目统筹与进度管理</h3>
            <p class="text-gray-700 leading-relaxed">专业的项目管理，确保项目按时高质量完成，让每个环节都井然有序。</p>
          </div>

          <div class="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
              <span class="text-white font-bold text-xl">宣</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">中文宣发与媒介协作</h3>
            <p class="text-gray-700 leading-relaxed">多渠道宣传推广，扩大作品在中文市场的影响力，让好作品被更多人发现。</p>
          </div>

          <div class="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <span class="text-white font-bold text-xl">社</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">社群共建与长线沟通</h3>
            <p class="text-gray-700 leading-relaxed">建立活跃的玩家社区，保持与玩家的长期互动，让作品拥有忠实的粉丝群体。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Progress Section -->
    <section id="progress" class="py-16 sm:py-20 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">我们的合作足迹</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">与优秀会社携手，共同创造精彩</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Progress Timeline -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">P</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">与 PurpleSoftware 保持动态联动</h3>
                <p class="text-gray-700">持续开展中文社群互动与活动发布，建立深度合作关系。</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">K</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">已与 keroQ 开展合作</h3>
                <p class="text-gray-700 mb-2">举办素晴日线下活动，合作深化中，探索更多合作可能。</p>
                <a href="https://www.bilibili.com/video/BV1Jk84zeEcS/?spm_id_from=333.1387.list.card_archive.click" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  查看活动视频
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">店</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">淘宝小店</h3>
                <p class="text-gray-700 mb-2">官方周边与商品销售，为粉丝提供更多优质产品。</p>
                <a href="https://shop290418776.taobao.com/?spm=a21n57.shop_search.0.0.101beb73QEYRMR" target="_blank" class="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                  访问店铺
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">+</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">更多优质伙伴洽谈中</h3>
                <p class="text-gray-700">持续拓展合作网络，为中文玩家带来更多优秀作品，期待更多精彩合作。</p>
              </div>
            </div>
          </div>

          <!-- Partner Highlights -->
          <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">合作亮点</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              我们与 PurpleSoftware 合作推进中文面向的内容与活动协同；同时与 keroQ 的合作也在平稳推进中，持续探索更适合中文玩家的呈现与交流方式。
            </p>

            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-rose-200">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-bold">P</span>
                  </div>
                  <span class="ml-3 font-medium text-gray-900">PurpleSoftware</span>
                </div>
                <span class="text-sm text-rose-600 font-medium">合作深化中</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-200">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-bold">K</span>
                  </div>
                  <span class="ml-3 font-medium text-gray-900">keroQ</span>
                </div>
                <span class="text-sm text-blue-600 font-medium">更多信息将陆续公开</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">加入与联系</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">欢迎更多优质的 galgame 会社与我们交流，一起把好作品带给中文玩家。</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Contact Info -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 class="text-xl font-semibold mb-6">合作与联系</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-white font-bold">邮</span>
                  </div>
                  <div>
                    <div class="font-medium">邮箱联系</div>
                    <div class="text-gray-300">nikumanbunnka@gmail.com</div>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-white font-bold">群</span>
                  </div>
                  <div>
                    <div class="font-medium">QQ群交流</div>
                    <div class="text-gray-300">594943155</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 class="text-xl font-semibold mb-6">关注我们的动态</h3>
              <div class="space-y-4">
                <a
                  href="https://space.bilibili.com/3546874040551694/dynamic"
                  target="_blank"
                  class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div class="font-medium">肉包文化 B 站空间</div>
                    <div class="text-gray-400 text-sm">获取最新发布与合作信息</div>
                  </div>
                </a>

                <a
                  href="https://x.com/nikuman_114514"
                  target="_blank"
                  class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
                    <span class="text-white font-bold">T</span>
                  </div>
                  <div>
                    <div class="font-medium">Twitter</div>
                    <div class="text-gray-400 text-sm">关注我们的国际动态</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="text-center mt-8">
            <p class="text-gray-400">更多合作即将公布，敬请期待。</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// 首页为静态内容，后续可接入数据与路由。
</script>

<style scoped>
/* 动画效果 */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 响应式优化 */
@media (max-width: 640px) {
  .hero-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

/* 自定义滚动条 */
:global(::-webkit-scrollbar) {
  width: 8px;
}

:global(::-webkit-scrollbar-track) {
  background: #f1f5f9;
}

:global(::-webkit-scrollbar-thumb) {
  background: #cbd5e1;
  border-radius: 4px;
}

:global(::-webkit-scrollbar-thumb:hover) {
  background: #94a3b8;
}
</style>
