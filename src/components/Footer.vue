<script setup>
    import { BriefcaseIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <footer class="bg-neutral-950 text-center md:text-left text-neutral-50 p-20 pb-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-16">
            <div class="col-span-2 md:col-span-1 flex flex-col justify-between items-center md:items-start">
                <div class="space-y-4">
                    <div class="flex gap-1 justify-center md:justify-start">
                        <BriefcaseIcon class="size-5"/>
                        <span class="font-bold">Job</span>
                    </div>
                    <p class="line-clamp-3 text-sm font-bold">Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.</p>
                </div>
                <div>
                    <span class="text-[11px] font-bold text-neutral-500">© Copyright Job Portal  2024. Devloped by Amon & Designed by Figma.guru</span>
                </div>
            </div>
            <div class="">
                <h5 class="font-bold text-lg mb-2">Company</h5>
                <ul class="text-sm">
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Partners</li>
                    <li>For Candidates</li>
                    <li>For Employers</li>
                </ul>
            </div>
            <div>
                <h5 class="font-bold text-lg mb-2">Job Categories</h5>
                <ul class="text-sm">
                    <li>Telecommunication</li>
                    <li>Hotel & Tourism</li>
                    <li>Construction</li>
                    <li>Education</li>
                    <li>Financial Services</li>
                </ul>
            </div>
            <div class=" col-span-2 md:col-span-1 flex justify-between flex-col">
                <div class="space-y-4">
                    <h5 class="font-bold text-2xl">Newsletter</h5>
                    <p class="text0xs text-neutral-300">enim pellentesque viverra tellus eget malesuada facilisis.</p>
                    <form class="space-y-2 ">
                        <input type="text" name="email" class="w-full border rounded-lg p-2 text-sm border-neutral-200" placeholder="Email Address"/>
                        <button class="bg-sky-500 p-2 w-full text-center font-bold rounded-lg">Subscribe Now</button>
                    </form>
                </div>
                <div class="flex gap-16 underline font-bold mt-8 text-sm justify-between text-neutral-200">
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                </div>
            </div>
        </div>
    </footer>
</template>
