<template>
  <transition name="fade">
    <div class="icon icon-expand" v-if="isShow" @click="goTop">
      <font-awesome-icon icon="chevron-up" />
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
/* From Jerry Low -> https://codepen.io/ishaansaxena/pen/WoJGRK */
$icon-size: 50px;
$border-radius: 0.5;
$gray: #7d879c;
$gray-dark: #373f50;
$gray-light: #f3f5f9;
$gold: #bb986c;

.icon {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: inline-block;
  width: $icon-size;
  height: $icon-size;
  margin-left: $icon-size/5;
  margin-right: $icon-size/5;
  border-radius: $icon-size * $border-radius;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: $icon-size * $border-radius;
  }
  svg {
    position: relative;
    color: $gray-light;
    font-size: $icon-size/2.5;
    margin-top: $icon-size/4;
    margin-left: $icon-size * 0.32;
    transition: all 0.25s ease;
  }
}

.icon-expand {
  &::after {
    box-shadow: inset 0 0 0 1px $gold;
  }
  &::before {
    background: $gold;
    box-shadow: inset 0 0 0 $icon-size $gray-dark;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 1px $gray-dark;
  }
}
</style>
