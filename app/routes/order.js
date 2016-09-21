import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Maria'}
    ].findBy('id', params.order_id);
  }
});
