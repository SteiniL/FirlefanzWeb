<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)

function toggleNav() {
    open.value = !open.value
}

// Close when clicking outside
function handleClickOutside(event) {
    const nav = document.getElementById('floating-nav')
    const button = document.getElementById('nav-toggle-btn')

    // If click is not inside the nav or button, close
    if (nav && !nav.contains(event.target) && !button.contains(event.target)) {
        open.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="fixed right-0 bottom-0 m-4 flex flex-col items-end space-y-2">
        <!-- Navigation (unfolds above) -->
        <div
            v-if="open"
            id="floating-nav"
            class="animate-slide-up bg-d-mid mb-2 rounded-lg p-4 text-white shadow-lg"
        >
            <ul class="space-y-2">
                <li>
                    <RouterLink to="/#date" class="fx-link text-white">
                        Home
                    </RouterLink>
                </li>
                <li>
                    <a
                        href="https://tickets.firlefanz-festival.com"
                        class="fx-link text-white"
                    >
                        Ticktes
                    </a>
                </li>
                <li>
                    <RouterLink to="/#location" class="fx-link text-white">
                        Location
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/#aftermovie" class="fx-link text-white">
                        Aftermovie
                    </RouterLink>
                </li>
            </ul>
        </div>

        <!-- Floating button -->
        <div
            id="nav-toggle-btn"
            @click.stop="toggleNav"
            class="bg-d-mid hover:bg-d-light flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-white"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
            </svg>
        </div>
    </div>
</template>

<style>
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slide-up 0.2s ease-out;
}
</style>
