<script setup>
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'
import { useTransform } from 'motion-v'

import logo_neu_neu from '../assets/logo_neu_neu_h.png'
import logo_neu_neu_h from '../assets/logo_neu_neu_h.png'
import hero from '../assets/hero.png'

const { y } = useScroll(window)

const scale = computed(() => {
    const factor = Math.min(y.value / 1000, 1)
    return 1 + factor
})

const brightness = computed(() => {
    // max scroll-Wert, ab dem das Bild ganz schwarz wird
    const maxScroll = 600
    // lineare Abnahme von 1 → 0
    const value = 1 - Math.min(y.value / maxScroll, 1)
    return value
})
</script>

<template>
    <section class="relative h-screen w-full overflow-hidden">
        <img
            :src="hero"
            alt="Hero"
            class="absolute inset-0 h-full w-full object-cover"
            :style="{ filter: `brightness(${brightness})` }"
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <div
            class="relative z-10 flex h-full items-center justify-center p-4 md:hidden"
        >
            <img
                :src="logo_neu_neu_h"
                alt="Logo"
                class="max-h-screen max-w-screen overflow-hidden object-contain transition-transform duration-300 ease-out"
                :style="{ transform: `scale(${scale})` }"
            />
        </div>

        <div
            class="relative z-10 hidden h-full items-center justify-center p-4 md:flex"
        >
            <img
                :src="logo_neu_neu"
                alt="Logo"
                class="max-h-screen max-w-screen overflow-hidden object-contain transition-transform duration-300 ease-out"
                :style="{ transform: `scale(${scale})` }"
            />
        </div>
    </section>
</template>

<!-- <script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

const { y } = useScroll(window)
const vh = ref(1)

onMounted(() => {
    vh.value = window.innerHeight || 1
})

// Fortschritt von 0 → 1 über genau eine Bildschirmhöhe
const progress = computed(() => {
    const p = y.value / vh.value
    return Math.max(0, Math.min(p, 1))
})

// Animationen
const logoScale = computed(() => 1 + progress.value * 0.6) // 1 → 1.6
const heroDarkness = computed(() => 0.4 + progress.value * 0.35) // 0.40 → 0.75
const nextOpacity = computed(() => progress.value) // 0 → 1
const nextTranslate = computed(() => 40 - 40 * progress.value) // 40px → 0px
</script>

<template>
    <main class="snap-y snap-mandatory">
        <section class="relative h-[200vh] snap-start">
            <div class="sticky top-0 h-screen overflow-hidden">
                <img
                    src="/src/assets/hero.jpg"
                    alt="Hero"
                    class="absolute inset-0 h-full w-full object-cover"
                />

                <div
                    class="absolute inset-0"
                    :style="{ backgroundColor: `rgba(0,0,0,${heroDarkness})` }"
                ></div>

                <div
                    class="absolute inset-0 z-1 flex items-center justify-center"
                    :style="{
                        opacity: nextOpacity,
                        transform: `translateY(${nextTranslate}px)`,
                    }"
                ></div>

                <div
                    class="relative z-2 flex h-full items-center justify-center"
                >
                    <img
                        src="/src/assets/logo-transp.webp"
                        alt="Logo"
                        class="mx-auto w-10/12 rounded-lg transition-transform duration-150 ease-out will-change-transform sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                        :style="{ transform: `scale(${logoScale})` }"
                    />
                </div>
            </div>
        </section>
    </main>
</template>
-->
