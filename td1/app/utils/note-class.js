import EmberObject, { computed } from '@ember/object';
 
export default EmberObject.extend({
    content: '',
    MAX: 100,
    info: null,
    size: computed('content',function(){
        return this.MAX-this.content.length;
      }),
});