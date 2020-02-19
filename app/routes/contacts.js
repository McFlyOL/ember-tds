import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';
import { A } from '@ember/array';

let Contacts=EmberObject.extend({
    datas:A(),
    filtre:A(),
    contacts :computed('filtre', 'datas.@each.isDeleted', function() {
        return ;
    }),
    deleteds: computed('datas.@each.isDeleted',function(){
        return ;
    }),
    deletedsCount : computed("datas", function(){
        return this.get("deleteds").length;
    })
});

export default Route.extend({
    model() {
        return Contacts.create({
          datas : this.store.findAll('contact')})
    },

    actions:{
        fermer(){
            this.transitionTo("");
        },
        delete(contact){
            this.store.deleteRecord(contact);
        },
        cancelDeletion(deleteds){
            deleteds.forEach((item)=>{item.rollbackAttributes();
            });
        }
    }
})
