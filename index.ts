import { factorial, isPrime } from "./utils";

// Bai1
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function total(arr: number[]): number {
  return arr.reduce((total, current) => total + current, 0);
}
console.log("totalNumber", total(arr));
//Bai2
interface Person {
  name?: string;
  age?: string;
  email?: string;
}
const user: Person = {
  name: "Dang Trung Kien",
  age: "23",
  email: "kiendt@arrowhitech.co",
};
const inforUser = (item: Person) => {
  return item;
};
console.log("user", inforUser(user));
//Bai3
const findElement = <T>(item: T[]) => {
  return item[0];
};
console.log("firstItem", findElement(["a", "b", "c", "d"]));
//Bai4
enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}
const colorRender = (color: Color) => {
  return color;
};
console.log("color", colorRender(Color.GREEN));
//Bai5
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  acreage() {
    return this.width * this.height;
  }
}

let a = new Rectangle(5, 5);
console.log("acreage", a.acreage());
//Bai6
const decorator = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("Method");
  };
};

class Test {
  name: string;
  age: string;
  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
  // @decorator()
  infor() {
    return `Ten toi la ${this.name}, Nam nay ${this.age} tuoi`;
  }
}
let inforRender = new Test("kien", "23");
console.log("inforRender", inforRender.infor());
//Bai7
const data = async () => {
  try {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log("error");
  }
};

data();
//Bai8
console.log("factorial", factorial(3));
console.log("prime", isPrime(6));
//Bai9
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const listProduct: Product[] = [
  { id: 1, name: "A", price: 60, quantity: 100 },
  { id: 2, name: "A", price: 50, quantity: 200 },
  { id: 3, name: "A", price: 40, quantity: 300 },
  { id: 4, name: "A", price: 30, quantity: 400 },
  { id: 5, name: "A", price: 200, quantity: 500 },
];
console.log("list", listProduct);
const totalPrice = (arr: Product[]) => {
  return arr.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );
};

console.log("totalPrice", totalPrice(listProduct));
const filterPrice: Product[] = listProduct.filter(
  (item: Product) => item.price > 100
);
console.log("filterPrice", filterPrice);
const product: string[] = listProduct.map(
  (item: Product) =>
    `Sản phẩm ${item.name} có giá ${item.price} đồng và còn ${item.quantity} sản phẩm`
);
console.log("product", product);

const totalPriceMax100 = (arr: Product[]) => {
  return arr
    .filter((item: Product) => item.price < 100)
    .reduce(
      (total, current) => total + current.quantity,
      0
    );
};

console.log("totalPriceMax100", totalPriceMax100(listProduct));
const getDiscountedProducts = (listProduct : Product[], rate: number) => {
  return listProduct.map((item: Product) => {
    return {...item, price: item.price - item.price*(rate/100)}
  })
}
console.log("getDiscountedProductss", getDiscountedProducts(listProduct, 50))