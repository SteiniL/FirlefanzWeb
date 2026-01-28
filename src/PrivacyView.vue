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
                    <h1 class="font-salted text-5xl">Privacy</h1>
                    <p
                        class="font-FuturaCondMedium text-d-mid pt-5 text-center text-3xl"
                    >
                        Privacy
                    </p>
                </div>
            </div>

            <!--Footer-->
            <footer class="group bg-slate-950 text-white">
                <h1
                    class="translate-y-20 bg-linear-to-r from-gray-400 to-gray-800 bg-clip-text text-center text-[12vw] leading-[100%] font-semibold text-transparent uppercase transition-all ease-linear group-hover:translate-y-4"
                >
                    Firlefanz
                </h1>

                <section
                    class="relative z-10 rounded-tl-full rounded-tr-full bg-black"
                >
                    <div class="mx-auto max-w-6xl px-6 pt-12 pb-10">
                        <!-- Top row -->
                        <div class="grid gap-10 md:grid-cols-2 md:items-center">
                            <!-- Left: Instagram + Email -->
                            <div class="flex items-center justify-center gap-4">
                                <!-- Instagram -->
                                <a
                                    href="https://www.instagram.com/firlefanz.festival/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Zm0 1.5A3.25 3.25 0 0 0 4.25 7.5v9A3.25 3.25 0 0 0 7.5 19.75h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 16.5 4.25h-9Zm10.25 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                                        />
                                    </svg>
                                </a>

                                <!-- Email -->
                                <a
                                    href="mailto:kontakt@firlefanz-festival.com"
                                    aria-label="E-Mail"
                                    class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4.75 6.5A2.75 2.75 0 0 1 7.5 3.75h9A2.75 2.75 0 0 1 19.25 6.5v11A2.75 2.75 0 0 1 16.5 20.25h-9A2.75 2.75 0 0 1 4.75 17.5v-11Zm2.75-1.25a1.25 1.25 0 0 0-1.25 1.25v.4l6.9 4.34a1.25 1.25 0 0 0 1.3 0l6.9-4.34v-.4A1.25 1.25 0 0 0 16.5 5.25h-9Zm10.25 3.4-2.5 1.57a2.75 2.75 0 0 1-2.9 0l-2.5-1.57-3.35-2.11V17.5c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25V6.54l-3.35 2.11Z"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <!-- Right: Telefunk -->
                            <div class="">
                                <h3 class="font-salted text-lg font-semibold">
                                    Firlefunk
                                </h3>
                                <p class="mt-3 text-xs text-white/70">
                                    Du möchtest keinen Firlefanz verpassen? Dann
                                    abonniere uns auf Instagram oder Telegram
                                </p>
                            </div>
                        </div>

                        <!-- Bottom -->
                        <div class="mt-10 border-t border-white/10 pt-6">
                            <p class="text-center text-sm text-white/60">
                                © 2026. All rights reserved.
                            </p>

                            <nav
                                class="mt-4 flex flex-wrap gap-x-6 gap-y-2 md:justify-center"
                            >
                                <RouterLink
                                    to="/contact"
                                    class="text-sm text-white/80 transition hover:text-white"
                                >
                                    Kontakt </RouterLink
                                ><RouterLink
                                    to="/imprint"
                                    class="text-sm text-white/80 transition hover:text-white"
                                >
                                    Impressum </RouterLink
                                ><RouterLink
                                    to="/privacy"
                                    class="text-sm text-white/80 transition hover:text-white"
                                >
                                    Privacy
                                </RouterLink>
                                <RouterLink
                                    to="/agb"
                                    class="text-sm text-white/80 transition hover:text-white"
                                >
                                    AGB
                                </RouterLink>
                            </nav>
                        </div>
                    </div>
                </section>
            </footer>
        </section>
    </div>
</template>
