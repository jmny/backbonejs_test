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

        var Item = Backbone.Model.extend({

            validate:function (attributes){
                if(!attributes.name) {
                    return "name must be set!";
                }
            },

            initialize : function Doc() {
                console.log('Doc Constructor');

                this.bind("error", function(model, error){
                    console.log( error );
                });

            },
        });

        var List = Backbone.Collection.extend({
            model : Item,
            url: function() {
                return this.document.url() + '/list';
            },
            initialize : function() {
                console.log('Docs collection Constructor');
            }
        });


        var ListView = Backbone.View.extend({
            el: $('#mylist'),
            model: List,
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
