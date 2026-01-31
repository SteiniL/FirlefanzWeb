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
                <div class="h-[10svh]"></div>
                <div
                    class="ml-[15vw] grid h-auto max-w-[70vw] place-content-center"
                >
                    <h1 class="font-salted text-5xl">
                        Allgemeine Geschäftsbedingungen
                    </h1>
                    <p
                        class="font-FuturaCondMedium text-d-mid pt-5 text-left text-3xl"
                    >
                        für das Festival „Firlefanz“ des Firlefanz e.V.<br /><br />

                        <b>§ 1 Geltungsbereich und Veranstalter</b><br /><br />
                        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für
                        die Teilnahme am Festival „Firlefanz“ (im Folgenden:
                        „Festival“) und den Erwerb von Tickets über die Webseite
                        www.firlefanz-festival.com sowie für alle damit
                        verbundenen Leistungen.<br /><br />
                        Veranstalter des Festivals ist der nicht eingetragene
                        Verein:<br />
                        Firlefanz e.V.<br />
                        Königsbrücker Str. 54<br />
                        01099 Dresden<br /><br />
                        Mail: kontak(at)firlefanz-festival.com<br /><br />
                        (im Folgenden: „Veranstalter“)<br /><br />
                        Mit dem Kauf eines Tickets bzw. dem Betreten des
                        Festivalgeländes akzeptieren die Teilnehmer*innen diese
                        AGB in ihrer jeweils gültigen Fassung.<br /><br />

                        <b>§ 2 Vertragsgegenstand und Ticketkauf</b><br /><br />
                        Mit dem Erwerb eines Tickets wird eine
                        Wochenendmitgliedschaft im Firlefanz e.V. abgeschlossen.
                        Diese ist befristet und endet automatisch mit dem Ende
                        des Festivals. Sie berechtigt zum Zutritt zum
                        Veranstaltungsgelände sowie zur Nutzung der angebotenen
                        Leistungen im Rahmen der Festivaldurchführung.<br /><br />
                        Der Vertrag kommt zustande, sobald der Ticketkauf über
                        die Webseite erfolgreich abgeschlossen und die Zahlung
                        bestätigt wurde. Der Veranstalter behält sich vor,
                        Bestellungen im Einzelfall ohne Angabe von Gründen
                        abzulehnen.<br /><br />
                        Die Anzahl der Tickets ist limitiert. Es besteht kein
                        Anspruch auf Erwerb eines Tickets nach Erschöpfung des
                        Kontingents.<br /><br />
                        Das Ticket ist personalisiert und grundsätzlich nicht
                        übertragbar. Eine Weitergabe ist nur mit schriftlicher
                        Zustimmung des Veranstalters möglich.<br /><br />

                        <b>§ 3 Preise und Zahlungsbedingungen</b><br /><br />
                        Alle angegebenen Preise verstehen sich als Endpreise
                        inklusive etwaig anfallender gesetzlicher Umsatzsteuer
                        (sofern anwendbar).<br /><br />
                        Die Bezahlung erfolgt über die auf der Website
                        angebotenen Zahlungsmethoden (z. B. PayPal, Kreditkarte,
                        Sofortüberweisung etc.).<br /><br />
                        Der Versand der Tickets erfolgt digital per E-Mail
                        unmittelbar nach erfolgreichem Zahlungseingang.<br /><br />

                        <b>§ 4 Widerrufsrecht</b><br /><br />
                        Da es sich um eine Veranstaltung mit einem spezifischen
                        Termin handelt, besteht kein Widerrufsrecht gemäß § 312g
                        Abs. 2 Nr. 9 BGB. Eine Rückgabe oder Erstattung von
                        Tickets ist ausgeschlossen, es sei denn, die
                        Veranstaltung wird abgesagt.<br /><br />

                        <b>§ 5 Absage, Verlegung und Programmänderung</b
                        ><br /><br />
                        Bei einer vollständigen Absage des Festivals durch den
                        Veranstalter werden die Ticketkosten (ohne
                        Vorverkaufsgebühren) erstattet.<br /><br />
                        Änderungen im Programm, in der Besetzung von
                        Künstler*innen, im Ablauf oder im Geländeplan
                        berechtigen nicht zur Rückgabe oder Minderung des
                        Ticketpreises.<br /><br />
                        Wird das Festival aufgrund höherer Gewalt (z. B.
                        Unwetter, Pandemien, behördliche Anordnungen) abgesagt
                        oder abgebrochen, besteht kein Anspruch auf Erstattung.
                        Der Veranstalter wird sich bemühen, eine
                        Ersatzveranstaltung zu ermöglichen.<br /><br />

                        <b>§ 6 Hausrecht & Verhalten auf dem Festivalgelände</b
                        ><br /><br />
                        Mit Betreten des Festivalgeländes unterwerfen sich alle
                        Teilnehmer*innen dem Hausrecht des Veranstalters.<br /><br />
                        Den Anweisungen des Sicherheitspersonals ist jederzeit
                        Folge zu leisten. Verstöße gegen die Festivalregeln (z.
                        B. Drogenkonsum, Gewalt, Diskriminierung, mutwillige
                        Sachbeschädigung) können zum Ausschluss vom Festival
                        führen. In diesem Fall erfolgt keine Erstattung des
                        Ticketpreises.<br /><br />
                        Glasflaschen, Waffen, illegale Substanzen sowie sonstige
                        gefährliche Gegenstände sind auf dem Gelände
                        verboten.<br /><br />
                        Ton-, Film- und Fotoaufnahmen zu kommerziellen Zwecken
                        sind nur mit ausdrücklicher Genehmigung des
                        Veranstalters gestattet.<br /><br />

                        <b>§ 7 Haftung</b><br /><br />
                        Die Teilnahme am Festival erfolgt auf eigene Gefahr. Der
                        Veranstalter haftet nur bei Vorsatz und grober
                        Fahrlässigkeit.<br /><br />
                        Für Sach- und Vermögensschäden sowie für Verletzungen,
                        die durch Dritte verursacht werden, haftet der
                        Veranstalter nicht.<br /><br />
                        Für Garderobe, Wertgegenstände, Zelte und
                        Campingausrüstung übernimmt der Veranstalter keine
                        Haftung.<br /><br />

                        <b>§ 8 Datenschutz</b><br /><br />
                        Der Veranstalter erhebt, verarbeitet und nutzt
                        personenbezogene Daten der Teilnehmenden ausschließlich
                        im Rahmen der gesetzlichen Bestimmungen. Eine Weitergabe
                        an Dritte erfolgt nur, wenn dies zur Durchführung des
                        Vertrags erforderlich ist (z. B.
                        Zahlungsdienstleister).<br /><br />
                        Weitere Informationen finden sich in der
                        Datenschutzerklärung auf
                        <RouterLink
                            to="/privacy"
                            class="fx-link font-FuturaCondMedium text-d-mid text-3xl"
                        >
                            https://firlefanz-festival.com/privacy </RouterLink
                        >.<br /><br />

                        <b>§ 9 Schlussbestimmungen</b><br /><br />
                        Es gilt das Recht der Bundesrepublik Deutschland unter
                        Ausschluss des UN-Kaufrechts.<br /><br />
                        Sollte eine Bestimmung dieser AGB unwirksam sein oder
                        werden, berührt dies die Wirksamkeit der übrigen
                        Bestimmungen nicht. Die unwirksame Regelung wird durch
                        eine wirtschaftlich sinnvolle Regelung ersetzt.<br /><br />
                        Gerichtsstand ist – soweit gesetzlich zulässig – der
                        Sitz des Veranstalters.
                    </p>
                </div>
            </div>

            <!--Footer-->
            <Footer />
        </section>
    </div>
</template>
