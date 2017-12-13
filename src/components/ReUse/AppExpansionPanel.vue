
<template>
<v-app>
      <v-expansion-panel inset>
        <v-expansion-panel-content
            v-for="panel in panels"
            v-bind:key="panel.uid"
            >
          <div slot="header">
            <h2>{{ panel.title }}</h2>
          </div>
          <v-card>
            <v-card-text>
              <component :is="panel.selectedComponent"></component>
              </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-app>


</template>

<script>
//next populate the rest of content to the rest of the panels
import VueJs from "@/components/VueJs";
import NodeJs from "@/components/NodeJs";

export default {
  components: {
    appVueJs: VueJs,
    appNodeJs: NodeJs
  },
  data: () => ({
    panels: [
      {
        uid: 1,
        title: "VueJs | The Front-end Framework",
        selectedComponent: "appVueJs"
      },
      {
        uid: 2,
        title: "NodeJs | The Ecosystem's Engine",
        selectedComponent: "appNodeJs"
      }
    ]
  })
};
</script>

