import { createServer } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    routes() {
      this.namespace = 'api';

      this.get('pizzas', {
        pizzas: [
          {id: 1, name: 'Pepperoni'},
          {id: 2, name: 'Plain'},
          {id: 3, name: 'Sausage'},
        ]
      });
    }
  })
}
