<template>
  <v-flex>

    <p>
    What netlify means to me is that I can host this site as a static site, delivered through a cdn (content delivery network) that spans the globe… and so far: FOR FREE!
    </p>
    <p>
    In order to attract developers aiming for world-wide, hundreds-of-views-per-day, high-traction apps; netlify offers the essentials of their hosting and deployment system FOR FREE until the site starts getting the kind of hits that would make its owner happy to pay.
    </p>
    <p>
    Like much of the freemium offers to startups; it's like the web-ecosystem is saying: "Go on, start using my business application and we'll ask you to start paying when it looks like you can afford it."
    </p>
    <p>
    Here is netlify's founder talking about what his team's thinking is offering to "the wild".
    </p>

<youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>


  </v-flex>

</template>

<script>
// todo use this https://github.cnpm install vue-youtubeom/anteriovieira/vue-youtube instead of the existing lib
// https://developers.google.com/youtube/iframe_api_reference#top_of_page
import { Emoji } from "emoji-mart-vue";

export default {
  components: {
    emoji: Emoji
  },
  data: () => ({
    videoId: "uWTMEDEPw8c"
  }),
  props: {},

  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  }
};
</script>

