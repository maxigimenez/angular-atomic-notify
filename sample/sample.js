'use strict';

angular
    .module('sample', ['atomic-notify'])
    .config(['atomicNotifyProvider', function(atomicNotifyProvider){
        
        // atomicNotifyProvider.setDefaultDelay(5000);
        // atomicNotifyProvider.useIconOnNotification(true);

    }])
    .controller('HomeController', function($scope, atomicNotifyService){

        $scope.simple = function(){
            atomicNotifyService.info('Yes, this is the default notification :D');
        };

        $scope.warning = function(){
            atomicNotifyService.warning('Upss you broke the internets');
        };

        $scope.success = function(){
            atomicNotifyService.success('Yeah!, this works as expected!');
        };

        $scope.error = function(){
            atomicNotifyService.error('Something went\'t wrong');
        };

        $scope.custom = function(){
            atomicNotifyService.custom('info', 'Another round!', 'fa fa-beer');
        };

    });