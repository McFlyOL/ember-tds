  
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
        developer:{}
    };
  },
  actions:{
    updateDeveloper(Udeveloper) {
        this.store.findRecord('developer', Udeveloper.id).then(function (developer) {
            developer.save();
        });
        this.transitionTo("developers")
    },
  }

});