<template>
  <div class="bg-radial from-zinc-900 to-black h-full w-full">
    <div class="grid h-full items-center justify-center perspective-dramatic">
      <button
        popovertarget="starting-popover"
        class="inline-flex w-full justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 sm:col-start-2 hover:cursor-pointer"
      >
        @starting-style
      </button>

      <div
        popover="auto"
        id="starting-popover"
        class="relative inset-y-0 mx-auto my-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left opacity-0 ring shadow-xl ring-black/5 transition-all transition-discrete duration-500 sm:w-full sm:max-w-96 sm:p-6 dark:bg-zinc-800 scale-50 blur-3xl -rotate-15 dark:inset-ring dark:inset-ring-white/5 [&:is([open],:popover-open)]:opacity-100 [&:is([open],:popover-open)]:blur-none [&:is([open],:popover-open)]:skew-x-0 [&:is([open],:popover-open)]:rotate-0 [&:is([open],:popover-open)]:scale-100 starting:[&:is([open],:popover-open)]:opacity-0 starting:[&:is([open],:popover-open)]:blur-3xl starting:[&:is([open],:popover-open)]:skew-x-15 starting:[&:is([open],:popover-open)]:-rotate-5 transform-3d starting:[&:is([open],:popover-open)]:scale-50"
      >
        <div>
          <div class="text-center sm:mt-2">
            <div
              class="text-base font-semibold text-zinc-900 dark:text-white"
              id="modal-title"
            >
              @starting-style
            </div>
            <div class="mt-2">
              <p class="text-sm text-zinc-500 dark:text-zinc-200">
                Use the
                <span
                  class="text-xs bg-white/10 rounded-xl px-1 font-mono opacity-50"
                  >starting:</span
                >
                variant to set the appearance of an element when it is first
                rendered in the DOM.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 sm:col-start-2 hover:cursor-pointer"
            popovertarget="starting-popover"
            popovertargetaction="hide"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
