<template>
  <v-layout row justify-center>
    <v-flex xs12 sm10>
      <v-dialog v-model="dialogue"
        max-width="95%"
        transition="dialog-bottom-transition"
        hide-overlay
        scrollable
        style="opacity: 0.5"
        >
        <v-card>
          <v-toolbar dark color="primary darken-5"   style="flex: 0 0 auto">
            <v-btn icon @click.native="dialogue(false)" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title> Using NLP Compromise<emoji  emoji="two_hearts" :size="20"></emoji> for Text to Data</v-toolbar-title>
          </v-toolbar>
          <v-container fluid> 
            <v-layout row wrap>
              <v-flex xs6>
                <p>
                  This is a little app I'm working on to take my daily activity logs captured on pen and paper; and turn them into useable data. 
                </p>
                <p>
                  What makes this possible is a great super-lean Natural Language Programming (NLP) library called <a href="https://nlp-compromise.github.io/#docs">Compromise</a>. Also thanks to the great newbie support received on their slack channel - in particular a night-lark SuperUser of the library, who goes by Aurielle.
                </p>
                <p>
                  Next I must find out how to plug in one of those microphone speech-to-text buttons, so that the user can simply dictate into the box by voice.
                </p>
                <p>
                  So then it's voice-to-text and text-to-spreadsheet. Woot! <emoji  emoji="fist" :size="15"></emoji><emoji  emoji="nerd_face" :size="20"></emoji>
                </p>
              </v-flex>
              <v-flex xs6>
              <v-text-field box
                v-model="rawLog"
                name="input-7-1"
                label="What Happened This Day"
                multi-line
              ></v-text-field>
              <v-btn
                @click="submit"
              >
                submit
              </v-btn>
              </v-flex>
            </v-layout>    
          <template v-if="gotFin">
            <fin-sentences></fin-sentences>
          </template> 
        </v-container>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>
<script>
import FinSentences from "@/components/nlp/FinSentences";
import { Emoji } from "emoji-mart-vue";
export default {
  data: () => ({
    rawLog:
      "Got shoes for R70 from Mike. Bought R70 worth Cement, Lime, and Soda from usual guys. Tonight, after a breakthrough year for America, our economy is growing and creating jobs at the fastest pace since 1999. Got R90.00 worth of Peas from Bluff Checkers"
  }),
  computed: {
    dialogue: {
      get() {
        return this.$store.getters.openActivityLog;
      },
      set(dialogue) {
        this.$store.dispatch("openActivityLog", dialogue);
      }
    },
    gotFin() {
      return this.$store.getters.gotFin;
    }
  },
  methods: {
      submit() {
      this.$store.dispatch("newRawLog", this.rawLog);
    }
  },
  components: {
    FinSentences,
    emoji: Emoji
  }
};
</script>