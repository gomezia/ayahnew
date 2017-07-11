<template>
  <v-footer :style="footerStyle">
    <span>© 2017</span>
  </v-footer>
</template>

<script>
  import store from '@/store/store'

  export default {
    data () {
      return {
      }
    },

    computed: {
      siteName: (_) => store.getters.getSettings.front.siteName,
      footerStyle: (_) => {
        let style = {
          backgroundColor: store.getters.getSettings.front.jumbotronBGColor
        }
        return style
      }
    },

    mounted () {
      store.dispatch('LoadSettings')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
