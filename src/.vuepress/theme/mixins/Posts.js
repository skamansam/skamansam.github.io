export default {
  computed: {
    postsByLang () {
      return [...this.$posts.filter(post => {
        return post.lang === this.$localeConfig.lang && post.published !== false
      })] 
    },
    unpublishedPostsByLang () {
      return [...this.$posts.filter(post => {
        return post.lang === this.$localeConfig.lang && post.published === false
      })] 
    }
  }
}
