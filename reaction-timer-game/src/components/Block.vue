<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click Me
  </div>
</template>

<script>
export default {
    props: ["delay"],
    data(){
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10; // Increment reaction time every 10ms
            }, 10);
        },
        stopTimer(){
            clearInterval(this.timer);

            // reaction-time adında özel bir event fırlatılıyor
            // bu event ile birlikte this.reactionTime değeri parent component'e gönderiliyor
            this.$emit('reaction-time', this.reactionTime);
        }
    },
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>