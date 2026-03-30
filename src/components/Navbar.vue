<script setup>
    import { BriefcaseIcon } from '@heroicons/vue/24/outline';
    import CallToAction from '@/components/CallToAction.vue';
</script>
<template>
     <nav class="absolute top-0 left-0 w-full z-50 bg-linear-to-b from-neutral-950 via-neutral-950 to-transparent p-4 text-neutral-100 flex gap-4 justify-between items-center">
         <div class="flex gap-1 items-center text-md font-bold">
             <BriefcaseIcon class="size-6 text-neutral-100" />
             <span>Job Portal</span>
         </div>
         <div class="hidden md:flex gap-12 text-sm font-semibold text-neutral-300">
            <a href="/" class="hover:text-neutral-100">Home</a>
            <a href="/jobs" class="hover:text-neutral-100">Jobs</a>
            <a href="/about" class="hover:text-neutral-100">About</a>
            <a href="/contact" class="hover:text-neutral-100">Contact</a>
         </div>
         <div class="flex gap-8">
            <button class="text-neutral-300 font-bold text-sm">Login</button>
            <CallToAction />
         </div>
        <!-- Using 'route()' requires Ziggy, which is included in most starter kits -->
    </nav>
</template>
