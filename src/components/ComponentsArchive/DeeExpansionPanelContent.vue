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
        <slot name="text">

        </slot>
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
  }),
  props: {}
};
</script>



