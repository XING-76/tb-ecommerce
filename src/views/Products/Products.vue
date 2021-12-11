<template>
  <CustomLoading :active="isLoading" />
  <div class="container product-content">
    <div class="filter-title"><span>產品分類</span></div>
    <div class="row mb-5">
      <div class="col-12">
        <ProductsFilter></ProductsFilter>
      </div>
      <div class="col-12">
        <div class="card-content">
          <div
            class="col-lg-2 col-6 card-box"
            v-for="item in products"
            :key="item.id"
            @click="getProduct(item.id)"
            data-aos="zoom-in"
          >
            <div class="card-img">
              <img :src="item.imageUrl" />
            </div>
            <div class="card-body">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-price">{{ item.price }} 元</div>
            </div>
          </div>
        </div>
        <Pagination
          v-if="category == 'all'"
          :pages="pagination"
          @emit-pages="getProducts"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsFilter from '@/components/ProductsFilter.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    ProductsFilter,
    Pagination
  },
  data () {
    return {
      products: [],
      filterProduct: [],
      isLoading: false,
      pagination: {},
      category: ''
    }
  },
  computed: {
    cateId () {
      return this.$route.params.cateId
    }
  },
  watch: {
    cateId (val) {
      this.filterProducts(val)
    }
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
        this.category = 'all'
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    getAll () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.filterProduct = response.data.products
      })
    },
    filterProducts (cate) {
      if (cate === 'all') {
        this.getProducts()
      } else {
        this.products = this.filterProduct.filter(
          (item) => item.category === cate
        )
      }
      this.category = cate
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
    this.getAll()
    this.getProducts()
  }
}
</script>
