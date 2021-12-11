<template>
  <CustomLoading :active="isLoading" />
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      新增文章
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">標籤</th>
        <th width="150">文章圖</th>
        <th>文章標題</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in articles" :key="item.id">
        <td>{{ item.tag }}</td>
        <td><img class="img-fluid" :src="item.image" alt="" /></td>
        <td>{{ item.title }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :id="`publicSwitch${item.id}`"
              v-model="item.isPublic"
              @change="updateArticle(item)"
            />
            <label class="form-check-label" :for="`publicSwitch${item.id}`">
              <span v-if="item.isPublic">公開</span>
              <span v-else>未公開</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getArticles"></Pagination>
  <ArticleModal
    :article="tempArticle"
    ref="articleModal"
    @update-article="updateArticle"
  ></ArticleModal>
  <DelModal :item="tempArticle" ref="delModal" @del-item="delArticle" />
</template>

<script>
import ArticleModal from '@/components/Admin/ArticleModal.vue'
import DelModal from '@/components/Admin/DelModal.vue'
import Pagination from '@/components/Admin/Pagination.vue'

export default {
  data () {
    return {
      pagination: {},
      isNew: false,
      isLoading: false,
      articles: [],
      tempArticle: {
        isPublic: true
      }
    }
  },
  components: {
    ArticleModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
        }
      })
    },
    updateArticle (tempArticle) {
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
        this.$http.post(api, { data: tempArticle }).then((response) => {
          this.$httpMessageState(response, '新增文章')
          this.getArticles()
          this.$refs.articleModal.hideModal()
        })
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`
        this.$http.put(api, { data: this.tempArticle }).then((response) => {
          this.$httpMessageState(response, '更新文章')
          this.getArticles()
          this.$refs.articleModal.hideModal()
        })
      }
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (isNew) {
        this.tempArticle = {
          create_at: new Date().getTime() / 1000
        }
      } else {
        this.tempArticle = { ...item }
      }
      const articleComponent = this.$refs.articleModal
      articleComponent.showModal()
    },
    // 開啟刪除 Modal
    openDelProductModal (item) {
      this.tempArticle = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delArticle () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.$http.delete(api).then((response) => {
        this.$httpMessageState(response, '刪除文章')
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getArticles()
      })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
