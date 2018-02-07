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
              <v-btn icon @click.native="dialogue = false" dark>
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title >Personal Thanks to Some Special People</v-toolbar-title>
              <v-icon left>favorite_border</v-icon>
              <v-spacer></v-spacer>
              <v-toolbar-items>

              </v-toolbar-items>
            </v-toolbar>

            <v-card-text color="primary lighten-2" class="pa-30 text-xs-justify-left" >
                      <!-- Start TeeSection -->
              <v-layout row justify-center>
                <v-flex xs12 lg10 mb-3>
                    <div class="text-xs-left">
                         <br />



                                      <h3>Thank You!!! </h3>


                                        <p>
                                        A heartfelt, personal thanks to Tee-Dizzy (AKA Tanya Simpson) and the rest of "The Simpsons" for putting up with a grumpy old fart, with a bee in his bonnet, and a new skill to hone.
                                        </p><br><br>
            <v-card-media :src="famPic"
            height="300px"
            contain
           >

              </v-card-media> <br><br>
                                        <p>
                                        It's taken a long time and been a long story;
                                        </p>
                                        <p>
                                        But thanks for the sanctuary and hospitality at such a critical time.
                                        </p><ul class="ml-3">

                                        <li>May you and The Ladies, move from strength to strength</li>
                                        <li>May Matt find his way in the world</li>
                                        <li>May Lucy find her own peace in the storm</li>
                                        <li>And Bailey? You OK <emoji  emoji="wink" :size="18"></emoji> </li>
                                        </ul>

                                          <br><br>
                                        <div style="width:60%;min-width:600px;padding-bottom:30%;position:relative;"><iframe src="https://giphy.com/embed/3orieYbU8jiXNf3q4E" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/season-12-the-simpsons-12x6-3orieYbU8jiXNf3q4E">via GIPHY</a></p>

                                        <br><br>
                                        <p>
                                        Also you, Stephen Thompson: For helping so much with the "baking of the bread" in our Plastic to Diesel project. You will not be forgotten when that particular loaf is done.
                                        </p>
                                        <p>
                                          … and so far at least; the van den Bosch's have stayed afloat regardless - all debts still honored. Lighter, leaner, nimbler.
                                        </p>
                                        <p>
                                        To those we owe nothing to: "You owe nothing too!" <emoji  emoji="wink" :size="18"></emoji><emoji  emoji="thumbsup" :size="18"></emoji>
                                        </p>
                    </div>

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
 
</template>

<script>
import FamPic from "@/assets/tee-fam.jpg";
import { Emoji } from "emoji-mart-vue";

export default {
  data: () => ({
    famPic: FamPic
  }),
  components: {
    emoji: Emoji
  },
  computed: {
    dialogue: {
      get() {
        return this.$store.getters.teeDialogueState;
      },
      set(dialogue) {
        this.$store.dispatch("toggleTeeDialogue");
      }
    }
  }
};
</script>
