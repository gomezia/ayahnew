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
                    <v-btn primary light @click.native="saveArticle()">Save</v-btn>

                  </v-flex>
                </v-layout>

              </v-container>
            </v-card-text>
          </v-card>
      </v-container>
      
    </main>
  </v-app>
</template>

<script>
import Navigation from './Navigation'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
