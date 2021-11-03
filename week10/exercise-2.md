## Zoo Website

- Your group has been tasked with prototyping a website for a local zoo. Let one person write the code at a time while others take turns giving input - you can swap out after 5 minutes or so.
- In the starter code, `cd` into `exercise-2`, and run `npm install` and `node app.js` - it’ll be running in your browser at `localhost:3000`.
- Start by trying to display each animal in the `animalsInfo` on the homepage (`layouts/home.handlebars`) with its image - you can access attributes by using something like `{{#each animalsList}}<img src=”{{this.image}} {{/each}}`.
- Once that’s done, try building out the `animalsInfo` object to contain all the animals in `public/img`, and try adding new attributes to each object, like giving them a nickname.
- Display all the animals and the attributes on the homepage.
- Once that’s done, add the other animal attributes to the `animal.handlebars` page to create an individual page for each animal, and try linking to them on the homepage. You should be able to see the individual animal routes by going to [localhost:3000/animal:0](localhost:3000/animal:0).
- See if you can figure out how the `/animal` route is working - it’s already set up so you can see a basic page for each animal, and has a link to the next animal in the list 
- If there’s time remaining, try adding some JavaScript/jQuery or CSS in the `public` folder to make your page more interactive!
