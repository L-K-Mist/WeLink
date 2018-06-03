<template>
  <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.provider }}</td>
        <td class="text-xs-left">{{ props.item.item }}</td>
        <td class="text-xs-left">{{ "R " + props.item.number }}</td>
      </template>
    </v-data-table>
</template>
<script>
/**
 * Going to need this prop method for nested v-for http://patrickwho.me/vue-js-nested-list-rendering/
 */
export default {
    // to switch off touchpad:  xinput --disable 12

    data () {
        return {
        headers: [
            {
            text: 'Suppliers',
            align: 'left',
            sortable: true,
            value: 'name'
            },
            { text: 'Items Bought', value: 'item', align: 'left'},
            { text: 'Value', value: 'number' , align: 'left'}
        ]
      }
    },

  computed: {
    items() {
      return this.$store.getters.finItems;
    }
  }
};
</script>