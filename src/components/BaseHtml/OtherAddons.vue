<template>
  <div>



                <picker
                    title="Pick your emoji…"
                    emoji="point_up"
                    >
                </picker>





  </div>

</template>

<script>
import { Picker, Emoji } from "emoji-mart-vue";

export default {
  components: {
    picker: Picker,
    emoji: Emoji
  }
};
</script>

