<template>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="indicator active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="indicator" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="indicator" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="require('@/assets/images/carousel1.jpg')" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img :src="require('@/assets/images/carousel2.jpg')" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img :src="require('@/assets/images/carousel3.jpg')" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
        
    }
</script>

<style scoped>
    .carousel {
        margin: 15px 15%;
    }

    .carousel .carousel-item img {
        width: 100%;
        height: 600px;
    }

    .carousel .indicator {
        height: 5px;
    }

    .carousel .indicator.active {
        width: 50px;
    }

    @media (max-width:1630px) {
        .carousel {
            margin: 15px 9%;
        }
        .carousel .carousel-item img {
            height: 600px;
            object-fit: cover;
        }
    }

    @media (max-width: 1350px) {
        .carousel {
            margin: 15px 7%;
        }

        .carousel .carousel-item img {
            height: 550px;
        }
    }

    @media (max-width: 1200px) {
        .carousel {
            margin: 0px 0%;
            margin-top: -13px;
        }
    }

    @media (max-width: 1080px) {

        .carousel {
            margin-top: -13px;
        }
        .carousel .carousel-item img {
            height: 500px;
        }
    }

    @media (max-width: 950px) {
        .carousel .carousel-item img {
            height: 450px;
        }
    }

    @media (max-width: 820px) {
        .carousel .carousel-item img {
            height: 400px;
            object-fit: fill;
        }
    }

    @media (max-width: 620px) {
        .carousel .carousel-item img {
            height: 350px;
            object-fit: fill;
        }
    }

    @media (max-width: 520px) {
        .carousel .carousel-item img {
            height: 300px;
        }
    }

    @media (max-width: 450px) {
        .carousel .carousel-item img {
            height: 260px;
        }
    }

    
</style>
