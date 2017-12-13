
<template>
<v-app>
      <v-expansion-panel inset>
        <v-expansion-panel-content
            class="blue lighten-4 ma-0"
            v-for="panel in panels"
            v-bind:key="panel.uid"
            >
          <div slot="header" >
            <h2>{{ panel.title }}</h2>
          </div>
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs5>
                  <v-card-media
                  :src="panel.largeLogo"
                  height="125px"
                  contain
                  class="ma-0 pa-0"
                  ></v-card-media>
                </v-flex>
                <v-flex>
                  <v-card-text>
                    <component :is="panel.selectedComponent"></component>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-app>


</template>

<script>
//next populate the rest of content to the rest of the panels
import VueJs from "@/components/VueJs";
import NodeJs from "@/components/NodeJs";
import nodeLogoLarge from "@/assets/public-logos/node.png";
import vueLogoLarge from "@/assets/public-logos/vue.png";

export default {
  components: {
    appVueJs: VueJs,
    appNodeJs: NodeJs
  },
  data: () => ({
    vueLogoLarge,
    nodeLogoLarge,
    panels: [
      {
        uid: 1,
        title: "VueJs | The Front-end Framework",
        selectedComponent: "appVueJs",
        largeLogo: vueLogoLarge
      },
      {
        uid: 2,
        title: "NodeJs | The Ecosystem's Engine",
        selectedComponent: "appNodeJs",
        largeLogo: nodeLogoLarge
      }
    ]
  })
};
</script>

