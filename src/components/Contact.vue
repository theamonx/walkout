<script setup>
  import { UserIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftIcon  } from '@heroicons/vue/24/outline';
</script>
<template>
<div class="bg-sky-100 p-8 pb-2 rounded-lg mt-16">
      <h3 class="font-bold text-2xl text-neutral-900 text-center">Contact Info</h3>
      <p class="text-neutral-700 text-xs pb-6 text-center">Lorem ipsum paruel toe soe ne kama slayer</p>
      <form class="space-y-4 my-4 text-sm">
        <div class="flex gap-4">
          <div class="space-y-2">
            <p class="font-bold text-neutral-900">First Name</p>
            <div class="relative">
              <input class="w-full bg-neutral-50 text-neutral-500 p-2 pl-8 rounded-lg" placeholder="Full Name" />
              <UserIcon class="text-neutral-600 size-5 absolute top-2 left-2"/>
            </div>
          </div>
          <div class="space-y-2">
            <p class="font-bold text-neutral-900">Last Name</p>
            <div class="relative">
              <input class="w-full bg-neutral-50 text-neutral-500 p-2 pl-8 rounded-lg" placeholder="Last Name" />
              <EnvelopeIcon class="text-neutral-600 size-5 absolute top-2 left-2"/>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-bold text-neutral-900 mb-2">Phone</p>
          <div class="relative">
            <input class="w-full bg-neutral-50 text-neutral-500 p-2 pl-8 rounded-lg" placeholder="Phone Number"/>
            <PhoneIcon class="text-neutral-600 size-5 absolute top-2 left-2"/>
          </div>
        </div>
        <div class="space-y-2">
          <p class="font-bold text-neutral-900 mb-2">Message</p>
          <div class="relative">
            <textarea rows="3" class="w-full bg-neutral-50 text-neutral-500 p-2 pl-8 rounded-lg" placeholder="Your Message"></textarea>
            <ChatBubbleLeftIcon class="text-neutral-600 size-5 absolute top-3 left-2"/>
          </div>
        </div>
        <button class="bg-primary p-2 text-sm text-center w-1/2 text-neutral-50 rounded-lg font-bold">Send Message</button>
      </form>
      </div>

</template>
