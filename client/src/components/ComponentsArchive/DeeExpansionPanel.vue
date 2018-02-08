<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 lg10 mb-3>
        <v-expansion-panel popout>
            <v-expansion-panel-content ripple>
              <div slot="header"><h2>VueJs  |  The Front-end Framework</h2></div>
              <dee-expansion-panel-content>
                <div slot="text">
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

                </div>
              </dee-expansion-panel-content>

            </v-expansion-panel-content>
            <v-expansion-panel-content ripple>
              <div slot="header"><h2>VueJs  |  The Front-end Framework</h2></div>
              <dee-expansion-panel-content></dee-expansion-panel-content>

            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

    </v-layout>
  </v-container>
</template>




<script>
import DeeExpansionPanelContent from "@/components/ReUse/DeeExpansionPanelContent";
export default {
  components: {
    DeeExpansionPanelContent
  },
  data: () => ({
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
  props: {}
};
</script>

