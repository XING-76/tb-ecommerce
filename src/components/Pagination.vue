<template>
  <nav aria-label="Page navigation" class="pagination-content">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(pages.current_page - 1)"
          ><font-awesome-icon icon="caret-left" />
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: pages.current_page === page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{
          page
        }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: pages.current_page === pages.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(pages.current_page + 1)"
          ><font-awesome-icon icon="caret-right" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @updatePage="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      window.scrollTo({ top: 0 })
      this.$emit('emit-pages', page)
    }
  }
}
</script>
