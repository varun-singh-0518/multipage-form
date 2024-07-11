import  { useState, useEffect } from 'react';
import PersonalDetailsStep from './components/PersonalDetailsStep';
import AddressStep from './components/AddressStep';
import ResultStep from './components/ResultStep';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipcode: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Load form data from local storage on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  // Store form data to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

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
