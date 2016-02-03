'use strict';

angular
    .module('atomic-notify', [])
    .config(['$provide', function($provide){
        $provide.provider('atomicNotify', function(){

            var settings = {
                delay: 0,
                useicon: true
            };

            this.setDefaultDelay = function(delay){
                settings.delay = delay;
            };

            this.useIconOnNotification = function(use){
                settings.useicon = use;
            };

            this.$get = function() {
                return settings;
            };

        });
    }])
    .service('atomicNotifyService', ['atomicNotify', function(atomicNotify){

        var exports = {};

        var getDirective = function(){
            return angular
                .element('ng-atomic-notify')
                .isolateScope();
        };

        var displayNotify = function(options, delay){
            getDirective()
                .addItem({
                    type: options.type,
                    icon: ((atomicNotify.useicon) ? options.icon : false),
                    text: options.text
                }, delay || atomicNotify.delay);
        };

        exports.success = function(message, delay){
            displayNotify({
                type: 'success',
                icon: 'fa fa-check',
                text: message
            }, delay);
        };

        exports.error = function(message, delay){
            displayNotify({
                type: 'error',
                icon: 'fa fa-times',
                text: message,
                delay: delay
            }, delay);
        };

        exports.info = function(message, delay){
            displayNotify({
                type: 'info',
                icon: 'fa fa-bell-o',
                text: message
            }, delay);
        };

        exports.warning = function(message, delay){
            displayNotify({
                type: 'warning',
                icon: 'fa fa-exclamation',
                text: message
            }, delay);
        };

        exports.custom = function(type, message, iconClass, delay){
            displayNotify({
                type: type,
                icon: iconClass,
                text: message
            }, delay);
        };

        return exports;

    }])
    .directive('ngAtomicNotify', ['$compile', '$timeout', function($compile, $timeout){

        var link = function($scope, element, attr){
            var template = '<div class="atomic-notify"><div class="atomic-notify-item" ng-repeat="item in items" ng-class="discoverClass(item)"><div class="icon" ng-if="item.icon"><i ng-class="item.icon"></i></div><div class="body"><p>{{item.text}}</p></div><button type="button" class="close" ng-click="dismiss(item)">&times;</button></div></div>';
            if(angular.isString(attr.customTemplate)){
                $scope.templateUrl = attr.customTemplate;
                template = '<ng-include src="templateUrl" />';
            }
            element.html(template);
            $compile(element.contents())($scope);
        };

        var controller = function($scope){
            $scope.items = [];

            $scope.addItem = function(options, delay){
                $scope.items.push(options);
                if(delay > 0){
                    $timeout(function(){
                        $scope.dismiss(options);
                    }, delay);
                }
            };

            $scope.dismiss = function(item){
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);
            };

            $scope.discoverClass = function(item){
                return 'atomic-notify-' + item.type;
            };
        };

        return {
            scope: {},
            restrict: 'E',
            link: link,
            controller: ['$scope', controller]
        };

    }]);
