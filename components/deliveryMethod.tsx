import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface DeliveryMethodProps {
  deliveryMethods: {
    id: number;
    title: string;
    turnaround: string;
    price: string;
  }[];
  selectedMethod: { id: number; title: string };
  onMethodChange: (method: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const DeliveryMethod = ({
  deliveryMethods,
  selectedMethod,
  onMethodChange,
  onNext,
  onPrevious,
}: DeliveryMethodProps) => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-10">
      <fieldset>
        <legend className="text-lg font-medium text-gray-900">
          Delivery method
        </legend>
        <RadioGroup
          value={selectedMethod}
          onChange={onMethodChange}
          className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
        >
          {deliveryMethods.map((deliveryMethod) => (
            <Radio
              key={deliveryMethod.id}
              value={deliveryMethod}
              className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-orange-500"
            >
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900">
                    {deliveryMethod.title}
                  </span>
                  <span className="mt-1 flex items-center text-sm text-gray-500">
                    {deliveryMethod.turnaround}
                  </span>
                  <span className="mt-6 text-sm font-medium text-gray-900">
                    {deliveryMethod.price}
                  </span>
                </span>
              </span>
              <CheckCircleIcon
                aria-hidden="true"
                className="h-5 w-5 text-orange-600 [.group:not([data-checked])_&]:hidden"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-orange-500"
              />
            </Radio>
          ))}
        </RadioGroup>

        {/* Navigation Buttons */}
        <div className="flex mt-4 space-x-4">
          <button
            onClick={onPrevious}
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default DeliveryMethod;
