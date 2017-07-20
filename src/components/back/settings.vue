<template>
  <v-app>
    <Navigation title="Settings"></Navigation>
    <main class="admin-container">
      <v-container fluid>
        <div class="subheader">
          <h1>Settings</h1>
        </div>

        <v-tabs fixed centered>
          <v-tabs-bar slot="activators" class="white">
            <v-tabs-slider class="black"></v-tabs-slider>
            <v-tabs-item key="1" href="#tab-1" >Site</v-tabs-item>
            <v-tabs-item key="1" href="#tab-2" >Theme</v-tabs-item>
          </v-tabs-bar>
          <v-divider></v-divider>

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

                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <h2>Jumbotron background-Color</h2>
                    <div>
                      <Chrome v-model="jumbotronBGColor" />
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4">
                    <h2>Header text color</h2>
                    <div>
                      <Chrome v-model="headerTextColor" />
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-4">
                    <h2>Header text background-color</h2>
                    <div>
                      <Chrome v-model="headerTextBGColor" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <h2>Header image background</h2>
                    <photo-upload  :value="img" @input="handleFileUpload"></photo-upload>
                  </div>
                </div>

              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs>

        <v-btn primary light @click.native="saveSettings()">Save</v-btn>

        <!-- Preview -->
        <div class="theme-preview">
          <div class="subheader">
            <h2>Preview</h2>
          </div>
          <v-card>
            <v-card-text>
              <v-toolbar class="white" light>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>{{siteName}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>dashboard</v-icon>
                </v-btn>
              </v-toolbar>
              <main>
                <div class="fake-jumbotron" :style="headerStyle">
                  <v-container>
                    <div class="fake-h1" :style="headerTextStyle">header Lorem epsum {{headerTextColor.hex}}</div>
                  </v-container>
                </div>
                <v-container>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </v-container>
              </main>
              <v-footer :style="'background-color:' + jumbotronBGColor.hex">
                <span>© 2017</span>
              </v-footer>
            </v-card-text>
          </v-card>
        </div>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import store from '../../store/store'
import Navigation from './layout/Navigation'
import resource from '../../config/axios'
import { Chrome } from 'vue-color'
import PhotoUpload from './editor/PhotoUpload.vue'

export default {
  data () {
    return {
      siteName: '',
      jumbotronBGColor: {
        hex: '#194d33',
        rgba: ''
      },

      headerTextColor: {
        hex: '#194d33',
        rgba: ''
      },

      headerTextBGColor: {
        hex: '#194d33',
        rgba: ''
      },

      img: {
        'value': '',
        'name': '',
        'size': ''
      }
    }
  },

  components: {
    Navigation, Chrome, PhotoUpload
  },

  computed: {
    headerTextStyle () {
      let color = this.headerTextBGColor.rgba
      let style = {
        color: this.headerTextColor.hex,
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`
      }

      return style
    },

    headerStyle () {
      let style = {
        backgroundColor: this.jumbotronBGColor.hex,
        backgroundImage: `url('${this.img.value}')`,
        backgroundRepeat: 'repeat'
      }

      return style
    }
  },

  methods: {
    saveSettings () {
      let mySettings = {
        front: {
          siteName: this.siteName,
          header: this.headerStyle,
          headerImage: this.img.value,
          headerText: this.headerTextStyle,
          headerTextBGColor: this.headerTextBGColor.rgba
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
    },

    handleFileUpload (file) {
      this.img = {
        'name': file.name,
        'value': file.data,
        'size': file.size
      }
    }
  },

  mounted () {
    let getFront = store.getters.getSettings.front

    this.siteName = getFront.siteName
    this.headerStyle = getFront.header
    this.headerTextStyle = getFront.headerText
    this.img.value = getFront.headerImage
    this.headerTextBGColor.rgba = getFront.headerTextBGColor
    this.headerTextColor.hex = getFront.headerText.color
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fake-jumbotron {
    background-color: #FFFFFF;
    padding: 3em 1em;
    margin-top: 3em;
    margin-right: 2em;
  }

  .theme-preview {
    margin-top: 2em;
  }

  .theme-preview .fake-h1 {
    font-size: 2.5em;
    font-weight: bold;
    background-color: white;
    padding: 0 8px;
  }
</style>
