window.PAYMENT_CONFIG = {
  // Use your Paystack public key here. Never put a secret key in this file.
  publicKey: "pk_test_b04b956cf1731ea10bbef58dcdeea9cbb96aa52c",
  currency: "GHS",
  businessName: "Wi-Fi Access",

  // This endpoint must verify the Paystack reference with your secret key,
  // then return a valid Omada voucher code for the paid package.
  verifyEndpoint: "https://galaxy-link-wifi.onrender.com/verify-paystack-voucher",

  plans: [
    {
      id: "wifi_1_hour",
      name: "1 Hour Wi-Fi",
      label: "1 Hour Wi-Fi - GHS 2",
      amount: 200
    },
    {
      id: "wifi_1_day",
      name: "1 Day Wi-Fi",
      label: "1 Day Wi-Fi - GHS 5",
      amount: 500
    },
    {
      id: "wifi_1_week",
      name: "1 Week Wi-Fi",
      label: "1 Week Wi-Fi - GHS 25",
      amount: 2500
    }
  ]
};
