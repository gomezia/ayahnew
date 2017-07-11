<template>
  <v-app>
    <Navigation title="Settings"></Navigation>
    <main class="admin-container">
      <v-container fluid>
        <div class="subheader">
          <h1>Settings</h1>
        </div>

        <v-tabs dark fixed centered>
          <v-tabs-bar slot="activators" class="dark">
            <v-tabs-slider class="white"></v-tabs-slider>
            <v-tabs-item key="1" href="#tab-1" >Site</v-tabs-item>
            <v-tabs-item key="1" href="#tab-2" >Theme</v-tabs-item>
          </v-tabs-bar>

          <v-tabs-content key="1" id="tab-1">
            <v-card flat>
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
          </v-tabs-content>

          <v-tabs-content key="2" id="tab-2">
            <v-card flat>
              <v-card-text>
                <h2>Jumbotron background-Color</h2>
                <div :style="'background-color:' + jumbotronBGColor.hex">
                  <Chrome v-model="jumbotronBGColor" />
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs>

        <v-btn primary light @click.native="saveSettings()">Save</v-btn>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import store from '@/store/store'
import Navigation from './layout/Navigation'
import resource from '../../config/axios'
import { Chrome } from 'vue-color'

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
    Navigation, Chrome
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
    this.jumbotronBGColor.hex = store.getters.getSettings.front.jumbotronBGColor
    this.siteName = store.getters.getSettings.front.siteName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs__bar {
      background-color: #496684;
  }
</style>
