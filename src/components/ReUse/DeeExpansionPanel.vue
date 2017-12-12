<template>
<v-container>
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
</v-container>



</template>




<script>
export default {};
</script>

