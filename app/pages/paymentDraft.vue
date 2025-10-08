<template>
  <div>
    <DialogRoot>
      <div class="py-16">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
          <div class="text-center">
            <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">
              商务合作 & Buy Me a Coffee
            </h2>
            <p class="mt-6 text-gray-700 dark:text-gray-300">
              "感谢你的支持！🎉".（i18n国际化下次更新）
            </p>
          </div>
          <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <!--  -->
            <template
              v-for="(p_channel, p_channel_key) in paymentChannels"
              :key="channel"
            >
              <div
                class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  aria-hidden="true"
                  class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                  :class="{
                    ' from-sky-500 ': p_channel_key === 'alipay',
                    ' from-green-500 ': p_channel_key === 'wechat',
                    ' from-blue-500 ': p_channel_key === 'paypal',
                    ' from-yellow-500 ': p_channel_key === 'bitcoin',
                  }"
                ></div>
                <div class="flex flex-col min-h-[200px]">
                  <!-- 修改：图标 + 标题容器 -->
                  <div class="flex items-center justify-between">
                    <div
                      class="border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                    >
                      <svg
                        v-if="p_channel_key === 'alipay'"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Alipay</title>
                        <path
                          fill="#1677FF"
                          d="M19.695 15.07c3.426 1.158 4.203 1.22 4.203 1.22V3.846c0-2.124-1.705-3.845-3.81-3.845H3.914C1.808.001.102 1.722.102 3.846v16.31c0 2.123 1.706 3.845 3.813 3.845h16.173c2.105 0 3.81-1.722 3.81-3.845v-.157s-6.19-2.602-9.315-4.119c-2.096 2.602-4.8 4.181-7.607 4.181-4.75 0-6.361-4.19-4.112-6.949.49-.602 1.324-1.175 2.617-1.497 2.025-.502 5.247.313 8.266 1.317a16.796 16.796 0 0 0 1.341-3.302H5.781v-.952h4.799V6.975H4.77v-.953h5.81V3.591s0-.409.411-.409h2.347v2.84h5.744v.951h-5.744v1.704h4.69a19.453 19.453 0 0 1-1.986 5.06c1.424.52 2.702 1.011 3.654 1.333m-13.81-2.032c-.596.06-1.71.325-2.321.869-1.83 1.608-.735 4.55 2.968 4.55 2.151 0 4.301-1.388 5.99-3.61-2.403-1.182-4.438-2.028-6.637-1.809"
                        />
                      </svg>
                      <svg
                        v-else-if="p_channel_key === 'wechat'"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>WeChat</title>
                        <path
                          fill="#07C160"
                          d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                        />
                      </svg>
                      <svg
                        v-else-if="p_channel_key === 'paypal'"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>PayPal</title>
                        <path
                          fill="#002991"
                          d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z"
                        />
                      </svg>
                      <svg
                        v-else-if="p_channel_key === 'bitcoin'"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Bitcoin</title>
                        <path
                          fill="#F7931A"
                          d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"
                        />
                      </svg>
                    </div>
                    <div
                      class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                    >
                      {{ p_channel.channel_name }}
                    </div>
                  </div>

                  <div
                    class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]"
                  >
                    <p
                      v-for="(line, idx) in p_channel.channel_info.split('\n')"
                      :key="idx"
                      class="text-gray-700 dark:text-gray-300"
                    >
                      {{ line ? line : " " }}
                    </p>
                  </div>
                  <div
                    class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                  >
                    <DialogTrigger
                      v-for="(p_method, p_method_key) in p_channel.methods"
                    >
                      <button
                        @click="currentMethod = p_method"
                        class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        <QrCodeIcon
                          v-if="p_method.isQrCode"
                          class="w-4 h-4 opacity-75"
                        />
                        <DocumentMagnifyingGlassIcon
                          v-if="!p_method.isQrCode"
                          class="w-4 h-4 opacity-75"
                        />
                        <span>{{ p_method.label }}</span>
                      </button>
                    </DialogTrigger>
                  </div>
                </div>
              </div>
            </template>

            <!-- !!!! 修改 -->
            <div
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-sky-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div class="flex flex-col min-h-[200px]">
                <!-- 修改：图标 + 标题容器 -->
                <div class="flex items-center justify-between">
                  <div
                    class="border border-sky-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-sky-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Alipay</title>
                      <path
                        fill="#1677FF"
                        d="M19.695 15.07c3.426 1.158 4.203 1.22 4.203 1.22V3.846c0-2.124-1.705-3.845-3.81-3.845H3.914C1.808.001.102 1.722.102 3.846v16.31c0 2.123 1.706 3.845 3.813 3.845h16.173c2.105 0 3.81-1.722 3.81-3.845v-.157s-6.19-2.602-9.315-4.119c-2.096 2.602-4.8 4.181-7.607 4.181-4.75 0-6.361-4.19-4.112-6.949.49-.602 1.324-1.175 2.617-1.497 2.025-.502 5.247.313 8.266 1.317a16.796 16.796 0 0 0 1.341-3.302H5.781v-.952h4.799V6.975H4.77v-.953h5.81V3.591s0-.409.411-.409h2.347v2.84h5.744v.951h-5.744v1.704h4.69a19.453 19.453 0 0 1-1.986 5.06c1.424.52 2.702 1.011 3.654 1.333m-13.81-2.032c-.596.06-1.71.325-2.321.869-1.83 1.608-.735 4.55 2.968 4.55 2.151 0 4.301-1.388 5.99-3.61-2.403-1.182-4.438-2.028-6.637-1.809"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                  >
                    支付宝
                  </div>
                </div>
                <!-- 修改 -->

                <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <ul class="text-gray-700 dark:text-gray-300">
                    <li>🔹商家经营码： 扫一扫，支持花呗，信用卡</li>
                    <li>🔹个人收钱码： 扫一扫，支持花呗</li>
                  </ul>
                </div>
                <div
                  class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.alipay_business"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>{{ paymentMethods.alipay_business.label }}</span>
                    </button>
                  </DialogTrigger>
                  <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.alipay_personal"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>{{ paymentMethods.alipay_personal.label }}</span>
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </div>
            <div
              href="#"
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div class="flex flex-col min-h-[200px]">
                <div class="flex items-center justify-between">
                  <div
                    class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                  >
                    <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 263"
              >
                <defs>
                  <linearGradient
                    id="logosSupabaseIcon0"
                    x1="20.862%"
                    x2="63.426%"
                    y1="20.687%"
                    y2="44.071%"
                  >
                    <stop offset="0%" stop-color="#249361"></stop>
                    <stop offset="100%" stop-color="#3ecf8e"></stop>
                  </linearGradient>
                  <linearGradient
                    id="logosSupabaseIcon1"
                    x1="1.991%"
                    x2="21.403%"
                    y1="-13.158%"
                    y2="34.708%"
                  >
                    <stop offset="0%"></stop>
                    <stop offset="100%" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosSupabaseIcon0)"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                ></path>
                <path
                  fill="url(#logosSupabaseIcon1)"
                  fill-opacity="0.2"
                  d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                ></path>
                <path
                  fill="#3ecf8e"
                  d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                ></path>
              </svg> -->
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>WeChat</title>
                      <path
                        fill="#07C160"
                        d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                  >
                    微信支付
                  </div>
                </div>
                <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    微信支付 的说明
                  </p>
                </div>

                <div
                  class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.wechat_business"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>打开二维码</span>
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </div>

            <div
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div class="flex flex-col min-h-[200px]">
                <div class="flex items-center justify-between">
                  <div
                    class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>PayPal</title>
                      <path
                        fill="#002991"
                        d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                  >
                    PayPal
                  </div>
                </div>
                <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>

                <div
                  class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.paypal"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>打开二维码</span>
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </div>
            <div
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-yellow-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div class="flex flex-col min-h-[200px]">
                <div class="flex items-center justify-between">
                  <div
                    class="border border-yellow-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-yellow-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Bitcoin</title>
                      <path
                        fill="#F7931A"
                        d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                  >
                    Bitcoin
                  </div>
                </div>
                <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div
                  class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.bitcoin_okx"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>打开二维码</span>
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </div>
            <!--  -->
            <div
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div class="flex flex-col min-h-[200px]">
                <div class="flex items-center justify-between">
                  <div
                    class="border border-yellow-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-yellow-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Apache</title>
                      <path
                        fill="#D22128"
                        d="M17.805 2.197v.066h.156v.44h.072v-.44h.156v-.066zm.9 0l-.175.353-.172-.353h-.087v.506h.067V2.3l.172.35h.045l.172-.35v.404h.066v-.506zm-4.257 1c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM8.27 16.45c-.117.323-.236.654-.355.992l-.005.015c-.016.046-.032.094-.05.142-.08.227-.15.432-.31.9.264.12.475.435.675.793a1.44 1.44 0 00-.466-.99c1.293.06 2.41-.27 2.99-1.217.05-.084.096-.173.14-.268-.26.333-.59.474-1.2.44 0 0-.004 0-.005.002l.004-.002c.9-.404 1.354-.79 1.754-1.433.094-.153.186-.32.28-.503-.788.81-1.702 1.04-2.664.865l-.72.078a6.43 6.43 0 00-.067.183zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142s-.66-1.07-1.436-.61zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963zm-1.376-.476a13.38 13.38 0 00-.234 1.692c0 .02-.004.04-.005.06-.28-.45-1.03-.888-1.026-.884.537.778.944 1.55 1.005 2.31-.29.058-.684-.027-1.14-.195.475.436.83.556.97.588-.434.03-.89.328-1.346.67.668-.27 1.21-.38 1.596-.29-.61 1.74-1.23 3.655-1.843 5.69a.538.538 0 00.364-.354c.11-.368.84-2.786 1.978-5.965l.097-.27.028-.078c.12-.332.246-.672.374-1.02l.09-.237v-.004L7.24 14.3c-.003.02-.01.04-.012.06z"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-auto mr-4 font-semibold text-gray-800 dark:text-white"
                  >
                    待更新
                  </div>
                </div>
                <div class="flex-1 mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p class="text-gray-700 dark:text-gray-300">.......</p>
                </div>
                <div
                  class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <!-- <DialogTrigger>
                    <button
                      @click="currentMethod = paymentMethods.bitcoin"
                      class="group rounded-xl text-sm h-8 px-3.5 flex items-center gap-1.5 font-medium text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <QrCodeIcon class="w-4 h-4 opacity-75" />
                      <span>打开二维码</span>
                    </button>
                  </DialogTrigger> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogPortal>
        <DialogOverlay
          class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
        />

        <DialogContent
          class="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none z-[100] <!-- 动画 --> transform opacity-0 scale-50 blur-3xl -rotate-15 data-[state=open]:opacity-100 data-[state=open]:blur-none data-[state=open]:rotate-0 data-[state=open]:scale-100 transition-all duration-500 dark:bg-zinc-800"
        >
          <!-- 标题 -->
          <DialogTitle
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            支付方式：{{ currentMethod.channel }}
          </DialogTitle>

          <!-- 动态描述 -->
          <DialogDescription
            class="mt-2 mb-5 text-sm text-gray-600 dark:text-gray-300"
          >
            {{ currentMethod.description }}
          </DialogDescription>

          <!-- 内容区 -->
          <div class="max-h-[50vh] overflow-y-auto p-6 pb-20">
            <div
              v-if="currentMethod.qrCodeImage"
              class="max-w-xs mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm mb-6"
            >
              <img
                :src="currentMethod.qrCodeImage"
                :alt="currentMethod.qrCodeType || 'QR Code'"
                class="w-full object-contain"
              />
            </div>
            <div class="p-4">
              <div v-if="'copyText' in currentMethod" class="p-4">
                <p v-if="'copyLabel' in currentMethod" class="...">
                  {{ currentMethod.copyLabel }}
                </p>
                <CopyField :text="currentMethod.copyText" />
              </div>
            </div>
          </div>

          <!-- 按钮 -->
          <div class="mt-6 flex justify-end space-x-3">
            <DialogClose as-child>
              <button
                class="text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300"
              >
                取消
              </button>
            </DialogClose>
            <DialogClose as-child>
              <button
                class="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
              >
                <!-- {{ currentMethod.buttonText }} -->
                确认
              </button>
            </DialogClose>
          </div>

          <!-- 关闭按钮 -->
          <DialogClose
            class="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="Close"
          >
            <Icon icon="lucide:x" class="h-5 w-5" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<script setup lang="ts">
