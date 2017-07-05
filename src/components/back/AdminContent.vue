<template>
  <v-app>
    <Navigation title="Admin"></Navigation>
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Admin content</h1>
        </div>

        <v-card class="white lighten-5 elevation-1">
          <v-card-text>
            
            <v-card class="white lighten-5 elevation-5">
              <v-card-text>
                <table class="table table-hover">
                  <thead class="text-default">
                    <tr>
                      <th>Title</th> 
                      <th>Created</th> 
                      <th>Actions</th>
                    </tr>
                  </thead> 
                  <tbody>
                    <tr>
                      <td>
                        <a href="/node/3db29493d8129f8f0f56fd5fda0011bf" class="item">test</a>
                      </td> 
                      <td>07/04/2017</td> 
                      <td class="td-actions text-right">
                        <v-btn icon small class="green--text" @click.native="savePage()">
                          <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn icon small class="red--text" @click.native="savePage()">
                          <v-icon>delete</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </v-card-text>
            </v-card>

          </v-card-text>
        </v-card>




      </v-container>
    </main>
    <v-footer class="indigo admin-container">
      <span>© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Navigation from './layout/Navigation'

  export default {
    data () {
      return {
      }
    },

    components: {
      Navigation
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
