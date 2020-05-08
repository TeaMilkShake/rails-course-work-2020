// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("jquery");
import 'imports-loader?define=>false,module.exports=>false!jquery-validation';

//Validation
require("packs/register-validation")
require("packs/login-validation")
require("packs/post-validation")

//Remote search
require("packs/search-remote")

//Menu stuff
require("packs/nav-javascript")

//Owl carousel
require("packs/owl.carousel.min")
require("packs/my-owl-script")

require("packs/owl-suggestion-carousel")

//Object scripts
require("packs/object-scripts")

//New post image preview
require("packs/image-preview")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
