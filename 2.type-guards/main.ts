import {
  BankTransferPayment,
  CreditCardPayment,
  PayPalPayment,
  PaymentDetails,
} from "../1.advanced-types/union";

function isCreditCardPayment(
  payment: PaymentDetails
): payment is CreditCardPayment {
  return payment.method === "credit_card";
}

function isPaypalPayment(payment: PaymentDetails): payment is PayPalPayment {
  return payment.method === "paypal";
}

function isBankTransfer(
  payment: PaymentDetails
): payment is BankTransferPayment {
  return payment.method === "bank_transfer";
}

function printPaymentInfo(paymentDetails: PaymentDetails) {
  if (isCreditCardPayment(paymentDetails)) {
    console.log(`Payment with card number: ${paymentDetails.cardNumber}`);
  } else if (isPaypalPayment(paymentDetails)) {
    console.log(
      `Payment: ${paymentDetails.method}, Email: ${paymentDetails.email}`
    );
  } else if (isBankTransfer(paymentDetails)) {
    console.log(
      `Bank Transfer Payment: ${paymentDetails.accountNumber}, IFSC: ${paymentDetails.ifscCode}`
    );
  }
}

const payment1: PaymentDetails = {
  method: "credit_card",
  cardNumber: "4111111111111111",
  expiryDate: "12/24",
  cvv: 345,
};

printPaymentInfo(payment1);
