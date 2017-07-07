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

          <v-card class="white lighten-5 elevation-1">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Title"
                      id="article-input-title"
                      v-model="title"
                      required
                    ></v-text-field>

                        <quill-editor
                          v-model="body"
                          ref="myQuillEditor"
                          :options="editorOption"
                        >
                        </quill-editor>

                    <photo-upload  :value="img" @input="handleFileUpload"></photo-upload>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn primary light @click.native="saveArticle()">Save</v-btn>

      </v-container>

      <v-snackbar
        :timeout="timeout"
        :top="y === 'top'"
        :right="x === 'right'"
        v-model="snackbar"
        :success="context === 'success'"
        :error="context === 'error'"
      >
      {{ text }}
      <v-btn flat class="white--text" @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>

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
      },
      snackbar: false,
      y: '',
      x: 'right',
      mode: '',
      timeout: 6000,
      text: 'Your article has been created successfully',
      context: 'success',
      editorOption: {
        modules: {
          toolbar: {
            container: [
              'bold', 'italic', 'underline', 'strike', {'list': 'ordered'}, {'list': 'bullet'}, { 'font': [] }, { 'align': [] }, 'blockquote', 'code-block'
            ]
          }
        }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
