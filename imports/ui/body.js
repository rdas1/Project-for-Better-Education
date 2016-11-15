import { Template } from 'meteor/templating';

import { Classes } from '../api/classes.js';

import './body.html';

if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '607425222757758',
      status     : true,
      xfbml      : true
    });
  };
}

Template.carouselTemplate.onRendered (function (){
  //Enable swiping...
$(".carousel-inner").swipe( {
  //Generic swipe handler for all directions
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(this).parent().carousel('next');
  },
  swipeRight: function() {
    $(this).parent().carousel('prev');
  },
  //Default is 75px, set to 0 for demo so any distance triggers swipe
  threshold:0
});
});


Template.body.helpers({
  classes() {
    return Classes.find({});
  },
});

Template.navTemplate.events({
  'click #homeLink':function(e,tmpl) {
    e.preventDefault();
    //console.log("CLICKED");
    $('html, body').animate({
        scrollTop: $("#carousel-wrapper").offset().top
    }, 600);
  },
  'click #missionLink':function(e,tmpl) {
    e.preventDefault();
    //console.log("CLICKED");
    $('html, body').animate({
        scrollTop: $("#who-we-are").offset().top
    }, 600);
 },
 'click #solutionLink':function(e,tmpl) {
   e.preventDefault();
   //console.log("CLICKED");
   $('html, body').animate({
       scrollTop: $("#solution").offset().top
   }, 600);
},
'click #teamLink':function(e,tmpl) {
  e.preventDefault();
  //console.log("CLICKED");
  $('html, body').animate({
      scrollTop: $("#our-member").offset().top
  }, 600);
},
'click #contactLink':function(e,tmpl) {
  e.preventDefault();
  //console.log("CLICKED");
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 600);
},
});

Template.carouselTemplate.events({
  'click #missionLink':function(e,tmpl) {
    e.preventDefault();
    //console.log("CLICKED");
    $('html, body').animate({
        scrollTop: $("#who-we-are").offset().top
    }, 600);
 }
});
