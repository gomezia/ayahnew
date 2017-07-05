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

            <v-layout row>
              <v-flex xs0 sm8></v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                  v-model="search"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <div>

             <v-data-table
               v-bind:headers="headers"
               v-bind:items="items"
               v-bind:search="search"
               v-bind:pagination.sync="pagination"
               hide-actions
               class="elevation-1"
             >
               <template slot="headerCell" scope="props">
                 <span v-tooltip:bottom="{ 'html': props.header.text }">
                   {{ props.header.text }}
                 </span>
               </template>
               <template slot="items" scope="props">
                 <td>{{ props.item.name }}</td>
                 <td  class="text-xs-right">{{ props.item.calories }}</td>
                 <td  class="text-xs-right">{{ props.item.fat }}</td>
                 <td  class="text-xs-right">{{ props.item.carbs }}</td>
                 <td  class="text-xs-right">{{ props.item.protein }}</td>
               </template>
             </v-data-table>
             <div class="text-xs-center pt-2">
               <v-pagination v-model="pagination.page" :length="Math.ceil(this.items.length / pagination.rowsPerPage)"></v-pagination>
             </div>
           </div>

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
        search: '',
        pagination: {},
        selected: [],
        headers: [
          {
            text: 'Title',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Date', value: 'calories' },
          { text: 'Type', value: 'fat' },
          { text: 'Author', value: 'carbs' },
          { text: 'Actions', value: 'protein' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ]
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
