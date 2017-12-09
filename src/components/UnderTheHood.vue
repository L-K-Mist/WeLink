<template>
  <v-app id="inspire">
    <div>
      <v-layout row justify-center>
        <v-btn color="primary" dark @click.stop="dialog = true">Open Dialog 1</v-btn>
        <v-menu bottom offset-y></v-menu>
        <v-dialog
          v-model="dialog"
          max-width="80%"
          transition="dialog-bottom-transition"
          :overlay="false"
          scrollable>

          <v-card>

            <v-toolbar style="flex: 0 0 auto">
              <v-btn icon @click.native="dialog = false" dark>
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                <v-menu bottom right offset-y>
                  <v-btn slot="activator" dark icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-menu>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text style="opacity: 1">
              <v-btn style="opacity: 1" color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
              <v-tooltip right>
              <v-btn slot="activator">Tool Tip Activator</v-btn>
                Tool Tip
              </v-tooltip>
            <v-divider></v-divider>
            </v-card-text>

          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
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
  })
};
</script>


