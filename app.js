/*
 * TODO :
 * - mettre une collection json a dispo, ainsi que le model et la coleciton bjs associé
 * - associer la collection à la vue et l'afficher
 * - afficher partiellement la collection
 *
 * - passer par des sous vues, complexifier l'item de listing
 */
var main = {};
$(document).ready(function() {
    (function($, main) {
        var ListView = Backbone.View.extend({
            el: $('#mylist'),

            initialize: function(){
                _.bindAll(this, 'render');

                this.render();
                return true;
            },

            render: function(){
                this.$el.html("<span >load listing</span> <ul> <li>empty</li> </ul>");
                return this;
            }
        });

        main.listView = new ListView();
    })($, main);
});
