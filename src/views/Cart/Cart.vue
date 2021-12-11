<template>
  <CustomLoading :active="isLoading" />
  <div class="container mb-5 cart-content">
    <!-- 進度條 -->
    <CartProgressBar class="" :step="step" />
    <!-- 進度條 end -->
    <div class="row" v-if="cartLength === 0">
      <div class="cart-none text-center">
        <div class="none-text">尚未選購商品～</div>
        <div class="none-btn">
          <router-link to="/products/all">去購物</router-link>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <!-- 確認商品 -->
      <div class="cart-table m-auto" v-if="step === 0">
        <table class="text-center">
          <thead>
            <tr>
              <th>產品圖</th>
              <th>產品名</th>
              <th>數量</th>
              <th>價格</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cart-item" v-for="item in cart.carts" :key="item.id">
              <td class="cart-pic">
                <div class="cart-img">
                  <img :src="item.product.imageUrl" alt="" />
                </div>
              </td>
              <td>
                <div class="card-prod">{{ item.product.title }}</div>
              </td>
              <td>
                <div class="cart-qty">
                  <div class="cart-btn">
                    <button
                      :disabled="item.qty <= 1"
                      @click="addToCart(item, -1), item.qty--"
                    >
                      <font-awesome-icon icon="minus" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      @input="updateCart(item)"
                      :value="item.qty"
                      autocomplete="off"
                    />
                    <button
                      :disabled="item.qty >= 10"
                      @click="addToCart(item, 1), item.qty++"
                    >
                      <font-awesome-icon icon="plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ $filters.currency(item.final_total) }}</td>
              <td class="del-btn">
                <button @click="removeCartItem(item.id)">
                  <font-awesome-icon icon="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart-price" v-if="step === 0">
        <span class="text-end">商品金額</span>
        <span class="text-end">{{ $filters.currency(cart.final_total) }}</span>
      </div>
      <CouponBar v-if="step === 0"></CouponBar>
      <div class="cart-coupon" v-if="step === 0">
        <p v-if="cart.final_total !== cart.total">已使用優惠券</p>
      </div>
      <div class="coupon-input m-auto mb-5" v-if="step === 0">
        <input type="text" v-model="coupon_code" placeholder="請輸入優惠碼" />
        <div class="coupon-btn">
          <button type="button" @click="addCouponCode">使用優惠碼</button>
        </div>
      </div>
      <div
        class="process-btn d-flex m-auto justify-content-between"
        v-if="step === 0"
      >
        <router-link to="/products/all">繼續購物</router-link>
        <button @click="step++">下一步</button>
      </div>
      <!-- 填寫資料 -->
      <div class="row m-auto justify-content-center" v-if="step === 1">
        <Form
          class="col-md-8 cart-form"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">電子郵箱</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="submit-btn d-flex justify-content-between">
            <a @click.prevent="step--">上一步</a>
            <button>送出訂單</button>
          </div>
        </Form>
      </div>
      <!-- 完成訂單 -->
    </div>
  </div>
</template>

<script>
import CartProgressBar from '@/components/CartProgressBar.vue'
import CouponBar from '@/components/CouponBar.vue'

export default {
  components: {
    CartProgressBar,
    CouponBar
  },
  data () {
    return {
      isLoading: false,
      products: [],
      product: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      cartLength: '',
      coupon_code: '',
      qty: null,
      step: 0
    }
  },
  watch: {
    cartLength () {
      if (this.cartLength === 0) {
        this.goBuy()
      }
    }
  },
  emits: ['update-qty'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$emit('update-qty')
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.cartLength = response.data.data.carts.length
      })
    },
    addToCart (item, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: item.product_id,
        qty
      }
      this.$http.post(url, { data: cart }).then(() => {
        this.getCart()
        this.$swal.fire({ icon: 'success', title: '已更新訂單' })
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then(() => {
        this.getCart()
        this.$swal.fire({ icon: 'success', title: '已更新訂單' })
      })
    },
    removeCartItem (id) {
      this.$swal
        .fire({
          toast: false,
          position: 'center',
          icon: 'warning',
          title: '確定要刪除該項商品？',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: '確定',
          customClass: {
            title: 'custom-text-class'
          },
          timer: false
        })
        .then((result) => {
          if (result.isConfirmed) {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
            this.$http.delete(url).then((res) => {
              if (res.data.success) {
                this.$emit('update-qty')
                this.getCart()
                this.$swal.fire({ icon: 'success', title: '已刪除品項' })
              }
            })
          }
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        const msg = res.data.success
        if (msg === true) {
          this.$swal.fire({ icon: 'success', title: '已使用優惠券' })
          this.getCart()
        } else {
          this.$swal.fire({ icon: 'warning', title: '無效優惠碼 請重新輸入' })
        }
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        const orderId = res.data.orderId
        this.$router.push(`./checkout/${orderId}`)
      })
    },
    goBuy () {
      this.$swal
        .fire({
          toast: false,
          position: 'center',
          icon: 'info',
          title: '購物車為空',
          html: "<span class='custom-text-class'>即將跳轉商品區<span>",
          timer: 2500
        })
        .then(() => {
          this.$router.push('/products/all')
        })
    },
    loadingOn () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  created () {
    this.loadingOn()
    this.getCart()
  }
}
</script>
