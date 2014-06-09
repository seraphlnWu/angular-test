var shoppingModule = angular.module('ShoppingModule', []);

shoppingModule.factory('Items', function() {
    var items = {};
    items.query = function() {
        return [
            {title: 'Paint pots', description: 'Pots full of paint', price: 3.96},    
            {title: 'Polka dots', description: 'Dots of polka', price: 2.96},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };

    return items;
})

function ShoppingController($scope, Items) {
    $scope.items = Items.query();
}
