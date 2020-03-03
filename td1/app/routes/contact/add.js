import Route from '@ember/routing/route';

export default Route.extend({
        actions: {
            addContact(nom,prenom,email, store){
                let contact = store.createRecord('contact', {
                    nom: nom,
                    prenom: prenom,
                    email: email
                });
                contact.save();
                this.transitionTo('contact');
            }
        }
})  
