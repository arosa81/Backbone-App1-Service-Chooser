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

  // Create a collection of services
  var ServiceList = Backbone.Collection.extend({
    // Will hold objects of the Service model
    model: Service,
    // Return an array only with the checked services
    getChecked: function() {
      return this.where({ checked: true });
    }
  });

  // Prefill the collection with a number of services.
  var services = new ServiceList([
    new Service({ title: 'web development', price: 200 }),
    new Service({ title: 'web design', price: 250 }),
    new Service({ title: 'photoshop', price: 200 }),
    new Service({ title: 'coffee drinking', price: 200 }),
    new Service({ title: 'business analysis', price: 300 }),
    new Service({ title: 'project management', price: 275 })
  ]);

  // This view turns a Service model into HTML. Will create LI elements.
  var ServiceView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click': 'toggleService'
    },
    initialize: function() {
      // Set up event listeners. The change backbone event is raised
      // when a property changes (like the checked field)
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      // Create the HTML
      this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + this.$('input').prop('checked', this.model.get('checked')));
      // Returning the object is a good practice that makes chaining possible
      return this;
    },
    toggleService: function() {
      this.model.toggle();
    }
  });
});
