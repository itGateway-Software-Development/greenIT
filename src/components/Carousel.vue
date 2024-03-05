<template>
    <div class="carousel">
        <v-carousel 
            cycle show-arrows="hover"
            delimiter-icon="mdi-square"
            color="white"
        >
            <v-carousel-item v-for="(slide, i) in slider" 
            :key="i"
            :src="slide"
            cover
            eager
            >
            </v-carousel-item>
          </v-carousel>
    </div>
</template>

<script>
    export default {
        setup() {
            let slider = [
                require('@/assets/images/carousel1.jpg'),
                require('@/assets/images/carousel2.jpg'),
                require('@/assets/images/carousel3.jpg'),
            ];

           

            return {slider}
        }
    }
</script>

<style scoped>
    .carousel {
        padding: 15px 15%;
    }
    .v-window {
        height: 600px !important;
    }

    .caption {
        margin: 270px 0 0 200px;
    }

    .carousel img {
        width: 100%;
        height: 600px;
        object-fit: fill;
    }

    .carousel button .v-btn__overlay {
        background-color: transparent !important;
    }

    .carousel button .mdi-square {
        visibility: hidden;
    }

    .carousel button.v-window__right span, .carousel button.v-window__left span {
        background: transparent !important;
    }

    .carousel button span.v-btn__content {
        width: 30px;
        height: 5px;
        background: #cecdcd;
    }


    .carousel .v-carousel__controls {
        display: flex;
        gap: 5px;
    }

    .carousel button.v-btn--active span.v-btn__content {
        background: #fff;
        width: 50px;
    }

    .carousel button.v-btn--active {
        margin: 0 10px;
    }


    @media (max-width:1630px) {
        .carousel {
            padding: 15px 9%;
        }
        
        .v-window {
            margin-top: -15px;
            height: 500px !important;
        }
        .carousel img {
            width: 100%;
            height: 500px;
            object-fit: cover;
        }
    }

    @media (max-width: 1200px) {
        .carousel {
            padding: 0px 0%;
        }
        .caption {
            margin: 170px 0 0 100px;
        }

    }


    @media (max-width: 990px) {
        .v-window {
            margin-top: -15px;
            height: 400px !important;
        }

        .carousel img {
            width: 100%;
            height: 400px;
            object-fit: fill;
        }
    }

    @media (max-width: 700px) {
        .v-window {
            margin-top: -15px;
            height:auto !important;
        }
        .carousel img {
            width: 100%;
            height:auto;
            object-fit: contain;
        }

        .carousel button span.v-btn__content {
            width: 30px;
            height: 3px;
        }

        .carousel .v-carousel__controls {
            gap: 2px;
        }
    
        .carousel button.v-btn--active span.v-btn__content {
            height: 4px;
            width: 40px;
        }
    
        .carousel button.v-btn--active {
            margin: 0 4px;
        }

        .carousel button.v-window__right, .carousel button.v-window__left {
            background: rgb(194, 194, 194, .5);
        }

        .v-btn--icon.v-btn--density-default {
            width: 35px !important;
            height: 35px !important;
        }
    }

    @media (max-width: 500px) {
        .v-window {
            margin-top: -15px;
            height: auto !important;
        }
        .carousel img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
</style>