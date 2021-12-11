<template>
  <div class="product-filter">
    <div class="filter-list">
      <div
        class="col-lg-4 col-md-6 col-6"
        v-for="item in filterData"
        :key="item.category"
      >
        <router-link :to="`/products/${item.category}`">
          <div class="filter-group">
            <img :src="item.url" />
            <span>
              {{ item.name }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterData: [
        {
          category: 'all',
          name: '全部',
          url: 'https://i.imgur.com/vyYs1fz.png'
        },
        {
          category: 'Apparel',
          name: '衣服',
          url: 'https://i.imgur.com/Pa7XEyT.png'
        },
        {
          category: 'Caps',
          name: '帽子',
          url: 'https://i.imgur.com/tipPkFr.png'
        },
        {
          category: 'Goods',
          name: '配件',
          url: 'https://i.imgur.com/uabfzqU.png'
        },
        {
          category: 'Masks',
          name: '口罩',
          url: 'https://i.imgur.com/BM2LTb3.png'
        }
      ]
    }
  }
}
</script>
