Ionic Tabbed Slidebox
====================================

This component is wrapper of [ionic slidebox][1]. This will contain tabs/icons at the top of the slidebox. Clicking the tabs/icons will trigger the slidebox to go to corresponding page.

###Preview: 

![Preview of tabbed slidebox](http://ionic-sarav.rhcloud.com/ionic/tabbedSlideBox/preview.jpg "Preview of tabbed slidebox")

###Demo: [Ionic tabbed slidebox] [2]

Installing
======
- Add `tabSlideBox.css`  and `tabSlideBox.js` in your html after ionic/angular js files


```html
<link href="tabSlideBox.css" rel="stylesheet"/>
<script src="tabSlideBox.js"></script>

```

- Include `tabSlideBox` as a module for your app

```html
var app = angular.module('slidebox', ['ionic', 'tabSlideBox']);

```

- Add the html in your template

```html
            <tab-slide-box>
			    	<div class="tsb-icons">
			    		<div class="tsb-ic-wrp">
							<a href="javascript:;" class="ion-home"></a>
							<a href="javascript:;" class="ion-game-controller-b"></a>
							<a href="javascript:;" class="ion-email"></a>
							<a href="javascript:;" class="ion-model-s"></a>
							<a href="javascript:;" class="ion-person"></a>
						</div>
			    	</div>
			        <ion-slide-box show-pager="false" on-slide-changed="slideHasChanged($index)">
			            <ion-slide>
			                <h1>Home content</h1>
			            </ion-slide>
			            <ion-slide>
			                <h1>Games content</h1>
			            </ion-slide>
			            <ion-slide>
			                <h1>Mail content</h1>
			            </ion-slide>
						<ion-slide>
			                <h1>Car content</h1>
			            </ion-slide>
			            <ion-slide>
			                <h1>Profile content</h1>
			            </ion-slide>

			        </ion-slide-box>
            </tab-slide-box>

```
Options
======
- select a tab onload - set `tab` attribute for `tab-slide-box`. If not set, it will default to middle tab

[1]:http://ionicframework.com/docs/api/directive/ionSlideBox/
[2]:http://ionic-sarav.rhcloud.com/ionic/tabbedSlideBox/