<script setup>
import { motion } from 'motion-v'
import Card from './Card.vue'
import Temp from './Temp.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

const props = defineProps({
    paralleximg: String,
})

const breakpoints = useBreakpoints({
    sm: 640,
    md: 768,
    lg: 1024,
})

const isSmall = breakpoints.smaller('sm')
const isMedium = breakpoints.between('sm', 'md')

const itemsPerRow = computed(() => {
    if (isSmall.value) return 1
    if (isMedium.value) return 2
    return 3
})

function calcPosition(index, total) {
    const cols = itemsPerRow.value

    if (cols <= 1) return 'm'
    if (cols === 2) return index % 2 === 0 ? 'l' : 'r'
    const mod = index % 3
    return mod === 0 ? 'l' : mod === 1 ? 'm' : 'r'
}

// Beispiel-Daten:
const cards = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
]

const positions = computed(() =>
    cards.map((_, i) => calcPosition(i, cards.length))
)
</script>

<template>
    <div class="">
        <section class="p-8 text-center">
            <motion.div
                class="flex"
                :initial="{ scale: 0.95 }"
                :whileInView="{ scale: 1 }"
                :transition="{
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                    mass: 0.8,
                }"
            >
                <div class="block-disappear-middle">
                    <div
                        class="bg-d-mid rounded-lg text-center text-white shadow-[0px_20px_20px_-31px_#000000]"
                    >
                        <div
                            class="bg-d-light rounded-t-lg shadow-[inset_0px_20px_20px_-31px_#ffffff]"
                        >
                            <h2 class="text-xl font-semibold text-white">
                                Welcome
                            </h2>
                        </div>
                        <div class="p-4 shadow-[0px_20px_20px_-31px_#000000]">
                            <p class="text-justify text-white">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <!-- <Temp /> -->
        </section>

        <section class="p-8">
            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <!-- <Card
                    v-for="(card, i) in cards"
                    :key="card"
                    :visibleDelay="i * 0.1"
                    :position="positions[i]"
                /> -->

                <Card
                    v-for="(card, i) in cards"
                    :key="card"
                    :position="positions[i]"
                />
            </div>
        </section>
        <section
            class="flex h-64 items-center justify-center bg-cover bg-fixed bg-center"
            :style="{ backgroundImage: `url(${paralleximg})` }"
        ></section>
    </div>
</template>
