<template>
  <CustomLoading :active="isLoading" />
  <div class="container mb-5 detail-content">
    <div class="row justify-content-center team-row">
      <div class="team-topbar mb-1">
        <div
          class="col-xl-2 col-lg-4 col-6 team-item"
          v-for="(t, index) in teams"
          :key="index"
          data-aos="flip-up"
        >
          <router-link :to="`/team/${index + 1}`">
            <div class="team-tab">
              <img :src="t.imgUrl" />
              <span class="team-name">{{ t.name }}</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="team-banner">
        <img :src="team.bannerUrl" />
      </div>
    </div>
    <div class="row justify-content-center mb-5 team-row">
      <div class="team-slogan text-center" :class="team.teamColor">
        {{ team.slogan }}
      </div>
      <table class="team-info">
        <tbody>
          <tr class="team-concept">
            <th>核心理念</th>
            <td>
              <pre data-aos="fade">
                {{ $filters.lineBreak(team.concept) }}
              </pre>
            </td>
          </tr>
          <tr class="team-brand">
            <th>品牌故事</th>
            <td>
              <pre data-aos="fade">
                {{ $filters.lineBreak(team.brandStory) }}
              </pre>
            </td>
          </tr>
          <tr class="team-fullname">
            <th>正式名稱</th>
            <td data-aos="flip-down">{{ team.fullName }}</td>
          </tr>
          <tr class="team-startdate">
            <th>成立時間</th>
            <td data-aos="flip-down">{{ team.startDate }}</td>
          </tr>
          <tr>
            <th>主場館</th>
            <td data-aos="flip-down">{{ team.stadium }}</td>
          </tr>
        </tbody>
      </table>
      <iframe
        :src="team.stadiumAddress"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import teams from '@/assets/teams.json'

export default {
  data () {
    return {
      isLoading: false,
      teams,
      id: '',
      team: []
    }
  },
  computed: {
    teamId () {
      // 假設 URL 為 /team/1， $route.params.teamId 的值就是 1
      return this.$route.params.teamId
    }
  },
  watch: {
    teamId (val) {
      this.getTeam(val)
    }
  },
  methods: {
    getTeam (val) {
      this.team = this.teams[val - 1]
    },
    loadingOn () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  created () {
    this.id = this.$route.params.teamId
    this.getTeam(this.id)
    this.loadingOn()
  }
}
</script>
