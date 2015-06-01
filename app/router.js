import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('animal', function() {
    this.route('quadruped', function() {
      this.route('show', { path: '/:type' });
    });
    this.route('biped', function() {
      this.route('show', { path: '/:last_name' });
    });
  });
});

export default Router;
