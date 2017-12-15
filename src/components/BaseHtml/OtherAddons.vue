<template>
  <v-layout column>
    <v-flex xs12 sm12>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            >
              <v-card class="elevation-10">
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>










                <!-- <picker
                    title="Pick your emoji…"
                    emoji="point_up"
                    >
                </picker> -->

<script>
import { Picker, Emoji } from "emoji-mart-vue";

export default {
  components: {
    picker: Picker,
    emoji: Emoji
  },
  data: () => ({
    cards: [
      {
        title: "vue-particles | The Starry-Sky Background",
        src: "/static/doc-images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "/static/doc-images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 6
      }
    ]
  })
};
</script>




<script>
import { Picker, Emoji } from "emoji-mart-vue";

export default {
  components: {
    picker: Picker,
    emoji: Emoji
  },
  data: () => ({
    cards: [
      {
        title: "vue-particles | The Starry-Sky Background",
        src: "/static/doc-images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "/static/doc-images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "/static/doc-images/cards/plane.jpg",
        flex: 6
      }
    ]
  })
};
</script>

