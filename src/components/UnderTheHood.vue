<template>
  <v-app id="inspire">
    <div>
      <v-layout row justify-center>
        <v-dialog v-model="dialogue"
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
            <v-card-text class="pa-30 text-xs-left" >
                       <!-- Start TeeSection -->
              <p>
              A heartfelt, personal thanks to Tee-Dizzy (AKA Tanya Simpson) and the rest of "The Simpsons" for putting up with a grumpy old fart, with a bee in his bonnet, and a new skill to hone.
              </p>
              <p>
              It's taken a long time and been a long story;
              </p>
              <p>
              But thanks for the sanctuary and hospitality at such a critical time.
              </p><ul>

              <li>Always in your debt Tee. (Literally :))</li></ul>

              <p>
                … and so far at least, the van den Bosch's have stayed afloat regardless - all debts still honored. Lighter, leaner, nimbler.
              </p>
              <p>
              And to those I owe nothing to: "You owe nothing too!" ;)
              </p>
              <!-- End TeeSection -->

              <h2 id="what-s-under-the-hood">What&#39;s under the Hood</h2>
              <p>We stand on the shoulders of Giants, and this website is no exception!</p>
              <p>Afterthought: The simple act of saying thanks to the creators of the tools essential to this website&#39;s existence has proved more difficult than I thought - you pull on one thread and the whole of the internet seems to get pulled along with it. ;) Down the rabbit-hole we go then... </p>
              <p>None of this would have been possible AND performant, without the latest developments (on top of last year&#39;s latest developments) in programming.</p>
              <h2 id="soooo-big-thanks-to-">SOooo Big Thanks to:</h2>
              <hr>
              <h2 id="vuejs">VueJS</h2>
              <p>for being our benevolent over-all Front-End Framework - the thing we plug the other frameworks into (mostly).</p>
              <p>Why vue? Reactive, Performant, light.</p>
              <p>React and Angular are great, but sometimes tight budgets result in frugal code.
              Plus there&#39;s an air of victory around Evan You&#39;s creation - David and Goliath vibes... although he seems to get much love from Google?  :) [use chips plus smileys]</p>
              <p>Although each is great, capable of producing similarly functional websites/apps; (Gmail is built on Angular, Facebook on React) we find that vue is, nimbler, and independent.</p>
              <hr>
              <h2 id="vuetify">Vuetify</h2>
              <p>for it&#39;s implementation of Google&#39;s Beautiful Material Design Spec.</p>
              <p><strong>Vuetify in a nutshell:</strong> Vuetify provides the button, card, and slider components generally used in this site. These components follow Google&#39;s Material Design Spec. Reading through their documentation is like a crash-course in design itself - Thank Google! </p>
              <hr>
              <h2 id="vue-particle">vue-particle</h2>
              <p>for the playful Particle Component you were playing with on the Landing Page Hero Element.</p>
              <h2 id="netlify">Netlify</h2>
              <p>for their (so far free  -  and Supa-Fast) cdn-hosting of this site.</p>
              <p>Netlify in a nutshell: Netlify is a Helpful Static-Site Hosting solution and Content Delivery Network.</p>
              <p>So yes, at the moment this is a server-less, <em>static</em> app, served via cdn (Content Delivery Network)</p>
              <hr>
              <p>Special Mentions: </p>
              <h2 id="the-awesome-nodejs-and-their-event-loop">The Awesome NodeJs and their Event Loop</h2>
              <p>This site is not - strictly speaking - a Nodejs application; as it doesn&#39;t run off of a NodeJs Server. However, NodeJs is so fundamental to what&#39;s happening on the web right now that we can certainly regard NodeJs as an instrumental part of bringing this site into deployed status.</p>
              <p><strong>NodeJS in a nutshell </strong>- [tough one, I&#39;ll have to come back to that later] sometimes you don&#39;t know what you think you know eh #smileyWink# </p>
              <p>Okay, basically what they&#39;ve done there is brought javascript out of the browser and into the land of servers and PC&#39;s. Truly: They took Chrome&#39;s aptly-named V8 Engine, and turned it into something that you install on your PC - not exactly; but almost like a second Operating System that speaks Javascript. In essence therefore translating (AKA compiling) into C++ Native... or something like that </p>
              <p>Yis I think this is so wrong, rather check out what better brains than mine have to say: </p>
              <p>[Shortlist of Best Links Here]</p>
              <p>Okay, so who&#39;ve we left out; let me see...</p>
              <p>... ah yes, </p>
              <h2 id="web-pack">Web-Pack</h2>
              <p> the mystery box: I know it&#39;s doing an awesome job down there in the pit - basically crunching all that complicated stuff with libraries and whatnot, down to the simplest of static html - but understand it? No - not yet. Plenty of gaps in Causal Knowledge there.</p>
              <p>Every day new gaps get filled in.</p>
              <p><strong>WebPack in a Nutshell:</strong> It takes all the fancy code (NodeJs Modules, Templating Language, and a hell of a lot of seperate files that make up the VueJs Development Environment, and via Babel, it transpiles that and all those variety of file-types and compiles it to good ol fashioned:</p>
              <ul>
              <li><p>Vanilla Javascript</p>
              </li>
              <li><p>Vanilla Css</p>
              </li>
              <li><p>Vanilla HTML</p>
              </li>
              </ul>
              <p>[Dylan to compress below info into a comparison table]</p>
              <p>Number files on development server </p>
              <pre><code>       <span class="hljs-number">15982</span> File(s)    <span class="hljs-number">123</span> <span class="hljs-number">798</span> <span class="hljs-number">908</span> bytes
                      <span class="hljs-number">8384</span> Dir(s)   <span class="hljs-number">6</span> <span class="hljs-number">037</span> <span class="hljs-number">307</span> <span class="hljs-number">392</span> bytes free
              </code></pre><p>within which is the dist (for online deployment) created by WebPack</p>
              <pre><code>          <span class="hljs-number">37</span> File(s)      <span class="hljs-number">5</span> <span class="hljs-number">209</span> <span class="hljs-number">360</span> bytes
                        <span class="hljs-number">23</span> Dir(s)   <span class="hljs-number">6</span> <span class="hljs-number">034</span> <span class="hljs-number">874</span> <span class="hljs-number">368</span> bytes free
              </code></pre><p>In more advance apps, this static rendering you&#39;re seeing here (animations and all) would represent the app-shell. The visuals - intelligent enough to do all you see here - plus a server api and some real-time sockets, and you&#39;ve got a full-blown real-time app like whatsapp.</p>
              <p>At least that&#39;s how we intend to do it. NodeJs and npm is essential to us for Arduino/Embedded/IOT aspects of what we&#39;re trying to do here as WeLink. However there are even realtime chat app&#39;s that are serverless front-ends.</p>
              <p>Link: <a href="https://www.codeproject.com/Articles/1113531/Serverless-HTML-Chat-with-Emitter-Vue-and-Bootstrap">https://www.codeproject.com/Articles/1113531/Serverless-HTML-Chat-with-Emitter-Vue-and-Bootstrap</a></p>
              <h2 id="material-design-s-buttons">Material Design&#39;s Buttons</h2>
              <p><strong>The User&#39;s Experience is in the Details</strong>
                m
              So coming back to Google&#39;s Material Design Philosophy:
              The team behind Material Design recognized that there&#39;s always a gap between the user and the things they see on the screen - that gap is the physical glass between the user and the pixels.</p>
              <p>Next time you&#39;re on a google site, watch carefully how the buttons respond to a click or touch event.</p>
              <p>A ripple emanates from the point where you clicked/touched - not just from the center of the button, no: <em>from the point where contact was <strong>made</strong></em>. The button then pops up - sort of sucks up - to bridge the gap of the glass and touch your finger! The magic&#39;s in the details...</p>
              <p>[exampleButton] </p>
              <p>[need tech quotes ticker]
              [need orginised best-of-web links for all these subjects and libraries.]</p>

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
  computed: {
    dialogue: {
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


