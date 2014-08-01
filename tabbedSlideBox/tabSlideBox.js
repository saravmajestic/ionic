/*
 * SimplePubSub from https://github.com/mbenford/ngTagsInput/blob/master/src/util.js
 * */
'use strict';

function SimplePubSub() {
    var events = {};
    return {
        on: function(names, handler) {
            names.split(' ').forEach(function(name) {
                if (!events[name]) {
                    events[name] = [];
                }
                events[name].push(handler);
            });
            return this;
        },
        trigger: function(name, args) {
            angular.forEach(events[name], function(handler) {
                handler.call(null, args);
            });
            return this;
        }
    };
};

angular.module('tabSlideBox', [])
.directive('tabSlideBox', [ '$timeout', '$window', '$ionicSlideBoxDelegate',
	function($timeout, $window, $ionicSlideBoxDelegate) {
		'use strict';

		return {
			restrict : 'A, E, C',
			link : function(scope, element, attrs, ngModel) {
				
				var ta = element[0], $ta = element;
				$ta.addClass("tabbed-slidebox");
				
				var iconsDiv = angular.element(ta.querySelector(".tsb-icons")), icons = iconsDiv.find("a"), wrap = iconsDiv[0].querySelector(".tsb-ic-wrp"), totalTabs = icons.length;
				angular.forEach(icons, function(value, key){
				     var a = angular.element(value);
				     a.on('click', function(){
				    	 $ionicSlideBoxDelegate.slide(key);
				     });
				});
				
				function setPosition(index){
					var middle = iconsDiv[0].offsetWidth/2;
					var curEl = angular.element(icons[index]), curElWidth = curEl[0].offsetWidth, curElLeft = curEl[0].offsetLeft;
					var leftStr = (middle  - (curElLeft) -  curElWidth/2 + 5) + "px";
					wrap.style.webkitTransform =  "translate3d("+leftStr+",0,0)" ;
					
					angular.element(iconsDiv[0].querySelector(".active")).removeClass("active");
					curEl.addClass("active");
				};
				
				var events = scope.events;
				events.on('slideChange', function(data){
					setPosition(data.index);
				});
				
				var initialIndex = attrs.tab;
				//Initializing the middle tab
				if(typeof attrs.tab === 'undefined' || (totalTabs <= initialIndex) || initialIndex < 0){
					initialIndex = Math.floor(icons.length/2);
				}
				
				//If initial element is 0, set position of the tab to 0th tab 
				if(initialIndex == 0){
					setPosition(0);
				}
				
				$timeout(function() {
					$ionicSlideBoxDelegate.slide(initialIndex);
				}, 0);
			},
			controller : function($scope, $attrs, $element) {
				$scope.events = new SimplePubSub();
				
				$scope.slideHasChanged = function(index){
					$scope.events.trigger("slideChange", {"index" : index});
				};
			}
		};

	} 
]);
