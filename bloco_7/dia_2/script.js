const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = () => {
  const orderInfo = Object.assign({}, order.order);
  const deliveryInfo = Object.assign({}, orderInfo.delivery);
  const deliveryPersonName = deliveryInfo.deliveryPerson;
  const clientName = order.name;
  const clientNumber = order.phoneNumber;
  const clientAdress = Object.assign({}, order.address);
  const addressArray = Object.values(clientAdress);
  console.log(`Olá ${deliveryPersonName}, entrega para: ${clientName}, Telefone: ${clientNumber}, ${addressArray[0]}, Nº: ${addressArray[1]}, AP: ${addressArray[2]}`);
}

customerInfo();

const orderModifier = () => {
  const newOrder = Object.assign({}, order);
  const orderInfo = Object.assign({}, newOrder.order);
  const pizzas = Object.assign({}, orderInfo.pizza);
  const drinks = Object.assign({}, orderInfo.drinks);
  newOrder.name = 'Luiz Silva';
  let payment = 0;
  for (const key in pizzas) {
    const pizza = pizzas[key];
    payment += pizza.price;
  }
  payment += drinks.coke.price;
  newOrder.payment = payment;
  console.log(`Olá ${newOrder.name}, o total do seu pedido de ${Object.keys(pizzas)[0]}, ${Object.keys(pizzas)[1]} e ${Object.keys(drinks)} é de R$ ${newOrder.payment},00.`);
}

orderModifier();
