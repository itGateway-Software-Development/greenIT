<template>
    <div class="logo-swiper swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(logo, i) in logos" :key="i">
                <img :src="require('@/assets/images/logo/'+logo+'.png')" alt="">
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    export default {
        setup() {
            const swiper = ref(null);

            onMounted(() => {
                swiper.value = new Swiper('.logo-swiper', {
                    speed: 1000,
                    loop: true,
                    autoplay: {
                        delay: 100,
                        disableOnInteraction: false
                    },
                    slidesPerView: 8,
                    breakpoints: {
                        300: {
                            slidesPerView: 3,
                            // spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 4,
                            // spaceBetween: 20
                        },

                        550: {
                            slidesPerView: 6,
                            // spaceBetween: 20
                        },

                        1100: {
                            slidesPerView: 8,
                            // spaceBetween: 20
                        }
                    }
                })
            });

            let logos = [
                'aws', 'azure', 'Cisco-logo', 'dellemc','fujitsu', 'ibm', 'nec', 'redhat', 'seagate', 'sun', 'adobe', 'dell', 'juniper', 'microsoft', 'paloalto',
                'synology', 'vmware'
            ]

            return {swiper, logos}
        }
    }
</script>

<style scoped>
    .logo-swiper {
        margin: 80px 15% 20px;
    }

    .swiper-wrapper {
        margin-bottom: 60px;
    }
    .swiper-slide img {
        width: 100px;
        height: 50px;
        object-fit: contain;
    }

    @media (max-width:1630px) {
        .logo-swiper {
            margin: 60px 9% 0px;
        }
        .swiper-slide img {
            width: 80px;
            height: 30px;
            object-fit: contain;
        }
    }

    @media (max-width: 1200px) {
        .logo-swiper {
            margin: 60px 3% 0px;
        }
    }

    @media (max-width: 990px) {
        .logo-swiper {
            margin: 30px 1% 0px;
        }

        .swiper-wrapper {
            margin-bottom: 30px;
        }

        .swiper-slide img {
            width: 70px;
            height: 50px;
            object-fit: contain;
        }
    }
</style>
