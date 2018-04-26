(function () {
    var app = angular.module('store2', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    var panel = app.controller('PanelController', function () {
        this.tab = 1;
        this.setTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

    });

    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: '.....',
        canPurchase: true,
        image: 'shopping-02.png',
        reviews: [
            {
                stars: 5,
                body: "I love this product",
                author: "john@aclas.com"
            },
            {
                stars: 1,
                body: "this product sucks",
                author: "allen@aclas.com"
            }]



    },
 {
     name: "Pentagonal Gem",
     price: 5.95,
     description: ". . .",
     canPurchase: true,
     image: 'shopping-19.png',
     reviews: [
            {
                stars: 4,
                body: "It's awesome",
                author: "ben@aclas.com"
            },
            {
                stars: 1,
                body: "Disappointed",
                author: "macc@aclas.com"
            }]

 }];

})();