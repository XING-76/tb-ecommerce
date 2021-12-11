<template>
  <CustomLoading :active="isLoading" />
  <div class="about-banner">
    <img src="https://i.imgur.com/gOtJ4in.png" />
  </div>
  <div class="container mb-5 mt-5 about-content">
    <!-- league card -->
    <div class="row justify-content-center text-center mb-5">
      <div class="about-top">
        <div class="about-concept"><span>聯盟理念</span></div>
        <div class="about-league">
          <div
            class="league-card"
            v-for="league in leagues"
            :key="league.id"
            data-aos="fade"
          >
            <div class="row league-line">
              <div class="col-md-3 col-6 league-img" data-aos="zoom-in">
                <img :src="league.logoUrl" />
              </div>
              <div class="col-md-7 col-12 league-text">
                <p data-aos="flip-down">{{ league.name }}</p>
                <pre data-aos="zoom-in">{{
                  $filters.lineBreak(league.concept)
                }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <!-- league box -->
    <div class="row text-center mb-5">
      <div
        class="col-md-6 league-box"
        v-for="league in leagues"
        :key="league.id"
        data-aos="zoom-in"
      >
        <a :href="league.officialWebsite" target="_blank">
          <img :src="league.bannerUrl" />
          <div class="league-caption">
            <p>{{ league.name }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="container mb-5 mt-5 about-content">
    <!-- league member -->
    <div class="row justify-content-center text-center mb-5">
      <div class="league-member">
        <div class="member-name"><span>重要成員</span></div>
        <div class="row member-card">
          <div class="col-lg-4" v-for="member in members" :key="member.id">
            <div class="member-item" data-aos="zoom-in">
              <img :src="member.imgUrl" data-aos="flip-down" />
              <div class="member-text">
                <h3 data-aos="flip-up">{{ member.name }}</h3>
                <h5 data-aos="flip-up">{{ member.position }}</h5>
                <p data-aos="fade">
                  {{ member.concept }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leagues from '@/assets/league.json'
import members from '@/assets/leaguemember.json'

export default {
  data () {
    return {
      isLoading: false,
      leagues,
      members
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
