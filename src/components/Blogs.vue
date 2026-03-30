<script setup>
  
import working from "@/assets/working.jpg";
import group from "@/assets/group.png";
</script>
<template>
<section class="w-4/5 mx-auto py-20">
        <h1 class="text-4xl text-neutral-950 font-semibold">News and Blogs</h1>
        <div class="flex flex-col md:flex-row justify-between items-start mt-4 mb-8">
            <p class="text-sm text-neutral-600 w-96 line-clamp-1" >Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
        <button onclick="this.parentElement.children[0].classList.toggle('line-clamp-1')"  class="text-sm underline text-primary">View All</button>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
                <div class="relative aspect-video">
                  <img :src="group.src" alt="group project" class="rounded-lg object-cover h-full w-full object-center"/>
                    <div class="text-neutral-50 py-1 px-2 text-xs bg-primary absolute top-2 left-2 rounded-full font-bold">News</div>
                </div>
                <span class="text-xs text-neutral-500">30 March 2024</span>
                <h5 class="font-bold text-neutral-900">Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024</h5>
                <p class="text-primary text-xs">Read More -></p>
            </div>
            <div class="space-y-4">
                <div class="relative aspect-video">
                  <img :src="working.src" alt="working-man" class="rounded-lg object-cover h-full w-full object-center"/>
                    <div class="text-neutral-50 py-1 px-2 text-xs bg-primary absolute top-2 left-2 rounded-full font-bold">Blog</div>
                </div>
                <span class="text-xs text-neutral-500">30 March 2024</span>
                <h5 class="font-bold text-neutral-900">How to avoid the top six most common job interview mistakes</h5>
                <p class="text-primary text-xs">Read More -></p>
            </div>

        </div>
    </section>

</template>
