﻿/*!
 * Generated by ActivePresenter 6.1.4 HTML5 (2017.11.24)
 */
﻿/*!
 * Atomi HTML5 Player - Template parameters
 * Copyright (c) Atomi Systems, Inc. All rights reserved.
 * http://atomisystems.com
 * Created: 2008/01/20
 * Modified: 2016/03/25
 */

var PrezInfo = {
	Name:"tipo de aprendiente",
	Description:"",
	Date1: "2/27/2018",
	Author:"txusezun",
	Copyright:"",
	Homepage:"",
	RLVersion: "6.1.4",
	AppHomePage: "https://atomisystems.com",
	ViewPort: {width:640, height:480},
	Language: "en-US",
	TextDir: "ltr",
	Generator: "ActivePresenter 6.1.4"
};

// LMS package type (Don't change these values)
PackageType = {
	NONE: 0,
	SCORM: 1,
	TINCAN: 2
};

var Options = {"opmodes":2,"GenPreview":false,"language_id":60,"report_format":-1,"use_webm_ogg":false,"report_value":"","pass_condition":2,"ShowReport":true,"ExportHTML5":true,"pass_value":58,"report_method":0,"FlashABSpeed":0,"AllowNavigate":false,"test_max_time":0,"allow_select_text":true,"image_format":"png","ConfirmRestart":false,"HilightFocus":false,"GenerateSeparatePackage":true,"UseAccText":false,"ScormScorePercent":false};
var TemplateParams = {
   IniVolume:80,
   IniCCShow:0,
   HighLevelStepText:false,
   SlideListPos:5,
   ShowDuration:2,
   ShowSlideAsGroup:false,
   ToolbarHeight:28,
   ImagePath:"player/images/",
   IniAutoFit:1,
   ShowDetailedStepsInPractice:0,
   AlwaysShowSlideList:false,
   IniSlideListShow:0,
   NavInPractice:false,
   DockPaneSize:250
}
;
var bSendToLMS = false;
var ePackageType = PackageType.NONE;
 
var PlayModes = {
	DEMO:	1,
	TUT:	2,
	PRAC:	4,
	TEST:	8
};

var UIPos = {
	//These correspond to value list in manifest
	TOP: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTTOM: 3,
	FLOATING: 4,
	NONE: 5
};

/* Tin Can configuration */

// ActivityID that is sent for the statement's object
var TINCAN_COURSE_ID = "";

// CourseName for the activity
var TINCAN_COURSE_NAME = {"en-US": ""};

// CourseDesc for the activity
var TINCAN_COURSE_DESC = {"en-US": ""};

// Pre-configured LRSes that should receive data, added to what is included
// in the URL and/or passed to the constructor function.
//
// An array of objects where each object may have the following properties:
//
//    endpoint: (including trailing slash '/')
//    auth:
//    allowFail: (boolean, default true)
//    version: (string, defaults to high version supported by TinCanJS)
var TINCAN_RECORD_STORES = [];
