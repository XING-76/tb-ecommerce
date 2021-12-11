<template>
  <CustomLoading :active="isLoading" />
  <div class="container news-content">
    <div class="row justify-content-center mb-5">
      <div class="col-md-5 text-center news-title"><span>新聞總覽</span></div>
    </div>
    <div class="row">
      <div
        class="col-md-6 col-12 news-box"
        v-for="item in articles"
        :key="item.id"
        data-aos="fade"
      >
        <div class="row news-card" @click="getArticle(item.id)">
          <div class="col-md-4 news-img" data-aos="zoom-in">
            <a href="#" @click.prevent><img :src="item.image" alt="" /></a>
          </div>
          <div class="col-md-8 news-text" data-aos="flip-down">
            <time @click.stop>{{ $filters.date(item.create_at) }}</time>
            <span class="article-tag" @click.stop>{{ item.tag }}</span>
            <a class="article-title">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination
    class="news-page"
    :pages="pagination"
    @emit-pages="getArticles"
  ></Pagination>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      articles: [],
      article: [],
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
        }
      })
    },
    getArticle (id) {
      this.$router.push(`/news/${id}`)
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
