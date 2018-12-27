# Gatsby Single Page Business Site
A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered single page business website based on [gatsby-starter-business](https://github.com/v4iv/gatsby-starter-business).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Demo
[Climate Tech Inc.](https://climatetech.us)

## Features
* Complete Business Single Page Website  - including a Contact Form
* Netlify CMS for Content Management
* SEO Friendly (Sitemap and Google Tag Manager)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Easy Configuration using `config.js` file

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Getting Started
Create your own project with Gatsby CLI:
```shell
gatsby new yourbusinessname https://github.com/franklsm1/gatsby-small-business.git
```

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuratuion
To personalize and configure open `data/config.js` file and replace the default values.

## Deployment
Clicking the button will ask for authentication via Github, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/franklsm1/gatsby-small-business&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)

## Credit to Used Resources
- This [blog post](https://iammatthias.com/blog/netlify-form-gatsby-v2-and-no-cache-1/) was very helpful with completing the contact form
