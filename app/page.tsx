"use client";

import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import ContactForm from "@/components/Contact";
import ShippingForm from "@/components/shipping";
import DeliveryMethodForm from "@/components/DeliveryMethod";
import PaymentForm from "@/components/payment";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4-10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2-5 business days", price: "$16.00" },
];

const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contact: { email: "", phone: "" },
    shipping: { name: "", address: "", city: "", postalCode: "" },
    deliveryMethod: deliveryMethods[0],
    paymentMethod: paymentMethods[0],
  });

  const handleInputChange = (step: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
  };

  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const handlePreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleDeliveryMethodChange = (method: any) => {
    setFormData((prev) => ({
      ...prev,
      deliveryMethod: method,
    }));
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method: any) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const steps = [
    { id: 1, name: "Contact information" },
    { id: 2, name: "Shipping information" },
    { id: 3, name: "Delivery method" },
    { id: 4, name: "Payment" },
  ];

  return (
    <div className="bg-gray-50 relative flex">
      <div className="rounded-md bg-yellow-50 p-4 w-[350px] h-auto   shadow  ">
        <div className="flex sticky top-4">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              aria-hidden="true"
              className="h-5 w-5 text-yellow-400"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Tasks</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul role="list" className="list-disc space-y-4 pl-5">
                <li>
                  Show only the form that matches the current step in the
                  progress bar.
                </li>
                <li>
                  Be able to navigate to previous steps to update data, but
                  prevent them from jumping to the next step (whether by
                  clicking the "Next" button or the progress bar) until all
                  required fields in the current step are filled.
                </li>
                <li>
                  Refactor the component – currently, all components are in the
                  same file, which needs to be separated into individual
                  components for better structure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6  lg:px-8">
        {/* Progress Bar */}
        <ProgressBar
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        {/* Render Forms Based on the Current Step */}
        <form className="lg:grid mt-8">
          <div>
            {currentStep === 1 && (
              <ContactForm
                formData={formData.contact}
                onInputChange={(field, value) =>
                  handleInputChange("contact", field, value)
                }
                onNext={handleNextStep}
              />
            )}

            {currentStep === 2 && (
              <ShippingForm
                formData={formData.shipping}
                onInputChange={(field, value) =>
                  handleInputChange("shipping", field, value)
                }
                onNext={handleNextStep}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 3 && (
              <DeliveryMethodForm
                deliveryMethods={deliveryMethods}
                selectedMethod={formData.deliveryMethod}
                onMethodChange={handleDeliveryMethodChange}
                onNext={handleNextStep}
                onPrevious={handlePreviousStep}
              />
            )}

            {currentStep === 4 && (
              <PaymentForm
                paymentMethods={paymentMethods}
                selectedPaymentMethod={formData.paymentMethod}
                onPaymentMethodChange={handlePaymentMethodChange}
                onPrevious={handlePreviousStep}
                onConfirm={() => alert("Payment Confirmed")}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
