<template>
  <v-app id="inspire">
    <v-container>

      <v-layout row justify-center>
        <v-flex xs10>
          <v-dialog  v-model="dialogue"
            :fullscreen="$vuetify.breakpoint.xsOnly"
            max-width="80%"
            transition="dialog-bottom-transition"
            overlay="true"
            scrollable
            >
            <v-card>
              <v-toolbar style="flex: 0 0 auto">
                <v-btn icon @click.native="dialog = false" dark>
                  <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>How it's Made</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>

                  </v-menu>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text class="pa-30 text-xs-justify-left" >
                        <!-- Start TeeSection -->
                <v-layout row justify-center>
                  <v-flex xs12 lg10 mb-3>
                    <dee-expansion-panel></dee-expansion-panel>
                  </v-flex>
                </v-layout>

                <v-btn style="opacity: 1" color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
                <v-tooltip right>
                <v-btn slot="activator">Tool Tip Activator</v-btn>
                  Tool Tip
                </v-tooltip>
              <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>

    </v-container>

  </v-app>
</template>


<script>
import DeeExpansionPanel from "@/components/ReUse/DeeExpansionPanel";
import vueLogo from "@/assets/public-logos/vue.png";
import nodeLogo from "@/assets/public-logos/node.png";
import vuetifyLogo from "@/assets/public-logos/vuetify.png";

export default {
  components: {
    DeeExpansionPanel
  },
  data: () => ({
    vueLogo,
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
  props: {},

  computed: {
    dialogue: {
      get() {
        return this.$store.state.dialogue;
      },
      set(dialogue) {
        this.$store.state.dialogue = dialogue;
      }
    }
  }
};
</script>


