# fcos-suite-astro

> This is a template for the [Astro static site generator](https://astro.build/). You can clone this repository, modify the content and start your own website using the FCOS Suite look & feel. It's supposed to be an easy way for other Fab Cities, Makerspaces and other institutions to get their website up and running quickly while supporting Open Source workflows.

## Motivation

The FCOS Suite project was funded via the [Interfacer project](https://www.interfacerproject.eu/), which aims to support circularity within so-called Fab Cities (hence the name FCOS, which is short for Fab City Operating System). One fundamental part of Fab Cities and circularity is the reliance on Open Source both in Software and Hardware. A key principle of Open Source is the ability for the public the suggest changes to a given piece of code or hardware. However with website content, this is not very common. Typically websites are built with any kind of Content Management System (like Wordpress). And while the CMS itself might be an Open Source project and anyone can contribute to it, this is not the case for the content of most websites.

This is one of the reasons (performance being another one), why so-called Static Site Generators (SSG) have become a popular alternative to classical Content Management Systems. Using a SSG means, that website content is not stored inside of a database, but rather inside of regular text files (typically in Markdown format). These text files can then be added to a versioning system like Git and therefore can be treated just like Open Source Software and Hardware. Anyone can suggest changes to the content and improve it.

To give Makerspaces, Fab Labs, Fab Cities and anyone else involved in the "Maker" scene a sensible set of defaults, we created this website template based on the Astro static site generator.

## Features

- Internationalization: All pages can be created in multiple languages. Translated pages are just separate files in a different folder.
- Map Feature: This project uses the [FCOS Suite Map](https://gitlab.fabcity.hamburg/fcos-suite/fcos-suite-map) and shows an interactive map of POIs, which can also be edited and created via separate Markdown files.

## Changes

[How to edit subpages on the OpenLab Website](https://pad.fabcity.hamburg/s/JCLh_9vhh)

## Translations

By default, the Astro site generator does not support translations (also called internationalization or `i18n`) out of the box. However we added a custom translation functionality:

- Every translation of a page is a separate content file and they are added to separate top-level folders, e.g.
  - German content is located in the `src/pages/de/` folder, English content is located in the `src/pages/en/` folder
  - A translated page is a regular page like any other. Technically it can have completely separate content than the "original" (that wouldn't make a lot of sense, but you can decide do show more/less/modified content for a specific language version) and translations are also optional, so you don't need to translate every single page right away
  - To connect two pages, and indicate that one is a translation of the other, just add the `slug:` property to the frontmatter section of the translated page. E.g. your original file is `src/pages/de/neue-webseite.mdx`, and now you're creating the translated version under `src/pages/en/new-website.mdx`. Just add `translated: de/neue-webseite` to the english content file, to indicate that these two pages belong to each other
  - To go to the translated version of a page, you can either
    - Click on the language selector in the top header bar
    - Just change the locale part of a URL, e.g. if you're looking at `https://myfabcity.com/de/news/neue-webseite` and you want to go to the english version of this page, just change `de` to `en` (`https://myfabcity.com/en/news/neue-webseite`) and you will be redirected to the proper english page


## Local setup

To start this project locally and edit the content of this template, you need to make sure to have [Node.js installed](https://nodejs.org/en/download) on your computer. Then you can follow these steps:

1. Clone the project via Git
2. Switch into the newly created folder
3. Run `npm run dev` in your command line
4. Open your browser at `http://localhost:3000/`