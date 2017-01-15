// Core Classes
var Composition = Java.type('com.idlecode.keynova.core.Composition');
var Clock = Java.type('com.idlecode.keynova.core.Clock');
var Color = Java.type('com.idlecode.keynova.core.Color');
var ListColorProvider = Java.type('com.idlecode.keynova.core.ListColorProvider');
var SingleAlphaProvider = Java.type('com.idlecode.keynova.core.SingleAlphaProvider');
var FadeOutAlphaProvider = Java.type('com.idlecode.keynova.core.FadeOutAlphaProvider');

// Nodes
var KeyListener = Java.type('com.idlecode.keynova.nodes.KeyListener');
var NewKeyBurst = Java.type('com.idlecode.keynova.nodes.NewKeyBurst');

// Composition Creation
var composition = function () {
  var red = Color.rgb(1.0, 0.0, 0.0);
  var blue = Color.rgb(0.0, 0.0, 1.0);
  var yellow = Color.rgb(1.0, 1.0, 0.0);
  var purple = Color.rgb(1.0, 0.0, 1.0);
  var gold = Color.rgb(1.0, 0.6, 0.0);
  var green = Color.rgb(0.0, 1.0, 0.0);
  var colorList = [ red, gold, yellow, green, blue, purple ]

  var clock = new Clock();
  var listener = new KeyListener(clock);
  var singleAlphaProvider = new SingleAlphaProvider(1.0);
  var fadeOutAlphaProvider = new FadeOutAlphaProvider(1.0, 1000);
  var listColorProvider = new ListColorProvider(colorList, singleAlphaProvider);
  var wave = new NewKeyBurst(clock, listener, 200, listColorProvider, fadeOutAlphaProvider);
  return new Composition(wave);
};