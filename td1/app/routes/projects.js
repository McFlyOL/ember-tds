import Route from '@ember/routing/route';


export default Route.extend({

    model() {
      return this.store.findAll('project');
      },    

      actions :{
        deleteProject(Dproject){
          let projectDelete = this.store.peekRecord('project', Dproject);
          projectDelete.destroyRecord();
          Dproject.save();
      }
    }    
});
