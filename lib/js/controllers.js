var aMailServices = angular.module('AMail', []);

function emailRouteConfig($routeProvider) {
    $routeProvider.
    when('/', {controller: ListController, templateUrl: 'list.html'}).
    when('/view/:id', {controller: DetailController, templateUrl: 'detail.html'}).
    otherwise({redirectTo: '/'});
}

aMailServices.config(emailRouteConfig);

messages = [{
    id: 0, sender: 'seraphln@gmail.com', subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00', recipients: ['seraphwlq@gmail.com'],
    message: 'Hey, I missed buddy'
    }, {id: 1, sender: 'seraphln@gmail.com', subject: 'Hi there, old friend',
        date: 'Dec 7, 2013 12:32:00', recipients: ['seraphwlq@gmail.com'],
        message: 'Hey, I missed buddy'
}];

function ListController($scope) {
    $scope.messages = messages;
}

function DetailController($scope) {
    $scope.message = messages[$routeParams.id];
}
