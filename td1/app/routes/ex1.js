import Route from '@ember/routing/route';
import Note from 'td1/utils/note-class';

export default class Ex1Route extends Route {
    model() {
        return Note.create();
      }

      actions={
        fermer(){
            this.transitionTo("");
        }
    }
}

