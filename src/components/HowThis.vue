<template>
  <div>
    <div>
      <v-layout row justify-center>
        <v-card elevation-1 style="position: absolute; top: 80px">
          <v-card-text>
          </v-card-text>
            <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-layout>
    </div>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </div>

</template>

<script>
export default {
  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
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
    ],
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
  props: {
    source: String
  }
};
</script>

