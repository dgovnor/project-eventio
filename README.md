## This is an Event app visit [Eventio](https://project-eventio-4mtij4f94-dgovnor.vercel.app/) to have a feel

Built with Nextjs, Typescript and React

## Getting Started

First, run the development server:

```bash
// Install all needed dependencies
yarn

yarn run dev


```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Test, Lint and Stylelint

```bash
// Test function
yarn run test

// Lint code with eslint
yarn run lint:js

// style lint to ensure error free codebase
yarn run stylelint


```

### Test and use Components with storybook

```bash
// Install all needed dependencies
yarn run storybook

```

READ: [Storybook](https://storybook.js.org/docs/react/get-started/introduction) for more documentation on how to use it.

## Links

API documentation: [Apis](https://strvtestprojectv2.docs.apiary.io/)\
 App Preview:[Design Previews](https://drive.google.com/drive/folders/1NCcD0u-3UMiP8PXkzL-Embyw3_AcpTBi)\
 DESIGNS:[Figma](https://www.figma.com/file/1sXplbYZYnKSb6eXaJ44pT/Eventio---Frontend-Test-Project)

### What has been done

#### Login and Authorized State

- [x] Implement UI accordingly to graphic resources
- [x] Implement form functionality
- [x] Hook up API
- [x] After logging in, users should be redirected to a list of all events
- [x] Implement logout functionality

#### Event List

- [x] Implement UI accordingly to graphic resources
- [x] Implement toggle view mode functionality
- [x] Hook up API
- [x] List and filter All/Past/Future events
- [x] Implement JOIN/LEAVE event functionality

#### Create Event

- [x] Implement UI accordingly to graphic resources
- [x] Implement form functionality
- [x] Hook up API

### 404 Page

- [x] Implement UI accordingly to graphic resources

### What needs to be done

- [ ] Hide Buttons for filtering events when in mobile view`

- [ ] Fix Native date picker for mobile as it doesn't feel intuitive

- [ ] Align login page for mobile view correctly

- [ ] Fix show / hide password button click on enter

- [ ] Sign up / Reset password - This can be done in the page folder.

- [ ] Event detail / Profile page - Same as the sign up page.

## NOTE

- All components are in the ui-kit folder, make it a point of urgency to add components that are resuable in the component folder (DO NOT ADD PAGES)

- There are 2 routes available public and private route: the public route doesn't need authorisation to access while the private route does. Wrap all private route with the 'privateRoute' function.

- I am still testing the waters (my abilities) with nextjs so just a little of their documentation was implemented have a look at next as it seems like it will help with performance a lot.

- Follow the simple process of the api factory where all api calls are made.

## Deployment

This App was deployed with [Vercel](https://vercel.com/)

## Lastly

Do not hesitate to get across to me incase of any question.

This is my baby, Turn her into a matured girl :sparkles:
