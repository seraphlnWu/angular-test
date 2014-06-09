function CartController($scope) {
    $scope.items = [
        {title: 'Paint pots', quantity: 8.0, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5.0, price: 6.95}
    ];

    $scope.remove = function(index) {
        $scipe.items.splice(index, 1);
    };

    $scope.totalCart = function() {
        var total = 0;
        for(var i = 0, len=$scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        return total;
    }
}
