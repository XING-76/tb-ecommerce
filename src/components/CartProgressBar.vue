<template>
  <div class="row mb-5 cart-progress">
    <div class="col-md-3 mb-3" v-for="(p, index) in progress" :key="index">
      <div
        class="text-center progress-text"
        :class="{ active: step === index }"
      >
        {{ p }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      progress: ['確認商品', '填寫資料', '完成訂購']
    }
  },
  watch: {
    step (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.scrollToTop()
      }
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
