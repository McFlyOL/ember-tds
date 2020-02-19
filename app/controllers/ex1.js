import Controller from '@ember/controller';

export default class Ex1Controller extends Controller {  
    actions={
        save(note){
          if(note.get('content')) {
            note.set('info', 'Votre note est sauvegardée : '+note.get('content'));
          }
        },
        clear(note){
            note.set('content','');
            note.set('info','');
        }
      }
}
