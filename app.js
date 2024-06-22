var app = angular.module('skincareApp', []);

app.controller('mainController', function($scope) {
    $scope.skinTypes = ['Dry', 'Oily', 'Combination', 'Normal'];
    $scope.skinConcerns = ['Acne', 'Dryness', 'Oiliness', 'Aging', 'Hyperpigmentation','Blackheads','Clogged Pores','DarkSpots'];
    $scope.skincareCategories = ['Serums', 'Toners', 'Moisturizers', 'Sheet Masks', 'Sunscreens', 'Face Wash', 'Scrubs'];

    $scope.productsData = {
        'Serums': [
            { 
                name: 'Acne Control Serum', 
                image: 'images/Acne Control Serum.png', 
                suitableFor: ['Acne'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Hydrating Serum', 
                image: 'images/Hydrating Serum.png', 
                suitableFor: ['Dryness', 'Aging'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Oil Control Serum', 
                image: 'images/Oil Control Serum.png', 
                suitableFor: ['Oiliness', 'Acne'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            
            { 
                name: 'Anti Aging Serum', 
                image: 'images/Anti Aging Serum.png', 
                suitableFor: ['Aging'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Hyperpigmentation Serum', 
                image: 'images/Hyperpigmentation Serum.png', 
                suitableFor: ['Hyperpigmentation'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Blackhead Control Serum', 
                image: 'images/Blackhead Serum.png', 
                suitableFor: ['Blackheads'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Pore Control Serum', 
                image: 'images/Pore Control Serum.png', 
                suitableFor: ['Oily', 'Clogged Pores'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Dark Spot reduction Serum', 
                image: 'images/hydrating_serum.jpg', 
                suitableFor: ['DarkSpots'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
        ],
        'Toners': [
            { 
                name: 'Acne Control Toner', 
                image: 'images/Acne Control Toner.png', 
                suitableFor: ['Oiliness','Acne'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Hydrating Toner', 
                image: 'images/Hydrating Toner.png', 
                suitableFor: ['Dryness'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Oil Control Toner', 
                image: 'images/balancing_toner.jpg', 
                suitableFor: ['Oiliness', 'Acne'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Anti Aging Toner', 
                image: 'images/Oil Control Toner.png', 
                suitableFor: ['Aging'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Hyperpigmentation Toner', 
                image: 'images/Hyperpigmentation Toner.png', 
                suitableFor: ['Hyperpigmentation'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Blackheads Control Toner', 
                image: 'images/Blackhead toner.png', 
                suitableFor: ['Blackheads'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Pore Control Toner', 
                image: 'images/Pore Control Toner.png', 
                suitableFor: ['Oily','Clogged Pores'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Darkspot Reduction Toner', 
                image: 'images/Dark Spot Toner.png', 
                suitableFor: ['DarkSpots'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
        ],
        'Moisturizers': [
            { 
                name: 'Hydrating Cream', 
                image: 'images/hydrating_cream.jpg', 
                suitableFor: ['Dryness', 'Aging'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
            { 
                name: 'Mattifying Moisturizer', 
                image: 'images/mattifying_moisturizer.jpg', 
                suitableFor: ['Oiliness'],
                skinType: ['Dry', 'Oily','Combination','Normal']
            },
          
        ],
        // Add more categories as needed
    };

    $scope.selectedProducts = [];
    $scope.showProducts = function(category) {
        $scope.selectedProducts = $scope.productsData[category].filter(function(product) {
            return $scope.selectedConcerns.every(function(concern) {
                return product.suitableFor.includes(concern);
            }) && product.skinType.includes($scope.selectedSkinType);
        });
    };

   
});
