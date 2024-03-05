<template>
    <div class="home" >
      <!-- <Carousel></Carousel> -->
      <CarouselB></CarouselB>
      <MainPageClientSwiper></MainPageClientSwiper>
      <Rating></Rating>
      <YoutubeVideos></YoutubeVideos>
      <Strength></Strength>
      <Service></Service>
      <Industry></Industry>
      <SuccessStory></SuccessStory>
      <Promotion></Promotion>
      <div ref="supportRef"><Partners></Partners></div>
      <RecognizeByBest></RecognizeByBest>
      <AboutUs></AboutUs>

    </div>

    <!-- <div :class="{'display-none': pageLoading == 'first'}">
      <PageLoading></PageLoading>
    </div> -->
    <!-- <ContactMe></ContactMe> -->
    <!-- <CompanySuccess></CompanySuccess> -->
</template>

<script>
import CarouselB from '../components/CarouselB'
import PageLoading from '../components/PageLoading'
import Promotion from '../components/Promotion'
import AboutUs from '../components/AboutUs'
import RecognizeByBest from '../components/RecognizeByBest'
import Partners from '../components/Partners'
import SuccessStory from '../components/SuccessStory'
import Industry from '../components/Industry'
import Service from '../components/Service'
import Strength from '../components/Strength'
import YoutubeVideos from '../components/YoutubeVideos'
import Rating from '../components/Rating'
import MainPageClientSwiper from '../components/MainPageClientSwiper'
import Carousel from '../components/Carousel'
import { onMounted, onUpdated, ref, watch } from 'vue'
export default {
  components: {
    CarouselB,
    PageLoading,
    Promotion,
    AboutUs,
    RecognizeByBest,
    Partners,
    SuccessStory,
    Industry,
    Service,
    Strength,
    YoutubeVideos,
    Rating,
    MainPageClientSwiper,
    Carousel,
  },

  props: ['slug'],

  setup(props) {

    const supportRef = ref(null);

    const scrollToSection = (section) => {
      let targetRef;
      if(section === 'support') {
        targetRef = supportRef;
      }

      if(targetRef && targetRef.value) {
        const topOffset = targetRef.value.getBoundingClientRect().top + window.scrollY - 110;
        
        window.scrollTo({top: topOffset, behavior: 'smooth'});
      }
    }

    watch(() => props.slug, (newSlug) => {
      scrollToSection(newSlug);
    })

    const pageLoadingShownBefore = sessionStorage.getItem('pageLoadingShown');
    const pageLoading = ref(pageLoadingShownBefore ? 'none' : 'first');
    const setPageLoading = () => {
      pageLoading.value = 'first';
    }

    onMounted(() => {
      window.scrollTo(0,0);
      scrollToSection(props.slug);

      setTimeout(setPageLoading, 5000)

    });

    return {supportRef, pageLoading}
  }
};
</script>

<style>
  .display-none {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 100%;
  }
</style>

