'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ColorPicker = new Module('colorPicker'); 

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ColorPicker.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ColorPicker.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  
  ColorPicker.aggregateAsset('css', 'colorPicker.css');
  ColorPicker.aggregateAsset('css', 'angular-color-picker.css');
  ColorPicker.aggregateAsset('js', 'angular-color-picker.js');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ColorPicker.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ColorPicker.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ColorPicker.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ColorPicker;
});
