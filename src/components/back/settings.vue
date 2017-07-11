<template>
  <v-app>
    <Navigation title="Settings"></Navigation>
    <main class="admin-container">
      <v-container fluid>
        <div class="subheader">
          <h1>Settings</h1>
        </div>
        <v-card class="white lighten-5 elevation-1">
          <v-card-text>
            <h2>Site</h2>
            <v-card class="white lighten-5 elevation-1">
              <v-card-text>
                <v-layout row>
                  <v-flex xs6>
                    <v-text-field
                      label="Site name"
                      v-model="siteName"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>

            <h2>Theme</h2>
            <v-card class="white lighten-5 elevation-1">
              <v-card-text>
                <h2>Jumbotron background-Color</h2>
                <div :style="'background-color:' + jumbotronBGColor.hex">
                <Swatches v-model="jumbotronBGColor" />
                </div>

              </v-card-text>
            </v-card>

          </v-card-text>
        </v-card>

        <v-btn primary light @click.native="saveSettings()">Save</v-btn>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import store from '@/store/store'
import Navigation from './layout/Navigation'
import resource from '../../config/axios'
import { Swatches } from 'vue-color'

export default {
  data () {
    return {
      siteName: '',
      jumbotronBGColor: {
        hex: '#194d33'
      }
    }
  },

  components: {
    Navigation, Swatches
  },

  methods: {
    saveSettings () {
      let mySettings = {
        front: {
          siteName: this.siteName,
          jumbotronBGColor: this.jumbotronBGColor.hex
        }
      }

      resource.post('/settings', mySettings)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
        this.context = 'error'
        this.snackbar = 'true'
        this.text = 'Error!'
      })
      .then(this.snackbar = 'true')
    }
  },

  mounted () {
    this.siteName = store.getters.geSettings.front.siteName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
