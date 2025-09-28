<template>
  <div :class="store.mobileOpenState ? 'left hidden' : 'left'">
    <Message />
    <div class="music-container">
      <Music />
    </div>
    <SocialLinks />
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import Message from "@/components/Message.vue";
import Music from "@/components/Music.vue";
import SocialLinks from "@/components/SocialLinks.vue";
const store = mainStore();
</script>

<style lang="scss" scoped>
.left {
  // flex: 1 0 0%;
  width: 50%;
  margin-right: 10px;
  transform: translateY(20px);
  &.hidden {
    display: none;
  }
  @media (max-width: 720px) {
    margin-right: 0;
    width: 100%;
  }
}
.music-container {
  margin-top: 3.5rem;
  max-width: 460px;
  width: 100%;
  animation: fade 0.5s;
  @media (max-width: 720px) {
    max-width: 100%;
  }
}
</style>
