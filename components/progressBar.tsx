interface ProgressBarProps {
  steps: { id: number; name: string }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const ProgressBar = ({
  steps,
  currentStep,
  setCurrentStep,
}: ProgressBarProps) => {
  return (
    <nav aria-label="Progress">
      <ol className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            {index + 1 < currentStep ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default link behavior
                  setCurrentStep(index + 1); // Set the current step
                }}
                className="group flex flex-col border-l-4 border-orange-600 py-2 pl-4 hover:border-orange-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-orange-600 group-hover:text-orange-800">
                  {step.id} {step.name}
                </span>
              </a>
            ) : index + 1 === currentStep ? (
              <a
                href="#"
                onClick={(e) => e.preventDefault()} // Prevent navigation if it's the current step
                aria-current="step"
                className="flex flex-col border-l-4 border-orange-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-orange-600">
                  {step.id} {step.name}
                </span>
              </a>
            ) : (
              <a
                href="#"
                onClick={(e) => e.preventDefault()} // Prevent navigation if step is not yet completed
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                  {step.id} {step.name}
                </span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressBar;
