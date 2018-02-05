<template>
        <div v-if="counter > 10" style="position: absolute; left: 1%; z-index: 8"
        transition="slide-x-transition">
          <v-layout column>
            <v-switch light
              v-model="showComingSoon">
            </v-switch>
            <v-switch light
              v-model="showWatchSpace">
            </v-switch>
            <v-switch light
              v-model="showSharingHow">
            </v-switch>
            
          </v-layout>
        </div>

</template> 

<script>
export default {
  computed: {
    counter: function() {
      return this.$store.getters.clickCount;
    },
    showComingSoon: {
      get() {
        return this.$store.getters.seeComingSoon;
      },
      set(newBool) {
        return this.$store.dispatch("setComingSoon", newBool);
      }
    },
    showWatchSpace: {
      get() {
        return this.$store.getters.seeWatchSpace;
      },
      set(newBool) {
        return this.$store.dispatch("setWatchSpace", newBool);
      }
    },
    showSharingHow: {
      get() {
        return this.$store.getters.seeSharingHow;
      },
      set(newBool) {
        return this.$store.dispatch("setSharingHow", newBool);
      }
    }
  }
};
</script>

