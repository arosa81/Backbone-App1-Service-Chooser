$(function() {
  // Create a model for the services
  var Service = Backbone.Model.extend({
    // Will contain three attributes.
    // These are their default values
    defaults: {
      title: 'My service',
      price: 100,
      checked: false
    },
    // Helper function for checking/unchecking a service
    toggle: function() {
      this.set('checked', !this.get('checked'));
    }
  });
});
