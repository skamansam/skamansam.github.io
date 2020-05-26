<template>
  <section class="row section-more">
    <div class="column more-posts sm-100 md-67">
      <h3>{{ $t(label) }}</h3>
      <ul class="more-posts__list">
        <li v-if="posts.length" class="more-posts__item">
          <card-post
            v-for="post in posts"
            :key="post.key"
            :item="post"
            cover="right" />
        </li>
        <li v-else class="more-posts__item">
           <h2>😔 {{ $t('no_more_posts') }}.</h2>
        </li>
      </ul>
      <div v-if="posts.length" class="allposts-button">
        <router-link to="/posts/">
          <kt-button type="button" color="primary">
            {{ $t('see_all_posts') }}
          </kt-button>
        </router-link>
      </div>
    </div>
    <div class="column more-sidebar sm-100 md-33">
      <slot name="sidebar" />
    </div>
  </section>
</template>

<script>
  import CardPost from '@theme/components/CardPost'
  import KtButton from '@theme/components/UI/Button'

  export default {
    name: 'MorePosts',

    components: {
      CardPost,
      KtButton
    },

    props: {
      label: {
        type: String,
        default: 'more_posts'
      },
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
@import '~@theme/styles/config.styl'

.section-more
  //   border-top: 1px solid $borderColor

.more-posts, .more-sidebar
  border-radius: 20px;
  background: #afafaf;
  box-shadow: inset 7px 7px 14px #959595, 
                inset -7px -7px 14px #c9c9c9;

@media (min-width: 48rem)
  .more-sidebar
    margin-left: 20px
  .more-posts.column.md-67
    flex: 0 0 66.66667%
    max-width: calc(66.667% - 20px)

.more-posts
  border-radius: 20px
  background: #afafaf
  box-shadow: inset 7px 7px 14px #959595, 
              inset -7px -7px 14px #c9c9c9
  &__list
    margin-top: 30px
  
  &.column
    padding-right: 30px


.allposts-button
  margin-top: 50px
  text-align: center

  .ui-button
    text-transform: uppercase

.more-sidebar

  @media (min-width: $max-tablet)
    // border-left: 1px solid $borderColor

  &.column
    padding-left: 30px

.more-posts, .more-sidebar
  padding-top: 30px
  padding-bottom: 30px

</style>