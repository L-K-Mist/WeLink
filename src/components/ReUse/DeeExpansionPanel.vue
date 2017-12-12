<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 lg10 mb-3>
        <v-expansion-panel inset>
            <v-expansion-panel-content ripple>
              <div slot="header"><h2>VueJs  |  The Front-end Framework</h2></div>
              <dee-expansion-panel-content></dee-expansion-panel-content>

            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

    </v-layout>
  </v-container>
</template>




<script>
import DeeExpansionPanelContent from "@/components/ReUse/DeeExpansionPanelContent";
export default {
  components: {
    DeeExpansionPanelContent
  },
  data: () => ({
    items: [
      {
        title: "Click Me"
      },
      {
        title: "Click Me"
      },
      {
        title: "Click Me"
      },
      {
        title: "Click Me 2"
      }
    ]
  }),
  props: {}
};
</script>

