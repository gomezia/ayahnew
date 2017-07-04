<template>
  <v-app>
    <!-- Nav -->
    <Navigation title="Add page"></Navigation>

    <!-- Main content -->
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Add page</h1>
        </div>

          <v-card class="white lighten-5 elevation-1">
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Title"
                      id="page-input-title"
                      v-model="title"
                    ></v-text-field>
                    <v-text-field
                      label="Body"
                      multi-line
                      id="page-input-body"
                      v-model="body"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn primary light @click.native="savePage()">Save</v-btn>

      </v-container>

    </main>
  </v-app>
</template>

<script>
import Navigation from './layout/Navigation'
import resource from '../../config/axios'

export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },

  components: {
    Navigation
  },

  methods: {
    savePage () {
      let article = {
        'title': this.title,
        'body': this.body,
        'created': +new Date(),
        'type': 'page'
      }

      resource.post('/node', article)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
