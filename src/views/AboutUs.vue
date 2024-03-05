<template>
    <div ref="aboutRef"><AboutUs></AboutUs></div>
    <div ref="contactRef"><Contact></Contact></div>
    <div ref="teamRef"><Team></Team></div>
    <div ref="partnersRef"><Partners></Partners></div>
</template>

<script>
import Partners from '../components/aboutus/Partners'
import Team from '../components/aboutus/Team'
import Contact from '../components/aboutus/Contact'
    import { onMounted, ref, watch } from 'vue'
    import AboutUs from '../components/aboutus/AboutUs'

    export default {
        props: ['slug'],
        components: {
    Partners,
            Team,
            Contact, AboutUs },

        setup(props) {

            const aboutRef = ref(null);
            const teamRef = ref(null);
            const partnersRef = ref(null);
            const contactRef = ref(null);

            const scrollToSection = (section) => {
                let targetRef;

                if(section === 'aboutus') {
                    targetRef = aboutRef
                } else if (section === 'team') {
                    targetRef = teamRef;
                } else if(section === 'partners') {
                    targetRef = partnersRef
                } else if(section === 'contact') {
                    targetRef = contactRef
                }

                if(targetRef && targetRef.value) {
                    const topOffset = targetRef.value.getBoundingClientRect().top + window.scrollY -110;
                    window.scrollTo({ top: topOffset, behavior: 'smooth' });
                }
            }

            watch(() => props.slug, (newSlug) => {
                scrollToSection(newSlug);
            })
            onMounted(() => {
                scrollToSection(props.slug);
            })

            return {aboutRef, teamRef, partnersRef, contactRef}
        }
    }
</script>


