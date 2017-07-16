# Photo-Slider
A collection of designs for photo sliders that I make for both training purposes and later use in projects

## File structure
This repository consists a number of examples of implementations of picture viewers. Every implementation has its own folder.

The root folder of the repository contains the readme and a few loose files. There is also a folder (called 'img') with example pictures that are used in the implementations.

Besides those files and the folder there will be a folder for each implementation (named something along the lines of 'Design 1'). This folder contains an index.html file which is basically the core of the picture viewer. There are also folders for css, javascript en image files (named 'css', 'img', and 'js'). The js folder has a main.js file with all the interactivity between the viewer and the user. The css folder has a main.css file that contains the rules based upon which the html file is constructed and displayed in the browser. The img folder contains images specific to the image viewer implementation.

## What you get
There are a few variations that mostly share the same core functionality. I will go over the specifics to give you a view of what each implementation offers.

#### Fullscreen
First off, there is a folder with a simple viewer that only allows a single picture to be displayed. This functionality is part of all the picture viewers that will follow but I have separated it on request.
This viewer allows the user to click on the picture (or the plus symbol) to view a bigger, scaling, variant of the picture. When clicked, an overlay will open with the picture at its center. Clicking the cross in the top right corner will in turn close the full screen overlay.

#### Design 1
This implementation is a basic carousel that allows the user to view multiple pictures by clicking the navigational arrows on the right and left of the image. The images will loop around, meaning that if you reach the end of the set of pictures, the first one will be shown again.

#### Design 2
Work in progress.
Design 2 works similar to the first design with the difference being that this design contains dots at the bottom of the image that show which picture is selected and allows the selection of a specific image.

## Contribution
Feel free to fork this repo and contribute by expanding/optimizing/adding implementations. Please do make a separate branch for any separate design. Whenever you have something finished you can make a pull request to the branch of the same design (or the master branch if there is no such branch) on this repository.