// import { Icon } from "unplugin-icons/components/vue";
import {
  QrCodeIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";

import { Icon } from "@iconify/vue";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "reka-ui";

import { computed } from "vue";
import { id } from "@nuxt/ui/runtime/locale/index.js";

const paymentMethods = {
  alipay_business: {
    // 以这种方式为准
    id: "alipay_business",
    channel: "支付宝",
    label: "经营收钱码",
    labelInfo: "推荐使用 支持花呗 信用卡",
    qrCodeType: "alipay_business",
    qrCodeImage: "/pay2me/alipay_Business_Payment_Code.png",
    description: "请使用支付宝扫码",
    // 留下一个步骤字段 以后扩展
    isQrCode: true,
  },
  alipay_personal: {
    id: "alipay_personal",
    channel: "支付宝",
    label: "个人收钱码",
    labelInfo: "",
    qrCodeType: "alipay_personal",
    qrCodeImage: "/pay2me/alipay_personal_payment_code.png",
    description: "请使用支付宝扫码",
    isQrCode: true,
  },
  wechat_business: {
    id: "wechat_business",
    channel: "微信支付",
    label: "经营收款码",
    labelInfo: "",
    qrCodeType: "wechat_business",
    qrCodeImage: "/pay2me/wechat_Business_Payment_Code.png",
    description: "请使用支付宝扫码",
    isQrCode: true,
    //
    copyText: "#付款:哈基翼软件工作室(Mon_Panache_Studio)/聊聊需求/001", // ← 你要复制的内容
    copyLabel: "或复制以下链接，并在微信中点击跳转", // ← 说明文字
  },
  wechat_personal: {
    id: "wechat_personal",
    channel: "微信支付",
    label: "个人收款码",
    labelInfo: "",
    qrCodeType: "wechat_personal",
    qrCodeImage: "/pay2me/wechat_personal_payment_code.png",
    description: "请使用微信扫码",
    isQrCode: true,
  },
  paypal: {
    id: "paypal",
    channel: "PayPal",
    label: "个人用户名",
    labelInfo: "",
    qrCodeType: "wechat_personal",
    qrCodeImage: "/pay2me/alipay_personal_payment_code.png",
    description: "请使用PayPal-付款",
    isQrCode: false,
    copyText: "@ShengjieMo", // ← 你要复制的内容
    copyLabel: "请复制以下用户名，并在paypal中搜索用户", // ← 说明文字
  },
  bitcoin_okx: {
    id: "bitcoin_okx",
    channel: "OKX",
    label: "个人转账码",
    labelInfo: "",
    qrCodeType: "okx_personal",
    qrCodeImage: "/pay2me/okx_personal.png",
    description: "请使用OKX扫码",
    isQrCode: true,
    // title: "欧易app",
    // description: "请通过银行转账完成付款，上传转账截图。",
    // image: "/hachimi/qll_on_going.png",
    // buttonText: "提交银行转账凭证",
  },
};
const currentMethod = ref(paymentMethods.alipay_business);

const paymentChannels = {
  alipay: {
    channel_name: "支付宝",
    channel_info:
      "二维码收款\n- 经营收钱码：支持花呗，信用卡\n- 个人收钱码：支持花呗",
    methods: [paymentMethods.alipay_business, paymentMethods.alipay_personal],
  },
  wechat: {
    channel_name: "微信支付",
    channel_info: "二维码收款\n- 经营收款码：支持信用卡\n- 个人收款码",
    methods: [paymentMethods.wechat_business, paymentMethods.wechat_personal],
  },
  paypal: {
    channel_name: "PayPal",
    channel_info: "通过搜索paypaly用户进行付款",
    methods: [paymentMethods.paypal],
  },
  bitcoin: {
    channel_name: "Bitcoin",
    channel_info: "二维码收款\n- 转账二维码",
    methods: [paymentMethods.bitcoin_okx],
  },
};
</script>

<style scoped></style>
