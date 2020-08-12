# Wunschliste Einmischen-Podcast

## How to use the wishlist
This website reads its content from the config.js. So if you want to add a new item, all you have to do is adding another block to the config, like this:

```json
{
  icon: "iconName",
  title: "any title",
  subtitle: "any subtitle",
  description: "any description",
  fulfilled: false,
},
```
`icon`: The icon name that will be displayed at the left hand side of your wish.
`title`: The title of your wish.
`subtitle`: The subtitle can be anything your like, i.e. IBAN or Author of a book. It's the tiny text displayed next to the title.
`description`: The description will be displayed below the title.
`fulfilled`: If you want to display that a wish has been fulfilled before removing it from the website, you can set fulfilled to `true`. Be aware that you don't need single or double quotes for this one. TL;DR: It's a boolean and not a string.

You can also add some metadata, like the links for your navigation or the text inside the `hero`, the green block on your website.
### How to change your content directly from github

1. Go to your github.pages repository
2. Login to your github account if you didn't already.
3. select `config.js`
4. you will see the contents of your file, with some info and buttons on top inside a grey box.
5. Click on the pen symbol on the right hand side of said grey box. You will open the editing menu.
6. Add / remove content as you like. Please take care of the opening / closing brackets and commas.
7. click on `Preview changes` inside the grey box on top. Please verify that the changes represent what you wanted to do.
8. Scroll down. At the bottom of the page, you should see a box labeled `Commit changes`. Add a description what you changed.
9. Select the radio button for `Commit directly to the master branch`.
10. Press the green button labeled with `Commit changes`.

You're done and your changes should go online any minute!

## Available icons
book, event, gift, microphone, tablet, tech, toy
___________________________________________________
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
