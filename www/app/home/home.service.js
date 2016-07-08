angular.module('Home')

.factory('HomeService', function($http) {
    return {
        getPropertiesByUser: function(email){
            var properties = [
				{"id":1, "image":"img/imovel1.jpg", "type":"Casa", "business":"locacao", "register":"completo" },
                {"id":2, "image":"img/imovel2.jpg", "type":"Terreno", "business":"venda", "register":"completo"},
                {"id":3, "image":"img/imovel3.jpg", "type":"Sala Comercial", "business":"locacao", "register":"incompleto"},
                {"id":4, "image":"img/imovel4.jpg", "type":"Casa", "business":"venda", "register":"completo" }
    		];
    		return properties;
        },
    } 
 })
;