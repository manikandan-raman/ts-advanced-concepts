interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface Discount {
  percentage: number;
  validUntil: string;
}

type DiscountedProduct = Product & Discount;

const product: Product = {
  id: "p123",
  name: "Laptop",
  price: 1200,
  inStock: true,
};

const discountedProduct: DiscountedProduct = {
  id: "p123",
  name: "Laptop",
  price: 1200,
  inStock: true,
  percentage: 10,
  validUntil: "2024-12-31",
};
