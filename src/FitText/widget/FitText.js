/*global logger*/
/*
    FitText
    ========================

    @file      : FitText.js
    @version   : 1.0.0
    @author    : Paul Ketelaars
    @date      : 2016-08-17
    @copyright : TimeSeries 2016
    @license   : Apache 2

    Documentation
    ========================
    Scalable headlines using jQuery
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
   "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

    "FitText/lib/jquery-1.11.2",
    "dojo/text!FitText/widget/template/FitText.html",
    "FitText/lib/jquery.fittext"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, _jQuery, widgetTemplate) {
    "use strict";

//    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    return declare("FitText.widget.FitText", [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // DOM elements


        // Parameters configured in the Modeler.
        compressor: "",
        minFontSize: "",
        maxFontSize: "",
        fitTextClass:"",

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.


        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            logger.level(logger.DEBUG);
            logger.debug(this.id + ".constructor");
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            logger.debug(this.id + ".postCreate");

            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            logger.debug(this.id + ".update compressor:" + this.compressor + "minFont:" + this.minFontSize + "maxFont:" + this.maxFontSize);
            logger.debug('//$(.'+this.fitTextClass+').fitText('+this.compressor+', { minFontSize: '+this.minFontSize+"px, maxFontSize: "+this.maxFontSize+"px"+'})');

            //$("."+this.fitTextClass).fitText(this.compressor, { minFontSize: this.minFontSize+"px", maxFontSize: this.maxFontSize+"px"});

            this._updateRendering(callback); // We're passing the callback to updateRendering to be called after DOM-manipulation
        },


        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {
          logger.debug(this.id + ".resize");
        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
          logger.debug(this.id + ".uninitialize");
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },



        // Attach events to HTML dom elements
        _setupEvents: function () {
            logger.debug(this.id + "._setupEvents");
        },

        // Rerender the interface.
        _updateRendering: function (callback) {
            logger.debug(this.id + "._updateRendering");

        }
    });
});

require(["FitText/widget/FitText"]);
