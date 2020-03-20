import Route from '@ember/routing/route';
import EmberObject,{set} from '@ember/object';
  export default Route.extend({
      model(){
          return{
            developer:{}
          };
      },
    actions: {
        addDeveloper(Ndeveloper){
            let developer=this.store.createRecord('developer',EmberObject.create(Ndeveloper));
            developer.save().then(set(Ndeveloper,"Ndeveloper",{}));
            this.transitionTo("developers");
        }
    }
})  