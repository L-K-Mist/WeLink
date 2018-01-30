<template>
  <div>
      <h1 style="color: white">{{ counter }}</h1>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  computed: {
    counter: function() {
      return this.$store.getters.clickCount;
    }
  },
  methods: {
    ...mapActions([
      "incrementCounter" // map `this.increment()` to `this.$store.dispatch('increment')
    ])
  }
};
</script>

