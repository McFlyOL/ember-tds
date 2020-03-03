import Route from '@ember/routing/route';
import contacts from '../contact';

export default Route.extend({
    model() {
        return this.get('store').findAll('contact');
    },
    actions: {
        updateContact(datas){
            this.store.findRecord('contact', datas.id).then(function(contact) {
                contact.set('nom', datas.nom),
                contact.set('prenom', datas.prenom),
                contact.set('email', datas.email)
                contact.save();
            });
        }
    }
})  
