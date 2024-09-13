interface ContactProps {
  formData: { email: string; phone: string };
  onInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

const Contact = ({ formData, onInputChange, onNext }: ContactProps) => {
  const handleNext = () => {
    if (formData.email && formData.phone) {
      onNext(); // Proceed to the next step
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500"
        />
      </div>
      <button
        onClick={handleNext}
        className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Contact;
