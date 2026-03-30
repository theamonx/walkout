<script setup>
  import { ref } from 'vue';
  import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
  import {XCircleIcon } from '@heroicons/vue/24/solid'; const faqIndex = ref(0);

const faqs = [
  {
    ques: "How can I book an appointment? ",
    ans: "You can book an appointment by visiting our website and using our online booking system. You can also call our salon directly or visit us in person to schedule an appointment. ",
  },
  {
    ques: "What are your operating hours?",
    ans: "Our salon operates from [Opening Time] to [Closing Time] on [Days of the week]. Please refer to our Contact page for specific timings. ",
  },
  {
    ques: "Do you offer services for men as well? ",
    ans: "Yes, we offer a range of services tailored for men, including haircuts, grooming, skincare, and spa treatments.",
  },
  {
    ques: "Can I cancel or reschedule my appointment? ",
    ans: "Yes, you can cancel or reschedule your appointment. We kindly ask for at least [ 1 days] notice for any changes to your booking. ",
  },
  {
    ques: "Do you offer bridal and special occasion packages? ",
    ans: "Yes, we have specialized packages for brides, grooms, and individuals preparing for special occasions. Please visit our Bridal and Special Occasions page for more details.",
  },
  {
    ques: "Can I purchase gift cards for your services? ",
    ans: "Yes, we offer gift cards that can be used for any of our services. They make great gifts for friends and loved ones. ",
  },
  {
    ques: "What products do you use in your salon?",
    ans: "We use a curated selection of high-quality and trusted brands in our salon. Our stylists and technicians are trained to recommend products that best suit your needs.",
  },
  {
    ques: "Is there parking available at your salon? ",
    ans: "Yes, we have convenient parking facilities available for our clients. Please refer to our Location page for specific details. ",
  },
]

</script>
<template>
     <div class="text-center space-y-4 mb-16">
            <h1 class="text-4xl font-bold text-neutral-950">Frequently Asked Questions</h1>
            <p class="line-clamp-1 text-neutral-700 text-sm w-2/3 mx-auto">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar.</p>
        </div>
        <div>
          <div v-for="(faq, index) in faqs">
            <div v-if="faqIndex == index" class="bg-sky-100 flex gap-8 p-8 rounded-xl items-start">
              <span class="text-xl font-bold text-green-400">0{{ index + 1 }}</span>
              <div>
                <h5 class="font-bold text-neutral-800">{{ faq.ques }}</h5>
                <p class="text-neutral-600 text-sm mt-2">{{ faq.ans }}</p>
              </div>
              <button @click="faqIndex = NULL" class="ml-auto">
                <XCircleIcon class="text-green-400 size-8" />
              </button>
            </div>
            <div v-else class="flex gap-8 p-8 items-start">
              <span class="text-xl font-bold text-green-400">0{{ index + 1 }}</span>
              <div>
                <h5 class="font-bold text-neutral-800">{{ faq.ques }}</h5>
              </div>
              <button @click="faqIndex = index" class="ml-auto">
                <PlusCircleIcon class="text-green-400 size-8" />
              </button>
            </div>
          </div>
        </div>


</template>
