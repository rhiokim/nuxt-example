<template>
  <div class="user">
    <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p><nuxt-link to="/users">List of users</nuxt-link></p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ app, params, error }) {
    try {
      const { data } = await app.$axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  },
  /* Pages - Head Example */
  head () {
    return {
      title: this.username
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/vars'

  .user
    text-align center
    margin-top 100px
    font-family sans-serif
    h4
      color $color_default
</style>
