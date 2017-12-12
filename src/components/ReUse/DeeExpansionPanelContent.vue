<template>




<v-container>
    <v-card color="white" >
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs5>
            <v-card-media
              :src="vueLogo"
              height="125px"
              contain
            ></v-card-media>
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
</v-container>


</template>

<script>
import vueLogo from "@/assets/public-logos/vue.png";
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
  })
};
</script>



