<template>
  <v-app>
    <Navigation title="Admin"></Navigation>

    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <v-layout row>
            <v-flex xs12 sm8>
              <h1>Admin content</h1>
            </v-flex>
            <v-flex xs12 sm4 class="search-admin-content">
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </div>

        <v-progress-linear v-bind:indeterminate="true" v-if="progress"></v-progress-linear>

         <v-data-table
           v-bind:headers="headers"
           v-bind:items="items"
           v-bind:search="search"
           v-bind:pagination.sync="pagination"
           hide-actions
           class="elevation-1 white"
         >
           <template slot="headerCell" scope="props">
             <span v-tooltip:bottom="{ 'html': props.header.text }">
               {{ props.header.text }}
             </span>
           </template>
           <template slot="items" scope="props">
             <td>
               <router-link :to="{name: props.item.type, params: {id: props.item.id}}" class="item edit-icon">
               {{ props.item.title }}
               </router-link>
             </td>
             <td  class="text-xs-right">{{ props.item.date }}</td>
             <td  class="text-xs-right">{{ props.item.type }}</td>
             <!--Actions  -->
             <td  class="text-xs-right">

               <router-link :to="{name: props.item.type+'/edit', params: {id: props.item.id}}" class="item edit-icon">
               <v-btn icon class="green--text">
                  <v-icon>edit</v-icon>
                </v-btn>
              </router-link>
                <v-btn icon class="red--text" @click.native="deleteNode(props.item)">
                   <v-icon>delete</v-icon>
                 </v-btn>
             </td>
           </template>
         </v-data-table>
         <div class="text-xs-center pt-2">
           <v-pagination v-model="pagination.page" :length="Math.ceil(this.items.length / pagination.rowsPerPage)"></v-pagination>
         </div>


      </v-container>
    </main>

    <!-- Delete dialog -->
    <v-layout row justify-center style="position: relative;">
      <v-dialog v-model="deleteDialog" lazy absolute>
        <v-card>
          <v-card-title>
            <div class="headline">Delete content?</div>
          </v-card-title>
          <v-card-text>Are you sure you want delete {{nodeToDelete.title}}?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="deleteDialog = false">Cancel</v-btn>
            <v-btn class="green--text darken-1" flat="flat" @click.native="confirmDeleteNode()">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- Notification -->
    <v-snackbar
      :timeout=1500
      bottom="bottom"
      right="right"
      v-model="snackbar"
      :success="context"
      error="error"
    >
    {{ text }}
    <v-btn flat class="white--text" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
  import Navigation from './layout/Navigation'
  import resource from '../../config/axios'

  export default {
    data () {
      return {
        search: '',
        pagination: {rowsPerPage: 25},
        selected: [],
        headers: [
          {
            text: 'Title',
            align: 'left',
            sortable: true,
            value: 'title'
          },
          { text: 'Created', value: 'date' },
          { text: 'Type', value: 'type' },
          { text: 'Actions', value: 'actions' }
        ],
        items: [],
        deleteDialog: false,
        test: true,
        nodeToDelete: '',
        snackbar: false,
        context: 'success',
        text: '',
        progress: false
      }
    },

    components: {
      Navigation
    },

    methods: {
      getNodes () {
        resource.get('/node/_design/node/_view/all')
          .then(response => {
            console.log(response.data)
            this.progress = true
            response.data.rows.forEach((item, index) => {
              this.items.push(item.value)
            })
            this.progress = false
          })
          .catch(error => {
            console.log(error)
          })
          .then(_ => console.log(this.items))
      },

      deleteNode (node) {
        if (undefined !== node) {
          console.log(node)
          this.deleteDialog = true
          this.nodeToDelete = node
        }
      },

      confirmDeleteNode () {
        if (undefined !== this.nodeToDelete) {
          resource.delete('/node/' + this.nodeToDelete.id + '?rev=' + this.nodeToDelete.rev)
            .then(response => {
              console.log(response.data)
              if (response.status === 200) {
                this.items = this.items.filter(item => {
                  return item.id !== this.nodeToDelete.id
                })
              }
            })
            .catch(error => {
              console.log(error)
            })
            .then(_ => {
              this.deleteDialog = false
              this.context = 'success '
              this.text = 'Your content has been deleted successfully'
              this.snackbar = true
            })
        }
      }
    },

    mounted () {
      this.getNodes()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-admin-content .input-group {
    margin: 0;
  }
</style>
