<template>
    <v-container>
      <v-layout row justify-center>
        <v-flex xs10>
          <v-dialog v-model="dialogue"
            :fullscreen="$vuetify.breakpoint.xsOnly"
            max-width="80%"
            transition="dialog-bottom-transition"
            overlay="true"
            scrollable
            style="opacity: 0.5"
            >
            <v-card>
              <v-toolbar dark color="primary darken-5"   style="flex: 0 0 auto">
                <v-btn icon @click.native="dialogue = false" dark>
                  <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Personal Thanks to Some Special People</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  </v-menu>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text color="primary lighten-2" class="pa-30 text-xs-justify-left" >
                        <!-- Start TeeSection -->
                <v-layout row justify-center>
                  <v-flex xs12 lg10 mb-3>
                      <div class="text-xs-left">
                        <h1 id="what-s-under-the-hood">What&#39;s under the Hood</h1>
                        <p>We stand on the shoulders of Giants, and this website is no exception!</p>
                        <p>The simple act of saying thanks to the creators of the tools essential to this website&#39;s existence has proved more difficult than I thought - you pull on one thread and the whole of the internet seems to get pulled along with it. <emoji class="ma-0" emoji="wink" :size="18"></emoji> Down the rabbit-hole we go then... </p>
                        <p>None of this would have been possible AND fast, without the total revamp of the web development ecosystem that's happening right now. A re-think that is being driven by projects like those you'll see below.</p>
                        <h1 id="soooo-big-thanks-to-">SOooo Big Thanks to:</h1>
                      </div>
                    <app-expansion-panel></app-expansion-panel>
                  </v-flex>
                </v-layout>

                <!-- <v-btn style="opacity: 1" color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
                <v-tooltip right>
                <v-btn slot="activator">Tool Tip Activator</v-btn>
                  Tool Tip
                </v-tooltip> -->

              <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>

    </v-container>
</template>

<script>
import FamPic from "@/assets/tee-fam";
export default {
  data: () => ({
    famPic: FamPic
  })
};
</script>
