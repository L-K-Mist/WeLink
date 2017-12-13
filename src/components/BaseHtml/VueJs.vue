<template>
  <div>
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
        <p>Plus there&#39;s an air of victory around Evan You&#39;s creation - David and Goliath vibes... although, as an ex-employee, he seems to get Much-Love from Google.
          <emoji emoji="heart"
                :size="18">
</emoji></p>
        <p>Although each is great, capable of producing similarly functional websites/apps; I find that Vue is, nimbler, independent, and - for me - easier to learn.</p>

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

