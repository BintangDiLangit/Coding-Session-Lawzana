export interface CheckoutFormData {
  email?: string;
  phone?: string;
  fullName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  deliveryMethod?: DeliveryMethod;
  paymentMethod?: string;
}

export interface DeliveryMethod {
  id: number;
  title: string;
  turnaround: string;
  price: string;
}
