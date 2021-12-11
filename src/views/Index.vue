<template>
  <Header :qty="cartQty" @update-qty="updateQty"></Header>
  <router-view @update-qty="updateQty"></router-view>
  <Gotopbutton></Gotopbutton>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Gotopbutton from '@/components/Gotopbutton.vue'

export default {
  components: {
    Header,
    Footer,
    Gotopbutton
  },
  data () {
    return {
      cartQty: 0
    }
  },
  methods: {
    updateQty () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((response) => {
        this.cartQty = response.data.data.carts.length
      })
    }
  }
}
</script>
