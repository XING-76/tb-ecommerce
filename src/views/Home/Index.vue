<template>
  <CustomLoading :active="isLoading" />
  <Banner></Banner>
  <div class="container mb-5 home-content">
    <div class="row">
      <div class="news-block mb-5">
        <div class="block-title text-center">
          <span>新聞</span>
        </div>
        <div class="row block-content">
          <div class="box-content col-md-3 col-6" v-for="n in news" :key="n.id">
            <div class="box-img" data-aos="fade-up">
              <router-link :to="`/news/${n.nid}`">
                <img :src="n.imgUrl" alt="" />
              </router-link>
            </div>
            <div class="box-head" data-aos="flip-down">
              <time>{{ n.date }}</time>
              <router-link :to="`/news/${n.nid}`">
                {{ n.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="anno-block mb-5">
        <div class="block-title text-center mb-4"><span>公告</span></div>
        <!-- bs-accordion -->
        <div
          class="accordion accordion-flush anno-head"
          id="accordionFlush"
          v-for="anno in announcements"
          :key="anno.id"
          data-aos="fade-up"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flushItem">
              <button
                class="accordion-button collapsed anno-btn"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#${anno.cid}`"
                aria-expanded="false"
                :aria-controls="anno.cid"
              >
                <div class="anno-content">
                  <div class="anno-info">
                    <span>{{ anno.date }}</span>
                    <span class="anno-tag">公告</span>
                    <span class="anno-title">{{ anno.title }} </span>
                  </div>
                </div>
              </button>
            </h2>
            <div
              :id="anno.cid"
              class="accordion-collapse collapse"
              aria-labelledby="flushItem"
              data-bs-parent="#accordionFlush"
            >
              <div class="accordion-body anno-text">{{ anno.content }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="teams-block mb-5">
        <div class="block-title text-center mb-4"><span>球隊</span></div>
        <div class="row teams-content">
          <div
            class="col-lg-2 col-md-4 col-6 teams-item"
            v-for="team in teams"
            :key="team.id"
            data-aos="zoom-in"
          >
            <router-link :to="`/team/${team.id}`">
              <div class="teams-box">
                <div class="teams-logo">
                  <img :src="team.imgUrl" alt="" />
                </div>
                <div class="teams-info text-center">
                  <p class="teams-name">{{ team.name }}</p>
                  <p class="teams-slogan">{{ team.slogan }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from '@/assets/news.json'
import announcements from '@/assets/announcement.json'
import teams from '@/assets/teamscard.json'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Banner
  },
  data () {
    return {
      isLoading: false,
      news,
      announcements,
      teams
    }
  },
  methods: {
    loadingOn () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  created () {
    this.loadingOn()
  }
}
</script>
