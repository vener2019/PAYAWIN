<script setup></script>

<template>
    <!-- Hero Section Start -->
    <div class="bg-theme-primary">
        <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
            <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
                <div class="relative flex justify-center items-center order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 sm:mb-0">
                    <div class="h-auto max-w-full">
                        <img class="w-40 sm:w-60 md:w-60 lg:w-80 xl:w-100" src="/images/file.png" />
                    </div>

                </div>

                <div class="lg:w-5/6 order-2 lg:order-none">
                    <h3 class="text-2xl xl:text-4xl font-bold font-theme-heading text-white text-center lg:text-left">WELCOME TO</h3>
                    <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-white text-center lg:text-left">BARANGAY PAYAWIN</h1>
                    <p class="lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center text-gray-100 lg:text-left">Phone: (XXX) XXX-XXXX</p>
                    <p class="lg:text-xl mt-1 font-theme-content text-theme-grayish-blue text-center text-gray-100 lg:text-left">Email: info@barangayname.gov.ph</p>
                    <p class="lg:text-xl mt-1 font-theme-content text-theme-grayish-blue text-center text-gray-100 lg:text-left">Address: Barangay Hall, Barangay Name, City, Province, Postal Code</p>
                    <div class="flex justify-center lg:justify-start mt-10">
                        <LinkButton btn-type="red" link="#about">ABOUT US</LinkButton>
                    </div>
                </div>
                
            </section>
        </div>
    </div>
    <!-- Hero Section End -->
</template>
