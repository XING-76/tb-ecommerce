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
    <!-- Random Products -->
    <div class="filter-title mb-4"><span>推薦產品</span></div>
    <swiper
        class="px-4 random-swiper"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :breakpoints="swiper.breakpoints"
      >
        <swiper-slide v-for="item in randomProducts" :key="item.id">
          <div class="shadow-sm recommend-item">
            <router-link
              :to="`/product/${item.id}`"
            >
              <img :src="item.imageUrl" :alt="item.title">
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
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
      randomProducts: [],
      swiper: {
        thumbsSwiper: null,
        thumbsStyle: {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        },
        breakpoints: {
          428: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }
      },
      isLoading: false
    }
  },
  emits: ['update-qty'],
  computed: {
    productId () {
      // 假設 URL 為 /product/1， $route.params.productId 的值就是 1
      return this.$route.params.productId
    }
  },
  watch: {
    productId (id) {
      this.getProduct(id)
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.getRandomProducts()
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
          this.getProducts()
        }
      })
    },
    getRandomProducts () {
      this.randomProducts = []
      const arrSet = new Set([]) // 不能塞入重複內容
      const productAll = [...this.products]
      productAll.forEach((item, index) => {
        if (item.id === this.product.id) {
          productAll.splice(index, 1)
        }
      })
      for (let i = 0; arrSet.size < 8; i + 1) {
        const num = Math.floor(Math.random() * productAll.length)
        arrSet.add(num)
        // arrSet, num 測試用
      }
      arrSet.forEach((i) => {
        this.randomProducts.push(productAll[i])
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
    this.getProduct(this.id)
  }
}
</script>
