<template>
  <header class="fixed-top">
    <input type="checkbox" id="menu-btn" ref="menuBtn" />
    <div class="container header-nav">
      <!-- LOGO -->
      <div class="col-2 text-center">
        <router-link to="/" class="logo"
          ><img src="../assets/img/logo.png" />
        </router-link>
      </div>

      <!-- Router-link -->
      <div class="col-lg-8 header-link">
        <ul class="text-center d-flex">
          <li v-for="(nav, key) in navs" :key="key">
            <router-link :to="nav.link" @click.prevent="closeMenu">
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- ICON -->
      <div class="col-lg-2 col-md-2 col-sm-5 col-5 header-icon">
        <ul class="text-center d-flex">
          <li>
            <router-link to="/cart/order">
              <span class="qty-notice" v-if="qty != 0">
                {{ qty }}
              </span>
              <font-awesome-icon icon="shopping-cart" />
            </router-link>
          </li>
          <li>
            <a href="" @click.prevent><font-awesome-icon icon="user" /></a>
          </li>
          <li class="mobile-bar">
            <label class="hamburger-btn" for="menu-btn">
              <span class="hamburger-icon"></span>
              <span class="hamburger-icon"></span>
              <span class="hamburger-icon"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile-link">
      <ul class="text-center mobile-text">
        <li v-for="(nav, key) in navs" :key="key">
          <router-link :to="nav.link" @click.prevent="closeMenu">
            <font-awesome-icon :icon="nav.icon" />
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: ['qty'],
  data () {
    return {
      navs: [
        {
          name: '新聞',
          link: '/news',
          icon: 'newspaper'
        },
        {
          name: '產品',
          link: '/products/all',
          icon: 'shopping-bag'
        },
        {
          name: '球隊',
          link: '/team/1',
          icon: 'basketball-ball'
        },
        {
          name: '關於',
          link: '/about',
          icon: 'info-circle'
        }
      ]
    }
  },
  emits: ['update-qty'],
  methods: {
    closeMenu () {
      this.$refs.menuBtn.click()
    }
  },
  mounted () {
    this.$emit('update-qty')
  }
}
</script>
