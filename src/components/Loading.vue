<template>
  <transition name="fade">
    <div
      class="
        custom-loading
        position-fixed
        top-0
        bottom-0
        start-0
        end-0
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      v-if="active"
    >
      <div class="custom-ball">
        <div class="ball">
          <div class="inner">
            <div class="line"></div>
            <div class="line line--two"></div>
            <div class="oval"></div>
            <div class="oval oval--two"></div>
          </div>
        </div>
        <div class="shadow"></div>
      </div>
      <span>Loading...</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
/* From Jerry Low -> https://codepen.io/jerrylow/pen/JjdrmwY */

.custom-loading {
  background: #2a2f35;
  z-index: 3000;
  transition: all 0.3s;
  span {
    opacity: 0.75;
    animation: stretch 0.8s infinite linear;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    margin-top: 6rem;
  }
}

@keyframes stretch {
  0% {
    letter-spacing: 2px;
  }
  50% {
    letter-spacing: 1px;
  }
  100% {
    letter-spacing: 2px;
  }
}

$ball-colour: #ff8c16;
$ball-size: 60px;
$ball-background: radial-gradient(
  circle at #{$ball-size - ($ball-size / 2.5)} #{$ball-size - (
      $ball-size / 1.5
    )},
  $ball-colour,
  darken($ball-colour, 30%)
);
$ball-lines: #333333;
$ball-motion: 70px;
$ball-cb: cubic-bezier(0.42, 0, 0.58, 1);

@keyframes rotateBall {
  0% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
  50% {
    transform: rotateY(360deg) rotateX(360deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(720deg) rotateX(720deg) rotateZ(360deg);
  }
}

@keyframes bounceBall {
  0% {
    transform: translateY(-#{$ball-motion}) scale(1, 1);
  }
  15% {
    transform: translateY(-#{$ball-motion * 0.8}) scale(1, 1);
  }
  45% {
    transform: translateY($ball-motion) scale(1, 1);
  }
  50% {
    transform: translateY(#{$ball-motion + ($ball-motion * 0.05)})
      scale(1, 0.92);
  }
  55% {
    transform: translateY($ball-motion) scale(1, 0.95);
  }
  85% {
    transform: translateY(-#{$ball-motion * 0.8}) scale(1, 1);
  }
  95% {
    transform: translateY(-#{$ball-motion}) scale(1, 1);
  }
  100% {
    transform: translateY(-#{$ball-motion}) scale(1, 1);
  }
}

.ball {
  animation-name: bounceBall;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: $ball-cb;
  border-radius: 50%;
  height: $ball-size;
  position: relative;
  transform: translateY(-#{$ball-motion});
  transform-style: preserve-3d;
  width: $ball-size;
  z-index: 1;

  &::before {
    background: $ball-background;
    border: 2px solid $ball-lines;
    border-radius: 50%;
    content: "";
    height: calc(100% + 6px);
    left: -3px;
    position: absolute;
    top: -3px;
    transform: translateZ(1vmin);
    width: calc(100% + 6px);
  }

  .inner {
    animation-name: rotateBall;
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: 50%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    width: 100%;
  }

  .line {
    &::before,
    &::after {
      border: 2px solid $ball-lines;
      border-radius: 50%;
      content: "";
      height: 99%;
      position: absolute;
      width: 99%;
    }

    &:before {
      transform: rotate3d(0, 0, 0, 0);
    }

    &:after {
      transform: rotate3d(1, 0, 0, 90deg);
    }

    &--two {
      &:before {
        transform: rotate3d(0, 0, 0, 2deg);
      }

      &:after {
        transform: rotate3d(1, 0, 0, 88eg);
      }
    }
  }

  .oval {
    &::before,
    &::after {
      border-top: 4px solid $ball-lines;
      border-radius: 50%;
      content: "";
      height: 99%;
      position: absolute;
      width: 99%;
    }

    &:before {
      transform: rotate3d(1, 0, 0, 45deg) translate3d(0, 0, #{$ball-size * 0.1});
    }

    &:after {
      transform: rotate3d(1, 0, 0, -45deg)
        translate3d(0, 0, -#{$ball-size * 0.1});
    }

    &--two {
      &:before {
        transform: rotate3d(1, 0, 0, 135deg)
          translate3d(0, 0, -#{$ball-size * 0.1});
      }

      &:after {
        transform: rotate3d(1, 0, 0, -135deg)
          translate3d(0, 0, #{$ball-size * 0.1});
      }
    }
  }
}

@keyframes bounceShadow {
  0% {
    filter: blur(3px);
    opacity: 0.6;
    transform: translateY(#{$ball-motion + ($ball-size * 0.05)}) scale(0.5, 0.5);
  }
  45% {
    filter: blur(1px);
    opacity: 0.9;
    transform: translateY(#{$ball-motion + ($ball-size * 0.05)}) scale(1, 1);
  }
  55% {
    filter: blur(1px);
    opacity: 0.9;
    transform: translateY(#{$ball-motion + ($ball-size * 0.05)}) scale(1, 1);
  }
  100% {
    filter: blur(3px);
    opacity: 0.6;
    transform: translateY(#{$ball-motion + ($ball-size * 0.05)}) scale(0.5, 0.5);
  }
}

.shadow {
  animation-name: bounceShadow;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: $ball-cb;
  background: black;
  filter: blur(2px);
  border-radius: 50%;
  height: #{$ball-size * 0.1};
  transform: translateY(#{$ball-motion + ($ball-size * 0.05)});
  width: #{$ball-size * 0.9};
}
</style>
