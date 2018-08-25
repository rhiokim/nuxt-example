<template>
  <section class="container">
    <div v-if="false">
      <h1 class="title">
        nuxt-example
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <div>
      <app-logo/>
      <cached-component></cached-component>
      <p>
        user-agent: {{userAgent}}
      </p>
      <nuxt-link to="/users">유저</nuxt-link>,
      <nuxt-link to="/about">영어버젼 소개</nuxt-link>,
      <nuxt-link to="/ko/about">한글버젼 소개</nuxt-link>,
      <nuxt-link to="/fr/about">프랑스버젼 소개</nuxt-link>
    </div>
    <div>
      <h1>Please login to see the secret content</h1>
      <form v-if="!$store.state.authUser" @submit.prevent="login">
        <p v-if="formError" class="error">{{ formError }}</p>
        <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
        <p>Username: <input v-model="formUsername" type="text" name="username" ></p>
        <p>Password: <input v-model="formPassword" type="password" name="password" ></p>
        <button type="submit">Login</button>
      </form>
      <div v-else>
        Hello {{ $store.state.authUser.username }}!
        <pre>Logged In.</pre>
        <button @click="logout">Logout</button>
      </div>
      <p><nuxt-link to="/secret">Super secret page</nuxt-link></p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CachedComponent from '~/components/CachedComponent.vue'

export default {
  components: {
    AppLogo,
    CachedComponent
  },
  asyncData({ store, route, userAgent }) {
    return {
      userAgent
    }
  },
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/styles/vars'

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

