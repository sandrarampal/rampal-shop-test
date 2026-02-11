import { useState } from "react";

interface InputAdressProps {
  onAddressChange: (address: string) => void;
}

const InputAdress = ({ onAddressChange }: InputAdressProps) => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleInputChange = () => {
    const fullAddress = `${street}, ${city}, ${zipCode}`;
    onAddressChange(fullAddress);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-center">Delivery address</h2>
      <input
        type="text"
        placeholder="Street address"
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
          handleInputChange();
        }}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          handleInputChange();
        }}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Zip code"
        value={zipCode}
        onChange={(e) => {
          setZipCode(e.target.value);
          handleInputChange();
        }}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default InputAdress;
