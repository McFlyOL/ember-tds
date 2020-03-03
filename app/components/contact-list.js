import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	nom: '',
    prenom: '',
    email: '',
	showAddWindow: false,
	showEditWindow: false,
	selectedId: undefined,
	store: service(),
	actions: {
		submit() {
			if(this.nom != null){
				this.handleCreateRecord({
					nom: this.nom,
					prenom: this.prenom,
					email: this.email,
				});
			}

			this.set('showAddWindow', false);
			this.set('nom', '');
			this.set('prenom', '');
			this.set('email', '');
		},

		cancel() {
			this.set('showAddWindow', false);
			this.set('nom', '');
			this.set('prenom', '');
			this.set('email', '');
		},

		updateContact(id) {
			this.store.findRecord('contact', id).then(record => {
				this.set('showEditWindow', true);
				this.set('selectedId', id);
				this.set('nom', record.nom);
				this.set('prenom', record.prenom);
				this.set('email', record.email);
			})
		},

		update() {
			this.handleUpdateRecord({
				id: this.selectedId,
				nom: this.nom,
				prenom: this.prenom,
				email: this.email,
			});
			this.set('showEditWindow', false);
			this.set('nom', '');
			this.set('prenom', '');
			this.set('email', '');
		},
		delete(id) {
			this.handleDeleteRecord({
				id: id,
			});
		},
	}
	
});