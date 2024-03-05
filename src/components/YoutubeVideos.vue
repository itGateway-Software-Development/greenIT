<template>
    <div class="utube-video">
        <v-row class="" no-gutters>
            <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            class="video"
            >
            <div class="d-flex justify-center video-container">
                <!-- <iframe  src="https://www.youtube.com/embed/_WHmkd0ETTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                <iframe src="https://www.youtube.com/embed/rTjaGwi92zk?si=8XTlQHwFrAlzXavR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </v-col>
<!-- 
            <v-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            class="video"
            >
            <div>
                <iframe  height="400" src="https://www.youtube.com/embed/itdm8cAOCr4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </v-col> -->
        </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .utube-video {
        padding: 60px 15% 40px;
        margin-top: 30px;
        display: flex;
    }

    div iframe {
        width: 1000px;
        height: 570px;
    }

    .utube-video .video {
        padding-right: 15px !important;
    }

    @media (max-width:1630px) {
        .utube-video {
            padding: 60px 9% 40px;
            margin-top: 30px;
            display: flex;
        }
    }

    @media (max-width: 1200px) {
        .utube-video {
            padding: 60px 3% 40px;
            margin-top: 30px;
            display: flex;
        }

        div iframe {
            width: 835px;
            height: 470px;
        }
    }

    @media (max-width: 990px) {
        div iframe {
            width: 700px;
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        div iframe {
            width: 600px;
            height: 350px;
        }
    }

    @media (max-width: 650px) {
        div iframe {
            width: 500px;
            height: 280px;
        }
    }

    @media (max-width: 530px) {
        div iframe {
            width: 400px;
            height: 225px;
        }
    }

    @media (max-width: 450px) {
        .utube-video .video-container {
            display: flex;
            justify-content: center;
        }

        div iframe {
            width: 350px;
            height: 195px;
            overflow: hidden;
            padding-right: 10px;
        }
    }
</style>
