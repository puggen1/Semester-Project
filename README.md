# Semester-Project
This is my semester project where i have created an auction website called Bidder

## Table of contents
* [Setup](#setup)
* [Github Status](#status)
* [Links](#links)
* [functions on the page](#functions-that-works-now)
    * [login](#login)
    * [register](#register)
    * [create listing](#create-listing)
    * [bid on listing](#bid-on-listing)
    * [display listings](#display-listings)
    * [display single listings](#display-single-listings)
    * [some simple filter modes](#some-simple-filter-modes)
    * [display profile](#display-profile)
    * [change profile picture](#change-profile-picture)
* [file system](#file-system)
* [design](#design)
    * [Basic design](#basic-design)
    * [css / scss](#css-scss)
    * [bootstrap](#bootstrap)


## status
Github Pages: <br>
[![Deploy build to github pages](https://github.com/puggen1/Semester-Project/actions/workflows/ghPages.yml/badge.svg)](https://github.com/puggen1/Semester-Project/actions/workflows/ghPages.yml)

## setup
for local use, you need to setup the repo like this
when repo is cloned and opened:
run node install
```
npm install
```
setup sass for the latest version
```
npm run sassBuild
```
run liveserver to get preview
```
npm run liveServer
```


## links
### figma
here is the link to both wireframes, design and prototype, as well as styleguide
https://www.figma.com/file/Uj2mGOpk7Iq7ihJctwvIjY/styletile%2C-design-elements%2C-wireframe-and-design?node-id=19%3A2144&t=tnNp3wjpL7ej6iri-1
### github project
here is the github project link. on some tasks there is more information inside the task itself. <br>
https://github.com/users/puggen1/projects/4
### github pages
here is the link to the github pages, where you can see the website. <br>
https://puggen1.github.io/Semester-Project/

### gantt project
here is a picture of the gantt project, where you can see the timeline of work process
![gantt prosjekt](./assets/readmeAssets/semester-project-2022.png)

## functions that works now:

### login
A user can login with the login modal, and/or the sidelogin on pc.
when logged in, you will se more information like your profile picture, and a you tokens in the profile
### register
A user can register with the register modal, and add avatar there as well
if the register is successfull you will be redirected to the login modal
### create listing
on createlisting.html you can create an listing with title, description, image, tags and end date.
**_note_** if you are not logged in, a modal will pop up with a message and buttons back or to login /register modal
### bid on listing
a logged in user can bid on a listing, but will get a error if you do not have enough tokens
### display listings
on the index.html you can see all listings even when not logged in.
### display single listings
you can display a single listing, it will look a bit diffrent based on: if you are logged in, if you are the owner of the listing or if the listing is closed.
### some simple filter modes
you can filter with search, or sort the content with the dropdown select menu
### display profile
you can only display profiles when logged in. if not the restricted modal will apear
you can display your profile, and see your listings, your bids, and your tokens, also you can change your profile picture.
on others profile you can see their listings.

### change profile picture
you can edit you own picture on your profile page

## file system
the files are divided based on the use of the file, all sort functions are in a folder etc.

## design
### Basic design
the design i made has been a little bit changed from figma to html, but overal it is the same.
even thought it looks a bit boring, i feel it works well with the content. only on some pages it feels not that great.

### css / scss
there is some custom scss added, most if for image sizes and buttons for pc version
the rest is bootstrap
### bootstrap
i used bootstrap for most of the design, and try to have is as close to the original bootstrap examples, but some places i changed it to be better for the content i wanted to show

### early wireframes
here are some early wireframes i created on paper
*wireframes here*

