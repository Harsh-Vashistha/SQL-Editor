# Getting Started with Create React App

This is a Single Page Application made on React js
![image](https://user-images.githubusercontent.com/45832558/200386160-1c053ea2-5c29-4e12-a27a-549c26a27acb.png)




## 💥Features
✨ User can enter SQL query and run it </br>
✨ Change font size of SQL editor </br>
✨ Sort data of result column wise by click on column header </br>
✨ Global search to get a record by entering value </br>
✨ Execute saved query by click on it (saved queries are displayed in dropdown style) </br>
✨ Pagination support in case result data is large</br>
✨ Download json and csv file </br>
✨ Copy to clipboard button </br>



## Saved Queries
* SELECT * FROM CUSTOMER 
* SELECT * FROM CATEGORY
* SELECT * FROM EMPLOYEES
* SELECT * FROM EMPLOOYEE_TERRITORIES


## ⏱Page Load Time
Page Load Time is 0.5sec</br>
Test Results from Chrome-Lighthouse🔦🏠 
![image](https://user-images.githubusercontent.com/45832558/200248676-07ed28ce-21ca-47b1-a80e-296cfe324d3f.png)


## 🏃🏻‍♂️💨How I optimised the pageload time
 🔨 Lazy import of the components</br>
 🔨 Used tree shaking concept</br>
 🔨 Made use of React's memoization to load table results</br>

## Libraries used
* antd : for some UI elements
* papaparse : used to parse csv and json data
* react-table : used to display table
* react-ace : used for editor screen


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
