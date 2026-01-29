<script setup>
import Navbar from '/src/components/Navbar.vue'
import Home from '/src/components/Home.vue'
import Footer from '/src/components/Footer.vue'
import NavCollapsed from './components/NavCollapsed.vue'
import Hero from './components/Hero.vue'
import Artists from './components/Artists.vue'
import LastImages from './components/LastImages.vue'

import parallex1 from '/src/assets/1.jpeg'
import parallex2 from '/src/assets/2.jpeg'
import parallex3 from '/src/assets/3.jpeg'
//import backgroundimg from '/src/assets/background.webp'

import AI_Background from './assets/AI_Background.png'
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

        <!--
            <Navbar class="y- sticky top-0 z-50 -mt-16 hidden h-16 md:flex" />
            -->
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
            <div class="relative z-10 -mt-[100vh]" id="date">
                <!-- Der eigentliche "Home"-Viewport -->
                <div class="grid h-screen place-content-center">
                    <h1 class="font-salted text-5xl">Firlefanz Festival</h1>
                    <p
                        class="font-FuturaCondMedium text-d-mid pt-5 text-center text-3xl"
                    >
                        Fr 31.07.2026 - So 02.08.2026
                    </p>
                </div>

                <section id="location">
                    <div class="grid h-screen place-content-center">
                        <h1 class="font-salted text-center text-5xl">
                            Location
                        </h1>
                        <div class="mx-auto max-w-[70vw]">
                            <p
                                class="font-FuturaCondMedium text-d-mid pt-5 text-justify text-2xl hyphens-auto [text-align-last:justify]"
                                lang="de"
                            >
                                Dieses Jahr verändert sich bei uns einiges:
                                größeres Team, größeres Festival – und damit wir
                                mehr Leuten Platz zum Tanzen geben können,
                                ziehen wir auch um. Firlefanz 2026 findet an der
                                Talsperre Euba, Nähe Chemnitz statt.
                            </p>
                            <p
                                class="font-FuturaCondMedium text-d-mid pt-5 text-center text-2xl hyphens-auto"
                                lang="de"
                            >
                                📍 Talsperre Euba<br />
                                Eubaer Straße 233<br />
                                09128 Chemnitz<br />
                            </p>
                            <p
                                class="font-FuturaCondMedium text-d-mid pt-5 text-center text-2xl hyphens-auto"
                                lang="de"
                            >
                                Mehr Raum, mehr Natur, mehr Luft zum Tanzen in
                                einer richtig schönen Umgebung.
                            </p>
                        </div>
                        <div class="flex justify-center">
                            <iframe
                                class="mt-10 w-[70vw] max-w-[600px] shadow-2xl"
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1560.1704503567232!2d13.009482148715483!3d50.832892145212654!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1769696093774!5m2!1sen!2sde"
                                height="450"
                                style="border: 1px solid black"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <div class="mt-[20vh]"></div>
            </div>

            <!--Footer-->
            <Footer />
        </section>
    </div>
</template>
