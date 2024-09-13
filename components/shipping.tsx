// components/Shipping.tsx
interface ShippingProps {
  formData: { name: string; address: string; city: string; postalCode: string };
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Shipping = ({
  formData,
  onInputChange,
  onNext,
  onPrevious,
}: ShippingProps) => {
  const handleNext = () => {
    if (
      formData.name &&
      formData.address &&
      formData.city &&
      formData.postalCode
    ) {
      onNext(); // Proceed to the next step
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">
        Shipping Information
      </h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => onInputChange("address", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => onInputChange("city", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          value={formData.postalCode}
          onChange={(e) => onInputChange("postalCode", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onPrevious}
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-orange-600 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shipping;
