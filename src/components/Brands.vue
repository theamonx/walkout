<script setup>
import brand1 from '@/assets/logos/logo-2.svg';
import brand2 from '@/assets/logos/logo-2.svg';
import brand3 from '@/assets/logos/logo-3.svg';
import brand4 from '@/assets/logos/logo.svg';
import brand5 from '@/assets/logos/logos.svg';


</script>
<template>
  <div class="h-24 flex justify-around items-center overflow-hidden gap-4">
      <img :src="brand1.src" alt="brand1" class="h-12 w-fit" />
      <img :src="brand2.src" alt="brand2" class="h-12 w-fit" />
      <img :src="brand3.src" alt="brand3" class="h-12 w-fit" />
      <img :src="brand4.src" alt="brand4" class="h-12 w-fit" />
      <img :src="brand5.src" alt="brand5" class="h-12 w-fit" />
    </div>
  
</template>
