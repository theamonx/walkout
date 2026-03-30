<script setup>
   import company1 from "@/assets/companies/Logo.svg";
   import company2 from "@/assets/companies/Logo-1.svg";
   import company3 from "@/assets/companies/Logo-2.svg";
   import company4 from "@/assets/companies/Logo-3.svg";
   import company5 from "@/assets/companies/Logo-4.svg";

   import { BookmarkIcon, BriefcaseIcon, ClockIcon, WalletIcon, MapPinIcon  } from '@heroicons/vue/24/outline';  
   import Job from '@/services/jobTemplate.js';
  let jobs = [];


   jobs[0] = new Job("Forward Security Director", "Bauch, Schuppe and Schulist Co", company1 , "Hotel & Tourism", true, 40000, 42000, "New Delhi");
   jobs[1] = new Job("Regional Creative Facilitator", "Bauch, Schuppe and Schulist Co", company2 , "Hotel & Tourism", true, 40000, 42000, "New Delhi");
   jobs[2] = new Job("Forward Security Director", "Bauch, Schuppe and Schulist Co", company3 , "Hotel & Tourism", true, 40000, 42000, "New Delhi");
   jobs[3] = new Job("Forward Security Director", "Bauch, Schuppe and Schulist Co", company4 , "Hotel & Tourism", true, 40000, 42000, "New Delhi");
   jobs[4] = new Job("Forward Security Director", "Bauch, Schuppe and Schulist Co", company5 , "Hotel & Tourism", true, 40000, 42000, "New Delhi");
</script>
<template>
<div v-for="job in jobs" class="space-y-8">
                <div class="flex justify-between">
                    <div class="flex flex-col md:flex-row gap-4 md:items-center">
                        <img :src="job.logo.src" class="w-8 h-8" />
                        <div>
                            <h5 class="text-neutral-800 font-bold text-xl">{{ job.role }}</h5>
                            <p class="text-neutral-700 text-sm">{{ job.company }}</p>
                        </div>
                    </div>
                    <BookmarkIcon class="size-6 text-primary"/>
                </div>
                <div class="flex flex-col gap-4 md:flex-row justify-between md:items-center">
                    <div class="flex flex-col md:flex-row gap-4 text-xs md:text-sm">
                        <div class="flex gap-2">
                            <BriefcaseIcon class="size-5 text-primary" />
                            <span>{{ job.category }}</span>
                        </div>
                        <div class="flex gap-2">
                            <ClockIcon class="size-5 text-primary" />
                            <span>{{ job.timing }}</span>
                        </div>
                        <div class="flex gap-2">
                            <WalletIcon class="size-5 text-primary" />
                            <span>{{ job.lsalary }} - {{ job.usalary }}</span>
                        </div>
                        <div class="flex gap-2">
                            <MapPinIcon class="size-5 text-primary" />
                            <span>{{ job.region }}</span>
                        </div>
                    </div>
                    <a href="/job_details" class="bg-primary py-2 px-4 w-full md:w-40 text-center rounded-lg text-neutral-100 text-xs md:text-sm font-bold">Job Details</a>
                </div>
            </div>

</template>
