class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class OrderItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotal() {
      return this.product.price * this.quantity;
    }
  }
  
  class Order {
    constructor() {
      this.items = []; // agregação
    }
  
    addItem(product, quantity) {
      // GRASP — Creator
      const item = new OrderItem(product, quantity);
      this.items.push(item);
    }
  
    getTotal() {
      return this.items.reduce((acc, item) => acc + item.getTotal(), 0);
    }
  }
  


  const pizza = new Product(1, "Pizza", 50);
  const soda = new Product(2, "Refrigerante", 10);
  
  const order = new Order();
  order.addItem(pizza, 2);
  order.addItem(soda, 3);
  
  console.log("Total:", order.getTotal()); 
  