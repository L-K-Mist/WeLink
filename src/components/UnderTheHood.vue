<template>
  <v-app id="inspire">
    <v-container>

      <v-layout row justify-center>
        <v-flex xs10 style="position: absolute; top: 100px">
          <v-dialog  v-model="dialogue"

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
                  <v-expansion-panel inset>
                    <v-expansion-panel-content ripple>
                      <div slot="header"><h2>VueJs  |  The Front-end Framework</h2></div>
                      <v-card color="white" class="white--text">
                        <v-container fluid grid-list-lg>
                          <v-layout row>
                            <v-flex xs5>
                              <v-card-media
                                :src="vueLogo"
                                height="125px"
                                contain
                              ></v-card-media>
                            </v-flex>
                            <v-flex xs7>
                              <div>
                                <div class="headline">Supermodel</div>
                                <div>Foster the People</div>
                              </div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                      <v-card>
                        <v-card-text>
                          <p>VueJs is our benevolent over-all Front-End Framework - the thing we plug the other frameworks into (mostly).</p>
                          <p>Why vue? </p>
                          <p><strong>It is: </strong></p>
                          <ul class="ml-3">
                          <li>Reactive</li>
                          <li>Performant</li>
                          <li>Light</li>
                          </ul>
                          <br>
                          <p>React and Angular (of Facebook and Gmail fame respectively) are great, but sometimes tight budgets and small teams result in even more frugal and inclusive code. </p>
                          <p>Plus there&#39;s an air of victory around Evan You&#39;s creation - David and Goliath vibes... although he seems to get much love from Google?  :) [use chips plus smileys]</p>
                          <p>Although each is great, capable of producing similarly functional websites/apps; I find that vue is, nimbler, independent, and - for me - easier to learn.</p>

                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
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
import vueLogo from "@/assets/public-logos/vue.png";
import nodeLogo from "@/assets/public-logos/node.png";
import vuetifyLogo from "@/assets/public-logos/vuetify.png";

export default {
  data: () => ({
    vueLogo,
    //dialogue: false,
    notifications: false,
    sound: true,
    widgets: false,
    select: [
      { text: "State 1" },
      { text: "State 2" },
      { text: "State 3" },
      { text: "State 4" },
      { text: "State 5" },
      { text: "State 6" },
      { text: "State 7" }
    ]
  }),
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


