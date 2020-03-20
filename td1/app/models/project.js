import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  descriptif:DS.attr(),
  startDate:DS.attr(),
  dueDate:DS.attr(),
});
