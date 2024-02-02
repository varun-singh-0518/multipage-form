// src/components/MultiStepForm.js
import {useState} from "react";
import PersonalDetailsStep from "./components/PersonalDetailsStep";
import AddressStep from "./components/AddressStep";
import PaymentDetailsStep from "./components/PaymentDetailStep";
import ResultStep from "./components/ResultStep";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    cvv: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            formData={formData}
            setFormData={setFormData}
            next={nextStep}
          />
        );
      case 2:
        return (
          <AddressStep
            formData={formData}
            setFormData={setFormData}
            next={nextStep}
            prev={prevStep}
          />
        );
      case 3:
        return (
          <PaymentDetailsStep
            formData={formData}
            setFormData={setFormData}
            next={nextStep}
            prev={prevStep}
          />
        );
      case 4:
        return <ResultStep formData={formData} prev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center background">
      <div className=" bg-gray-400 p-8 rounded shadow-md w-[90%] md:w-1/2">
        <h1 className="text-3xl text-black font-bold mb-6 text-center">
          Multi-Step Form
        </h1>
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
