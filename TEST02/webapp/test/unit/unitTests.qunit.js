/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/TEST02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});