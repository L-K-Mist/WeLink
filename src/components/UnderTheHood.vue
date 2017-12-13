<template>

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
              <v-toolbar dark color="primary darken-5"   style="flex: 0 0 auto">
                <v-btn icon @click.native="dialogue = false" dark>
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
                    <app-expansion-panel></app-expansion-panel>
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


</template>


<script>
import AppExpansionPanel from "@/components/ReUse/AppExpansionPanel";
import vueLogo from "@/assets/public-logos/vue.png";
import nodeLogo from "@/assets/public-logos/node.png";
import vuetifyLogo from "@/assets/public-logos/vuetify.png";
//import VueJs from "@/components/VueJs";
export default {
  components: {
    AppExpansionPanel
    //VueJs
  },
  data: () => ({
    vueLogo,
    selectedComponent: ""
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


