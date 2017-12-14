
<template>
    <v-layout justify-center column>
      <v-expansion-panel popout class="blue lighten-4 ma-1">
        <v-expansion-panel-content

            v-for="panel in panels"
            v-bind:key="panel.uid"
            >
          <div slot="header" elevation-10>
            <v-container grid-list-sm>
              <v-layout align-center row spacer slot="header">
                  <v-flex xs1>
                    <v-avatar size="60" slot="activator"
                      :tile='tile'

                      class="grey lighten-4"
                    >
                      <img :src="panel.miniLogo">
                    </v-avatar>
                  </v-flex>
                  <v-flex>
                    <h2>{{ panel.title }}</h2>
                  </v-flex>
                </v-layout>
            </v-container>
          </div>
          <v-card elevation-5>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex>
                  <v-card-text>
                    <component :is="panel.selectedComponent"></component>
                  </v-card-text>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                  :src="panel.largeLogo"
                  height="250px"
                  contain
                  class="ma-0 pa-0"
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>




    </v-layout>
</template>

<script>
//next populate the rest of content to the rest of the panels
import VueJs from "@/components/BaseHtml/VueJs";
import NodeJs from "@/components/BaseHtml/NodeJs";
//import AppAvatar from "@/components/ReUse/AppAvatar";
import nodeLogoLarge from "@/assets/public-logos/node.png";
import NodeLogo from "@/assets/public-logos/nodeButton.png";
import vueLogoLarge from "@/assets/public-logos/vue.png";
import VueLogo from "@/assets/public-logos/vuelogo.png";

export default {
  components: {
    appVueJs: VueJs,
    appNodeJs: NodeJs
    //appAvatar: AppAvatar
  },
  data: () => ({
    //vueLogoLarge,
    //nodeLogoLarge,
    crossLength: 70,
    tile: true,
    panels: [
      {
        uid: 1,
        title: "VueJs | The Front-end Framework",
        selectedComponent: "appVueJs",
        largeLogo: vueLogoLarge,
        miniLogo: VueLogo
      },
      {
        uid: 2,
        title: "NodeJs | The Ecosystem's Engine",
        selectedComponent: "appNodeJs",
        largeLogo: nodeLogoLarge,
        miniLogo: NodeLogo
      }
    ]
  })
};
</script>

