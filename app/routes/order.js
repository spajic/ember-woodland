import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),
  model(params) {
    const store = this.store;
    return store.getOrders().findBy('id', params.order_id);
  }
});
