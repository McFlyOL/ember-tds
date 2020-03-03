import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';
import { A } from '@ember/array';

let contacts=EmberObject.extend({
    datas:A(),
    filtre:A(),
    contacts :computed('filtre', 'datas.@each.isDeleted', function() {
        return ;
    }),
    deleteds: computed('datas.@each.isDeleted',function(){
        return this.datas.filter((contact)=>contact.get('isDeleted')); ;
    }),
    deletedsCount : computed("datas", function(){
        return this.get("deleteds").length;
    })
});

export default Route.extend({
    model() {
        return this.store.findAll('contact');
    },

    actions:{
        fermer(){
            this.transitionTo("");
        },
        delete(contact){
            contact.destroyRecord();
        },
        cancelDeletion(deleteds){
            deleteds.forEach((item)=>{item.rollbackAttributes();
            });
        }
    }
})
