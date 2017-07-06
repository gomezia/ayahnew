<template>
  <v-app>
    <!-- Nav -->
    <Navigation title="Edit page"></Navigation>

    <!-- Main content -->
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Edit page</h1>
        </div>

          <v-card class="white lighten-5 elevation-1">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Title"
                      id="page-input-title"
                      v-model="node.title"
                      required
                    ></v-text-field>

                    <quill-editor v-model="node.body"
                      ref="myQuillEditor">
                    </quill-editor>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn primary light @click.native="updatePage()">Save</v-btn>

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
      text: 'Your Page has been created successfully',
      context: 'success'
    }
  },

  components: {
    Navigation
  },

  methods: {
    getNode () {
      let url = `/node/${this.$route.params.id}`
      resource.get(url)
        .then(response => {
          console.log(response.data)
          if (undefined !== response.data) {
            this.node = response.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    updatePage () {
      let article = {
        '_id': this.node._id,
        '_rev': this.node._rev,
        'title': this.node.title,
        'body': this.node.body,
        'created': this.node.created,
        'updated': +new Date(),
        'type': 'page'
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
