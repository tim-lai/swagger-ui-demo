## Overview
SwaggerUI features a powerful Plugin API that gives user the ability to customize and extend functionality and layout.  

[Live Demo](https://tim-lai.github.io/swagger-ui-demo/)  

This demo provides examples of the following:
- Custom Logo and Nav Bar
- Custom Layout that moves the Filter Input Bar above the API definition
- Use of state change to toggle the Custom Logo and Mode Text
- Custom color scheme
- Extended Filter functionality

Specifically, from the SwaggerUI Plugin API, we:
- wrapActions
- wrapComponents
- create custom actions, selectors, reducers

## Guide

This repo has step-by-step development branches to make it easier to follow progression.  

**1-logo-and-colors** - Setup the initial plugin. Apply custom logo and colors  

**2-toggleword-and-state** - Enable mode toggle via the TopBar. Setup Redux state in TopBar. Test via `console.log` or Redux Dev Tools (Chrome Extension)  

**3-filter-container** - Display a cloned FilterContainer beneath the TopBar. Since we are using a cloned FilterContainer, we set it to always display via `layoutActions.updateFilter(true)`  

**4-ops-filter** - New advanced filter function, along with a wrapped `Operations` component to call our `filterByOpsMethodAndOperation` instead of the default `fn.opsFilter`  

**5-toggle-logo-with-state** - Visible UI changes when toggling state, a continuation from **2-toggleword-and-state**. Also, reorganize filenames for better consistency, though it might be a bit harder to follow with name changes.  


## Getting Started

Install dependencies:

### `npm i`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Resources

[Swagger UI Plugin system overview](https://swagger.io/docs/open-source-tools/swagger-ui/customization/overview/)

[OpenAPI 3 (OA3) Specification](https://swagger.io/docs/specification/basic-structure/)

[OpenAPI 2 Specification, aka Swagger 2.0](https://swagger.io/docs/specification/2-0/basic-structure/)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## License
This project is licensed under the MIT License.
