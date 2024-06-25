export interface CreditCardPayment {
  method: "credit_card";
  cardNumber: string;
  expiryDate: string;
  cvv: number;
}

export interface PayPalPayment {
  method: "paypal";
  email: string;
}

export interface BankTransferPayment {
  method: "bank_transfer";
  accountNumber: string;
  ifscCode: string;
}

export type PaymentDetails =
  | CreditCardPayment
  | PayPalPayment
  | BankTransferPayment;

const payment: PaymentDetails = {
  method: "credit_card",
  cardNumber: "4111111111111111",
  expiryDate: "12/24",
  cvv: 345,
};
