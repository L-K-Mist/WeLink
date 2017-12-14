<template>
  <div>
    <h1 id="netlify">Netlify</h1>
    <p>for their (so far free  -  and Supa-Fast) cdn-hosting of this site.</p>
    <p>Netlify in a nutshell: Netlify is a Helpful Static-Site Hosting solution and Content Delivery Network.</p>
    <p>So yes, at the moment this is a server-less, <em>static</em> app, served via cdn (Content Delivery Network)</p>
    <hr>
    <p>Special Mentions: </p>
  </div>

</template>

<script>
import { Emoji } from "emoji-mart-vue";

export default {
  components: {
    emoji: Emoji
  },
  data: () => ({}),
  props: {},

  computed: {
    dialogue: {
      // so far unused but non-breaking example of getters and setters
      get() {
        return this.$store.state.dialogue;
      },
      set(dialogue) {
        this.$store.state.dialogue = dialogue;
      }
    }
  }
};
</script>

