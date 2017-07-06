<template>
  <v-app>
    <!-- Nav -->
    <Navigation title="Edit article"></Navigation>

    <!-- Main content -->
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Edit article</h1>
        </div>

        <v-progress-linear v-bind:indeterminate="true" v-if="progress"></v-progress-linear>

          <v-card class="white lighten-5 elevation-1">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Title"
                      id="article-input-title"
                      v-model="node.title"
                      required
                    >
                    </v-text-field>

                    <quill-editor v-model="node.body"
                      ref="myQuillEditor">
                    </quill-editor>

                    <photo-upload  :value="img" @input="handleFileUpload"></photo-upload>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn primary light @click.native="updateContent()">Save</v-btn>

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
      node: '',
      title: '',
      body: '',
      snackbar: false,
      y: '',
      x: 'right',
      mode: '',
      timeout: 60000,
      text: 'Your content has been updated successfully',
      context: 'success',
      img: {},
      progress: false
    }
  },

  components: {
    Navigation, PhotoUpload
  },

  methods: {
    getNode () {
      let url = `/node/${this.$route.params.id}`
      resource.get(url)
        .then(response => {
          this.progress = true
          if (undefined !== response.data) {
            this.node = response.data
            this.img = response.data.image
          }
          this.progress = false
        })
        .catch(error => {
          console.log(error)
        })
    },

    handleFileUpload (file) {
      this.img = {
        'name': file.name,
        'data': file.data,
        'size': file.size
      }
    },

    updateContent () {
      let article = {
        '_id': this.node._id,
        '_rev': this.node._rev,
        'title': this.node.title,
        'body': this.node.body,
        'image': this.img,
        'created': this.node.created,
        'updated': +new Date(),
        'type': 'article'
      }

      let url = `/node/${this.$route.params.id}`

      resource.put(url, article)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
        this.context = 'error'
        this.snackbar = 'true'
        this.text = 'Error!'
      })
      .then(_ => {
        this.snackbar = 'true'
        // this.$router.push('/admin/content')
      })
    }
  },

  mounted () {
    this.getNode()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
