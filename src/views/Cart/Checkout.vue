<template>
  <div class="container mb-5 cart-content">
    <!-- 進度條 -->
    <CartProgressBar class="" :step="step" />
    <!-- 進度條 end -->
    <!-- 完成訂單 -->
    <div class="row justify-content-center">
      <form class="col-md-8 check-form" @submit.prevent="payOrder">
        <table class="check-table align-middle">
          <thead>
            <th class="text-center">產品圖</th>
            <th class="text-center">品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td><img :src="item.product.imageUrl" alt="" /></td>
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }} {{ item.product.unit }}</td>
              <td class="text-center">{{ item.final_total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="check-price">
          <span class="text-end">總計金額</span>
          <span class="text-end">{{ $filters.currency(order.total) }} 元</span>
        </div>

        <table class="table mb-3">
          <tbody>
            <tr>
              <th width="150">電子信箱</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>收件人姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end pay-btn" v-if="order.is_paid === false">
          <button>確認付款去</button>
        </div>
      </form>
    </div>
    <!-- 完成訂單 end -->
  </div>
</template>

<script>
import CartProgressBar from '@/components/CartProgressBar.vue'

export default {
  components: {
    CartProgressBar
  },
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false,
      step: 2
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
        }
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.$swal
            .fire({
              toast: false,
              position: 'center',
              icon: 'success',
              title: '付款成功，感謝購物',
              showConfirmButton: true,
              showCancelButton: false,
              confirmButtonText: '確認',
              customClass: {
                title: 'custom-text-class'
              },
              timer: false
            })
            .then((result) => {
              if (result.isConfirmed) {
                this.getOrder()
                this.$swal
                  .fire({
                    position: 'center',
                    icon: 'info',
                    title: '將回到首頁…',
                    timer: 2500
                  })
                  .then(() => {
                    this.$router.push('/')
                  })
              }
            })
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
