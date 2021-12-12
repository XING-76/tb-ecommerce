<template>
  <div class="coupon-bar">
    <p>慶祝！期間限定優惠 輸入 cheer4 獲得優惠</p>
  </div>
</template>

<style lang="scss" scoped>
/* From FrankieDoodie -> https://codepen.io/FrankieDoodie/pen/dgVGad */

$main: #2a2f35;
$gray: #7d879c;
$gray-dark: #373f50;
$gray-light: #f3f5f9;
$gold: #bb986c;
$white: #ffffff;
$whiteRGBA: rgba(255, 255, 255, 0);

.coupon-bar {
  width: 90%;
  margin: auto;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.3rem;
  background: $main;
  border: 1px solid $gray-dark;
  p {
    margin-bottom: 0;
    position: relative;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, $main, $white, $main);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 8s linear infinite;
    background-clip: text;
    -webkit-text-fill-color: $whiteRGBA;
  }
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}

@media (max-width: 768px) {
  .coupon-bar {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .coupon-bar {
    font-size: 0.8rem;
  }
}
</style>
