import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    models: {
      pizza: Model,
      vehicle: Model,
      product: Model,
    },

    factories: {
      vehicle: Factory.extend({
        source() {
          return faker.vehicle;
        },

        name() {
          return this.source.vehicle();
        },

        manufacturer() {
          return this.source.manufacturer();
        },

        model() {
          return this.source.model();
        },

        type() {
          return this.source.type();
        },

        fuel() {
          return this.source.fuel();
        },

        vin() {
          return this.source.vin();
        },

        color() {
          return this.source.color();
        },

        vrm() {
          return this.source.vrm();
        },

        bicycle() {
          return this.source.bicycle();
        },

        image() {
          return faker.image.transport(768, 432);
        }
      }),
      product: Factory.extend({
        source() {
          return faker.commerce;
        },

        name() {
          return this.source.product();
        },

        department() {
          return this.source.department();
        },

        description() {
          return this.source.productDescription();
        },

        price() {
          return this.source.price();
        },

        material() {
          return this.source.productMaterial();
        },

        color() {
          return this.source.color();
        },

        thumbnail() {
          return faker.image.imageUrl(768, 432);
        }
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/pizzas', (schema, request) => {
        return schema.pizzas.all();
      });

      this.get('/vehicles', (schema, request) => schema.vehicles.all());
      this.get('/products', (schema, request) => schema.products.all());
    },

    seeds(server) {
      // Note: seeder gets skipped while in the test environment.
      server.db.loadData({
        pizzas: [
          { name: 'Pepperoni' },
          { name: 'Plain' },
          { name: 'Sausage' },
        ],
      });

      server.createList('vehicle', 5);
      server.createList('product', 15);
    }
  });
}
