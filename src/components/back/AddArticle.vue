<template>
  <v-app>
    <!-- Nav -->
    <Navigation title="Add article"></Navigation>

    <!-- Main content -->
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Add article</h1>
        </div>

          <v-card class="grey lighten-4 elevation-0">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Title"
                      id="article-input-title"
                      v-model="title"
                    ></v-text-field>
                    <v-text-field
                      label="Body"
                      multi-line
                      id="article-input-body"
                      v-model="body"
                    ></v-text-field>
                    <photo-upload  :value="img" @input="handleFileUpload"></photo-upload>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn primary light @click.native="saveArticle()">Save</v-btn>

      </v-container>

    </main>
  </v-app>
</template>

<script>
import Navigation from './layout/Navigation'
import resource from '../../config/axios'
import PhotoUpload from './editor/PhotoUpload.vue'

export default {
  data () {
    return {
      title: '',
      body: '',
      img: {
        'value': '',
        'name': '',
        'size': ''
      }
    }
  },

  components: {
    Navigation, PhotoUpload
  },

  methods: {
    saveArticle () {
      let article = {
        'title': this.title,
        'body': this.body,
        'image': this.img,
        'created': +new Date(),
        'type': 'article'
      }

      resource.post('/node', article)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },

    handleFileUpload (file) {
      this.img = {
        'name': file.name,
        'value': file.data,
        'size': file.size
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
