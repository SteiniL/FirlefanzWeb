<script setup>
import Navbar from '/src/components/Navbar.vue'
import Home from '/src/components/Home.vue'
import Footer from '/src/components/Footer.vue'
import NavCollapsed from './components/NavCollapsed.vue'
import Hero from './components/Hero.vue'
import Artists from './components/Artists.vue'
import LastImages from './components/LastImages.vue'

import AI_Background from './assets/AI_Background.png'

import parallex1 from '/src/assets/1.jpeg'
import parallex2 from '/src/assets/2.jpeg'
import parallex3 from '/src/assets/3.jpeg'
import backgroundimg from '/src/assets/background.webp'
import Lenis from 'lenis'

import { ref } from 'vue'
import { motion, useScroll, useTransform } from 'motion-v'

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
})

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e)
})

const target = ref(null)
const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
})

// Der Y-Versatz – Bild bewegt sich langsamer als Scroll
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

const props = defineProps({
    paralleximg: String,
})
</script>

<template>
    <div class="overflow-x-clip">
        <section
            class="sticky top-0 flex h-screen w-full place-content-center bg-slate-950 text-white"
        >
            <Hero />
        </section>

        <Navbar class="y- sticky top-0 z-50 -mt-16 hidden h-16 md:flex" />
        <NavCollapsed class="y- sticky top-4 z-50 -mt-16 flex h-16 md:hidden" />

        <!--Home-->
        <section class="relative bg-gray-300 text-black">
            <!-- Sticky Hintergrund (bleibt im Viewport) -->
            <div class="sticky top-0 h-screen overflow-hidden">
                <img
                    :src="AI_Background"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover object-center"
                />
            </div>

            <!-- Content liegt über dem Sticky-Hintergrund und scrollt normal -->
            <div class="relative z-10 -mt-[100vh]">
                <!-- Der eigentliche "Home"-Viewport -->
                <div class="grid h-screen place-content-center">
                    <h1 class="font-salted text-5xl">Imprint</h1>
                    <p
                        class="font-FuturaCondMedium text-d-mid pt-5 text-center text-3xl"
                    >
                        Imprint
                    </p>
                </div>
            </div>

            <!--Footer-->
            <Footer />
        </section>
    </div>
</template>
