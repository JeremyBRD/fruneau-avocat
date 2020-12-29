// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
//= require 'greensock/TweenLite'
//= require 'greensock/easing/EasePack'

// Internal imports :
import { openContactForm, closeContactForm } from '../components/contactForm';

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

// Init functions in Turbolinks
document.addEventListener('turbolinks:load', () => {
  openContactForm();
  closeContactForm();
});

require("trix")
require("@rails/actiontext")
