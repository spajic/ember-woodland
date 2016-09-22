import Ember from 'ember';

export default Ember.Service.extend({
  getOrders() {
    return [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Maria'}
    ];
  }
});
