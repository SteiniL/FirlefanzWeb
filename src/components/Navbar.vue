<script setup></script>

<template>
    <div class="bg-d-mid flex justify-between px-6 py-4">
        <nav class="flex w-full justify-evenly">
            <RouterLink to="/#date" class="fx-link text-white">
                Home
            </RouterLink>
            <!--
                <RouterLink to="/" class="fx-link text-white"> Tickets </RouterLink>
            -->
            <a
                href="https://tickets.firlefanz-festival.com"
                class="fx-link text-white"
            >
                Ticktes
            </a>

            <RouterLink to="/#location" class="fx-link text-white">
                Location
            </RouterLink>
            <RouterLink to="/contact/#contact" class="fx-link text-white">
                Kontakt
            </RouterLink>
        </nav>
    </div>
</template>
