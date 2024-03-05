<template>
    <div class="chatbot shadow" :class="{show: chatbotShow}">
        <div class="header ">
            <div class="d-flex align-items-center gap-3">
                <img :src="require('@/assets/images/logo.png')" alt="">
                <div class="title">
                    <h2>GreenIT</h2>
                    <span class="text-white">online</span>
                </div>
            </div>
            <div class="close pointer" @click="chatbotShow = !chatbotShow">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <form action="" ref="form">
            <div class="chat-content">
                <div class="chat-head">
                    <div class="chat-logo">
                        <i class="fa-solid fa-comment-dots"></i>
                    </div>
                    <span>Green IT</span>
                </div>
                <div class="chat-text">
                    <span>Hi, it's great to see you! 👋</span>
                    <span>What information are you looking for?</span>
                </div>
            </div>

            <div class="qna" v-if="qnas.length > 0">
                <div v-for="(qna, i) in qnas" :key="i">
                    <div class="question">
                        <div class="you">You</div>
                        <span class="question-text">{{qna.question}}</span>
                    </div>
                    <div class="answer chat-content">
                        <div class="chat-head">
                            <div class="chat-logo">
                                <i class="fa-solid fa-comment-dots"></i>
                            </div>
                            <span>Green IT</span>
                        </div>
                        <div class="chat-text">
                            <span>{{ qna.answer }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="text-muted">What would you like to know ?</h5>

            <div class="text-center pointer" v-if="askmore">
                <div class="ask-more"  @click="askmore = !askmore">Ask More</div>
            </div>

            <div class="tags" v-if="!askmore">
                <span  v-for="tag in tags" :key="tag.id" @click="addQuesting(tag.id), askmore = !askmore">{{tag.name}}</span>
            </div>
        </form>
    </div>

    <div class="chatbot-logo" @click="chatbotShow = !chatbotShow">
        <div class="chat-logo">
            <i class="fa-solid fa-comment-dots"></i>
        </div>
    </div>
</template>

<script>
    import { onUpdated, ref } from 'vue';
    export default {
        setup() {
            const form = ref(null);
            const chatbotShow = ref(false);
            const askmore = ref(false);
            let tags = [
                {
                    id: 1,
                    name: 'Networking',
                    detail: 'Network and security are the pillars of the current digital world. Businesses across the globe are rapidly scaling up their processes to keep up with the changing customer demands and technological landscape'
                },
                {
                    id: 2,
                    name: 'Computing',
                    detail: 'Computing Detail'
                },
                {
                    id: 3,
                    name: 'Sercurity',
                    detail: 'Security Detail'
                },
            ];

            let qnas = ref([]);

            const addQuesting = (id) => {
                let content = tags.find(tag => tag.id === id);

                qnas.value.push({
                    question: content.name,
                    answer: content.detail
                })
            }

            onUpdated(() => {
                form.value.scrollTop = form.value.scrollHeight;
            })

            return {tags, addQuesting, qnas, form, chatbotShow, askmore}
        }
    }
</script>

<style scoped>
    .chatbot-logo {
        position: fixed;
        bottom: 20px;
        right: 20px;
        animation: chat 3s infinite;
        cursor: pointer;
    }

    @keyframes chat {
        0% {
            transform: translateY(-10px);
        }

        50% {
            transform: translateY(0px);
        }

        100% {
            transform: translateY(-10px);
        }
    }

    .chatbot-logo .chat-logo {
        background: #287e3d;
        width: 55px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        box-shadow: 3px 3px 10px rgb(236, 223, 105);
    }

    .chatbot-logo .chat-logo i {
        font-size: 25px;
        color: #fff;
    }

    /* chatbot window */
    .chatbot {
        width: 450px;
        margin: 30px auto;
        position: fixed;
        bottom: 60px;
        right: 0;
        transform: translateX(1000px);
        z-index: 99999;
        transition: .7s ease-in-out;
    }

    .chatbot.show {
        right: 30px;
        transform: translateX(0px);
    }

    .chatbot .header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background: linear-gradient(to left, #287e3d, #3bb38f);
        border-radius: 10px 10px 0 0;
    }

    .chatbot .header img {
        width: 70px;
        height: 70px;
        object-fit: contain;
        background: #fff;
        border-radius: 100%;
    }

    .chatbot .title h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 0px;
    }

    .chatbot form {
        background: rgb(234, 238, 243);
        padding: 15px;
        overflow-y: scroll;
        height: 500px;
        border-radius: 0 0 10px 10px;
    }

    .chatbot .chat-head {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .chatbot .chat-content .chat-logo {
        background: #287e3d;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .chatbot .chat-content .chat-logo i {
        color: #fff;
        font-size: 12px;
    }

    .chatbot .chat-content span {
        font-size: 12px;
    }

    .chat-content .chat-text {
        margin: 15px 95px 15px 0px;
    }

    .chat-content .chat-text {
        display: inline-flex;
        flex-direction: column;
        gap: 10px;
    }

    .chat-content .chat-text span {
        background: #fff;
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 20px 15px 15px 0px;
    }

    .chat-content .chat-text span:nth-child(even) {
        border-radius: 0px 15px 15px 20px;
    }

    .chatbot h5 {
        text-align: center;
        font-size: 12px;
        margin: 30px auto 10px;
    }

    .chatbot .ask-more {
        font-size: 12px;
        background: #5b5df7;
        border-radius: 12px;
        display: inline-flex;
        justify-content: center;
        text-align: center;
        color: #fff;
        padding: 0px 10px;
    }

    .chatbot .tags {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .chatbot .tags span {
        background: #fff;
        padding: 0px 10px;
        font-size: 12px;
        border-radius: 10px;
        font-weight: bold;
        color: #5b5df7;
        border: 1px solid #5b5df7;
        cursor: pointer;
    }

    .chatbot .qna .question {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: end;
        justify-content: end;
        margin-bottom: 20px;
    }

    .chatbot .qna .you {
        font-size: 13px;
        padding-right: 15px;
    }
    .chatbot .qna .question-text {
        background: #fff;
        padding: 10px 15px;
        font-size: 15px;
        border-radius: 15px 15px 0px 15px;
    }

    .chatbot .ask-more {
        text-align: center;
    }

    .chatbot .ask-more span {
        background: #5b5df7;
        padding: 3px 10px;
        font-size: 12px;
        border-radius: 10px;
        font-weight: bold;
        color: #fff;
        border: 1px solid #5b5df7;
        cursor: pointer;
    }

  
</style>
