<template>
  <div class="container">
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.introduction') }}</p>
  </div>
</template>

<script>
export default {
  transition: 'bounce',
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>
