<template>
    <div
        class="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[54px_54px]"
    ></div>
    <div class="flex min-h-dvh items-center justify-center bg-gray-100">
        <motion.div
            :initial="{ opacity: 0 }"
            :whileInView="{ opacity: 1 }"
            class="absolute h-32 w-32 rounded-xl bg-blue-500"
        />
    </div>
</template>

<script setup></script>
