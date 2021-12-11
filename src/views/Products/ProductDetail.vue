<template>
  <CustomLoading :active="isLoading" />
  <div class="container mb-5 detail-content">
    <div class="row">
      <div class="col-12">
        <nav>
          <ul class="breadcrumb">
            <li><router-link to="/products/all">產品頁</router-link></li>
            <li>{{ product.title }}</li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-6 col-md-5 col-12">
        <section>
          <div class="product-img">
            <img :src="product.imageUrl" alt="" />
          </div>
        </section>
      </div>
      <div class="col-lg-6 col-md-5 col-12">
        <article class="product-article">
          <h2>{{ product.title }}</h2>
          <div class="mb-5">{{ product.description }}</div>
          <div class="price-text">NT$ {{ product.price }}</div>
        </article>
        <div class="product-btn">
          <div class="size-btn mb-3" v-if="product.category === 'Apparel'">
            <select>
              <option v-for="size in sizeData" :key="size" value="size">
                {{ size.size }}
              </option>
            </select>
          </div>
          <div class="main-btn">
            <div class="select-btn">
              <button :disabled="qty <= 1" @click="qtyHandler(-1)">
                <font-awesome-icon icon="minus" />
              </button>
              <input
                type="number"
                min="1"
                max="10"
                v-model="qty"
                autocomplete="off"
              />
              <button :disabled="qty >= 10" @click="qtyHandler(1)">
                <font-awesome-icon icon="plus" />
              </button>
            </div>
            <div class="buy-btn">
              <button @click="addToCart(id, qty)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      qty: 1,
      sizeData: [
        { size: 'S' },
        { size: 'M' },
        { size: 'L' },
        { size: 'XL' },
        { size: '2L' }
      ],
      isLoading: false
    }
  },
  emits: ['update-qty'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      })
    },
    qtyHandler (click) {
      this.qty = this.qty + click
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then(() => {
        this.$swal.fire({
          toast: false,
          icon: 'success',
          position: 'center',
          title: '商品已加入購物車',
          timer: 1500
        })
        this.$emit('update-qty')
      })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
