interface PaymentFormProps {
  paymentMethods: { id: string; title: string }[];
  selectedPaymentMethod: { id: string; title: string };
  onPaymentMethodChange: (method: any) => void;
  onPrevious: () => void;
  onConfirm: () => void;
}

const PaymentForm = ({
  paymentMethods = [],
  selectedPaymentMethod,
  onPaymentMethodChange,
  onPrevious,
  onConfirm,
}: PaymentFormProps) => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-10">
      <h2 className="text-lg font-medium text-gray-900">Payment</h2>
      <fieldset className="mt-4">
        <legend className="sr-only">Payment type</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center">
              <input
                type="radio"
                checked={selectedPaymentMethod.id === method.id}
                onChange={() => onPaymentMethodChange(method)}
                className="h-4 w-4 border-gray-300 text-orange-600"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                {method.title}
              </label>
            </div>
          ))}
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            onClick={onPrevious}
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={onConfirm}
            className="bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default PaymentForm;
