<template>
  <div>
              <p>
              This site is not yet - strictly speaking - a Nodejs application; as it doesn't run off of a NodeJs Server. (remember: so far this site is just an app-shell - static-hosted via cdn) However, NodeJs is so fundamental to what's happening on the web right now that we can certainly regard NodeJs as an instrumental part of bringing this site into deployed status.
              </p>
              <p>
              For example: All these other packages and their dependencies are installed via Node's npm (Node Package Manager)
              </p>
              <br>
              <h3>NodeJS in a Nutshell</h3>


              <p>
              In essence NodeJs brings Javascript to the land of PC's and servers - For Web-Developers that means no need to learn other languages for server-side implementations. It's javascript from the server to the browser and on to the device.
              </p>
              <p>
              The NodeJs creators took Chrome's aptly-named V8 Engine, and turned it into something that you install on your PC (not exactly; but almost like a second Operating System that speaks Javascript)
              </p>
              <br>
              <h3>The Most Important Bit - The NodeJs Event Loop</h3>


              <p>
              Beyond bringing Javascript out of the browser and on to the machine, NodeJs has innovated the way the server interacts with the database and front-end. There are much clearer explanations of this in the Essential Links, but suffice it to say that this single, <strong>asynchronous</strong> event loop speeds up one of the slowest aspects of the web: Servers transferring events and data between Databases and the Browser Front-end.
              </p>
              <p>
              Note: When thinking about databases, servers, and browsers it is helpful to think of a restaurant.
              </p><ul class="ml-3">

              <li>The browser (and those precious User-Clicks) is the customer.
              <li>The server is the waitron.
              <li>The kitchen is the database.</li></ul>
<br><br>
              <h4>How these modern websites/apps are different from my previous Joomla CMS > Cpanel > SQL websites.</h4>


              <p>
              Because of the async event-loop, the server does not bring <em>an </em>order to the kitchen and then wait for the kitchen to give her <em>the </em>meal to take out to the waiting customer.
              </p>
              <p>
              No, instead she places order<strong>s</strong> for the kitchen on their To-Cook clip (diner style), picks up what's already cooked, and returns to The Front to deliver the food and take order<strong>s</strong>. Repeat.
              </p>
              <p>
              Note: <em>The same applies to other CMS approaches of the Noughties.</em>
              </p>
              <p>
              <div style="width:100%;height:0;padding-bottom:55%;position:relative;"><iframe src="https://giphy.com/embed/u2ffRt7rWafHG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/u2ffRt7rWafHG">via GIPHY</a></p>
              </p>


  </div>

</template>
