<script setup>
import { motion, useScroll, useTransform } from 'motion-v'
import { ref, watchEffect } from 'vue'

const props = defineProps({
    position: { type: String, required: true },
    visibleDelay: { type: Number, default: 0 },
})

const target = ref(null)
const { scrollYProgress } = useScroll({
    target,
    offset: ['start 50%', 'end start'],
})

// x als Ref halten und bei Positionswechsel neu binden
const x = ref()

watchEffect(() => {
    const range =
        props.position === 'l'
            ? [0, -20]
            : props.position === 'r'
              ? [0, 20]
              : [0, 0]
    x.value = useTransform(scrollYProgress, [0, 1], range)
})
</script>

<template>
    <motion.div
        ref="target"
        :initial="{ y: -10, scale: 0.99 }"
        :whileInView="{ y: 0, scale: 1 }"
        :style="{ x }"
        :transition="{
            type: 'spring',
            stiffness: 300,
            damping: 10,
            mass: 0.8,
            delay: visibleDelay,
        }"
    >
        <div class="bg-d-mid card block-disappear-left">
            <div class="bg-d-light rounded-t-lg px-4 py-2 text-left">
                <h1>Head</h1>
            </div>
            <div
                class="grid grid-cols-3 gap-2 rounded-t-lg px-4 py-2 text-left"
            >
                <div class="col-span-2">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor
                    </p>
                </div>
                <div
                    class="bg-d-highlight col-span-1 aspect-square rounded-md"
                ></div>
            </div>
        </div>
    </motion.div>
</template>
