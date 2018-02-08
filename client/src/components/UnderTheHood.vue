<template>
  <v-layout row justify-center>
    <v-flex xs12 sm10>
      <v-dialog  v-model="dialogue"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        max-width="95%"
        transition="dialog-bottom-transition"
        hide-overlay
        scrollable
        style="opacity: 0.5"
        >
        <v-card>
          <v-toolbar dark color="primary darken-5"   style="flex: 0 0 auto">
            <v-btn icon @click.native="dialogue = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>How it's Made</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text color="primary lighten-2" class="pa-30 text-xs-justify-left" >
                    <!-- Start TeeSection -->
            <v-layout row justify-center>
              <v-flex xs12 lg10 mb-3>
                  <div class="text-xs-left">
                    <h1 id="what-s-under-the-hood">What&#39;s under the Hood</h1>
                    <p>We stand on the shoulders of Giants, and this website is no exception!</p>
                    <p>The simple act of saying thanks to the creators of the tools essential to this website&#39;s existence has proved more difficult than I thought - you pull on one thread and a whole slice of the internet seems to get pulled along with it. <emoji class="ma-0" emoji="wink" :size="18"></emoji> Down the rabbit-hole we go then... </p>
                    <p>None of this would have been possible AND fast, without the total revamp of the web development ecosystem that's happening right now. A re-think that is being driven by projects like those you'll see below.</p>
                    <h1 id="soooo-big-thanks-to-">SOooo Big Thanks to:</h1>
                  </div>
                <app-expansion-panel></app-expansion-panel>
              <br><br>
                  <div class="text-xs-left" style="position: relative; top: -20px">
                    <h1>What's Next for this Site</h1>
                    <p>This site is intended to be a showcase of all that I've recently learnt. With that in mind, you can soon expect to see some integration with Arduino, and some fun <a href="https://p5js.org/libraries/" target="blank">P5js</a> stuff.</p>
                    <p>To execute the <a href="https://www.arduino.cc/arduino" target="blank">arduino</a> integration, this app-shell will need to "talk" to a server. For that we'll later use <a href="https://feathersjs.com/" target="blank">feathersJs</a>, for it's excellent server to front-end architecture - however, since that's another whole learning-curve for me, we'll first use Google's more newbie-friendly backend solution <a href="https://firebase.google.com/" target="blank">Firebase</a>.</p>
                  </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
import AppExpansionPanel from "@/components/ReUse/AppExpansionPanel";
import { Picker, Emoji } from "emoji-mart-vue";

export default {
  components: {
    picker: Picker,
    emoji: Emoji,
    AppExpansionPanel
    //VueJs
  },
  data: () => ({
    selectedComponent: ""
  }),
  props: {},

  computed: {
    dialogue: {
      get() {
        return this.$store.getters.howDialogueState;
      },
      set(dialogue) {
        this.$store.state.howDialogue = dialogue; //not best way, should use action here
      }
    }
  },
  destroyed() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.$store.state.seeLoveFab = true;
    console.log(this.$store.state.seeLoveFab);
  }
};
</script>


