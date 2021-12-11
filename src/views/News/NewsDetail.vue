<template>
  <CustomLoading :active="isLoading" />
  <div class="container news-content">
    <div class="row justify-content-center mb-3 article-row">
      <div class="article-topbar">
        <span>{{ article.tag }}</span>
        <time
          ><font-awesome-icon :icon="['fas', 'calendar']" />{{
            $filters.date(article.create_at)
          }}</time
        >
      </div>
    </div>
    <div class="row justify-content-center mb-5 article-row">
      <div class="article-head">{{ article.title }}</div>
      <div class="article-img"><img :src="article.image" /></div>
      <pre class="article-content">{{ article.content }}</pre>
      <div class="article-btn d-flex justify-content-center">
        <router-link to="/news">返回上一頁</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      article: {},
      id: '',
      content: ''
    }
  },
  methods: {
    getArticle () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.article = response.data.article
        }
      })
    }
  },
  created () {
    this.id = this.$route.params.newsId
    this.getArticle()
  }
}
</script>
