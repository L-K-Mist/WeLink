
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
import Vuetify from "@/components/BaseHtml/Vuetify";
import VueJs from "@/components/BaseHtml/VueJs";
import Babel from "@/components/BaseHtml/Babel";
import Webpack from "@/components/BaseHtml/WebPack";
import NodeJs from "@/components/BaseHtml/NodeJs";
import Netlify from "@/components/BaseHtml/Netlify";
import Other from "@/components/BaseHtml/OtherAddons";

//import AppAvatar from "@/components/ReUse/AppAvatar";
import VuetifyLogo from "@/assets/public-logos/vuetifymini.png";
import VuetifyLogoLarge from "@/assets/public-logos/vuetifyLarge.png";
import VueLogo from "@/assets/public-logos/vuelogo.png";
import vueLogoLarge from "@/assets/public-logos/vue.png";
import BabelLogo from "@/assets/public-logos/babel.png";

import WebpackLogo from "@/assets/public-logos/webpackmini.png";
import WebpackLogoLarge from "@/assets/public-logos/webpacklarge.png";
import NodeLogo from "@/assets/public-logos/nodeButton.png";
import nodeLogoLarge from "@/assets/public-logos/node.png";
import NetlifyLogo from "@/assets/public-logos/netlifymini.png";
import NetlifyLogoLarge from "@/assets/public-logos/netlifylarge.png";
import OtherLogo from "@/assets/public-logos/funstuff.jpg";

export default {
  components: {
    appVuetify: Vuetify,
    appVueJs: VueJs,
    appBabel: Babel,
    appWebpack: Webpack,
    appNodeJs: NodeJs,
    appNetlify: Netlify,
    appOther: Other
    //appAvatar: AppAvatar
  },
  data: () => ({
    //vueLogoLarge,
    //nodeLogoLarge,
    crossLength: 70,
    tile: true,
    panels: [
      {
        uid: 10, //uid's jumping in tens so that I can plug more content inbetween these without having to relink a bunch of code
        title: "Vuetify | The Face of the Front-end",
        selectedComponent: "appVuetify",
        largeLogo: VuetifyLogoLarge,
        miniLogo: VuetifyLogo
      },
      {
        uid: 20,
        title: "VueJs | The Browser-side Framework",
        selectedComponent: "appVueJs",
        largeLogo: vueLogoLarge,
        miniLogo: VueLogo
      },

      {
        uid: 30,
        title: "Babel | The Translator",
        selectedComponent: "appBabel",
        largeLogo: BabelLogo,
        miniLogo: BabelLogo
      },
      {
        uid: 35,
        title: "WebPack | The Compressor",
        selectedComponent: "appWebpack",
        largeLogo: WebpackLogoLarge,
        miniLogo: WebpackLogo
      },
      {
        uid: 40,
        title: "NodeJs | The Ecosystem's Engine",
        selectedComponent: "appNodeJs",
        largeLogo: nodeLogoLarge,
        miniLogo: NodeLogo
      },
      {
        uid: 50,
        title: "Netlify | The App-Shell Host",
        selectedComponent: "appNetlify",
        largeLogo: NetlifyLogoLarge,
        miniLogo: NetlifyLogo
      },
      {
        uid: 60,
        title: "Other Add-ons | The Funnest Stuff",
        selectedComponent: "appOther",
        largeLogo: OtherLogo,
        miniLogo: OtherLogo
      }
    ]
  })
};
</script>

