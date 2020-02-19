import Route from '@ember/routing/route';
import contacts from '../../models/contacts';

export default Route.extend({
        model() {
            return Contacts.create({
            
            })
        },
        actions: {
            addContact(datas){
                this.store.createRecord(datas);
            }
        }
})  
