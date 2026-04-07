'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { vehicleData, cities, categories } from '@/lib/data/listing-options';

interface VehicleFormData {
  type: string;
  make: string;
  model: string;
  year: string;
  option: string;
  engine: string;
  power: string;
  mileage: string;
  color: string;
  driveType: string;
  status: string;
  photos: File[];
  videos: File[];
  city: string;
  district: string;
  street: string;
  lat?: number;
  lng?: number;
  email: string;
  mobile: string;
  whatsapp: string;
  moreDetails: string;
}

<<<<<<< HEAD
interface RealEstateFormData {
  type: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  city: string;
  district: string;
  street: string;
  lat?: number;
  lng?: number;
  email: string;
  mobile: string;
  whatsapp: string;
  photos: File[];
}

interface ElectronicsFormData {
  item: string;
  condition: string;
  price: string;
  city: string;
  district: string;
  street: string;
  email: string;
  mobile: string;
  whatsapp: string;
  photos: File[];
}

=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
export default function NewListingPage({ params }: { params: { lang: string } }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Vehicle Form State
  const [vehicleForm, setVehicleForm] = useState<VehicleFormData>({
    type: '',
    make: '',
    model: '',
    year: '',
    option: '',
    engine: '',
    power: '',
    mileage: '',
    color: '',
    driveType: '',
    status: '',
    photos: [],
    videos: [],
    city: '',
    district: '',
    street: '',
    email: '',
    mobile: '',
    whatsapp: '',
    moreDetails: '',
  });

<<<<<<< HEAD
  // Real Estate Form State
  const [realEstateForm, setRealEstateForm] = useState<RealEstateFormData>({
    type: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    city: '',
    district: '',
    street: '',
    email: '',
    mobile: '',
    whatsapp: '',
    photos: [],
  });

  // Electronics Form State
  const [electronicsForm, setElectronicsForm] = useState<ElectronicsFormData>({
    item: '',
    condition: '',
    price: '',
    city: '',
    district: '',
    street: '',
    email: '',
    mobile: '',
    whatsapp: '',
    photos: [],
  });

=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  // Get available models based on selected make
  const getAvailableModels = () => {
    if (vehicleForm.make) {
      const makeData = vehicleData.makes[vehicleForm.make as keyof typeof vehicleData.makes];
      if (makeData && 'models' in makeData) {
        return makeData.models;
      }
    }
    return [];
  };

  // Get available options based on selected model
  const getAvailableOptions = () => {
    if (vehicleForm.make && vehicleForm.model) {
      const makeData = vehicleData.makes[vehicleForm.make as keyof typeof vehicleData.makes];
      if (makeData && 'optionsByModel' in makeData) {
        const options = makeData.optionsByModel[vehicleForm.model as keyof typeof makeData.optionsByModel];
        return options || [];
      }
    }
    return [];
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVehicleForm(prev => ({
      ...prev,
      [name]: value,
      // Reset model when make changes
      ...(name === 'make' && { model: '', option: '' }),
      // Reset option when model changes
      ...(name === 'model' && { option: '' }),
    }));
  };

  const handleVehicleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate required fields
    if (!vehicleForm.type || !vehicleForm.make || !vehicleForm.model || !vehicleForm.year) {
      setError('Please fill in all required vehicle details');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: API call to create vehicle listing
      router.push(`/${params.lang}/listings`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What would you like to sell?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="p-8 border-2 border-gray-200 dark:border-gray-700 rounded-xl
                           hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20
                           transition text-center cursor-pointer"
              >
                <div className="text-4xl mb-4">
                  {category === 'Vehicles' && '🚗'}
                  {category === 'Real Estate' && '🏠'}
                  {category === 'Electronics' && '💻'}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VEHICLE LISTING FORM
  if (selectedCategory === 'Vehicles') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedCategory('')}
            className="mb-6 text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            ← Back to categories
          </button>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Sell Your Vehicle
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleVehicleSubmit} className="space-y-8">
            {/* Vehicle Details Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Vehicle Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    name="type"
                    value={vehicleForm.type}
                    onChange={handleVehicleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Type</option>
                    {vehicleData.types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Make *
                  </label>
                  <select
                    name="make"
                    value={vehicleForm.make}
                    onChange={handleVehicleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Make</option>
                    {Object.keys(vehicleData.makes).map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Model *
                  </label>
                  <select
                    name="model"
                    value={vehicleForm.model}
                    onChange={handleVehicleChange}
                    required
                    disabled={!vehicleForm.make}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Model</option>
                    {getAvailableModels().map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={vehicleForm.year}
                    onChange={handleVehicleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="2020"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>

                {/* Option */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Option
                  </label>
                  <select
                    name="option"
                    value={vehicleForm.option}
                    onChange={handleVehicleChange}
                    disabled={!vehicleForm.model}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Option</option>
                    {getAvailableOptions().map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {!vehicleForm.model && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Select a model first
                    </p>
                  )}
                </div>

                {/* Engine */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Engine
                  </label>
                  <select
                    name="engine"
                    value={vehicleForm.engine}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Engine</option>
                    {vehicleData.engines.map(engine => (
                      <option key={engine} value={engine}>{engine}</option>
                    ))}
                  </select>
                </div>

                {/* Power */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Power (HP)
                  </label>
                  <input
                    type="number"
                    name="power"
                    value={vehicleForm.power}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="190"
                    min="0"
                  />
                </div>

                {/* Mileage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mileage (km)
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    value={vehicleForm.mileage}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="50000"
                    min="0"
                  />
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Color
                  </label>
                  <select
                    name="color"
                    value={vehicleForm.color}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Color</option>
                    {vehicleData.colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                {/* Drive Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Drive Type
                  </label>
                  <select
                    name="driveType"
                    value={vehicleForm.driveType}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select</option>
                    <option value="left">Left Hand Drive</option>
                    <option value="right">Right Hand Drive</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={vehicleForm.status}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Vehicle Photos
              </h2>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Drag and drop your images here or click to select
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full px-4 py-2"
                />
              </div>
            </div>

            {/* Videos Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Vehicle Videos
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Optional - Upload videos of your vehicle (walkthrough, test drive, etc.)
              </p>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Drag and drop your videos here or click to select
                </p>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  className="w-full px-4 py-2"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Supported formats: MP4, WebM, Ogg (Max 500MB per video)
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City
                  </label>
                  <select
                    name="city"
                    value={vehicleForm.city}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    District
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={vehicleForm.district}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="District"
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={vehicleForm.street}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Street"
                  />
                </div>
              </div>

              {/* Location Picker */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  📍 Pick Location from Map
                </p>
                <Button variant="outline" size="lg">
                  Open Map
                </Button>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={vehicleForm.email}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={vehicleForm.mobile}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+93 (XXX) XXX XXXX"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={vehicleForm.whatsapp}
                    onChange={handleVehicleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+93 (XXX) XXX XXXX"
                  />
                </div>
              </div>
            </div>

            {/* More Details Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                More Details
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="moreDetails"
                  value={vehicleForm.moreDetails}
                  onChange={handleVehicleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Add any additional details about your vehicle (service history, special features, maintenance records, etc.)"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                type="submit"
                isLoading={isLoading}
                size="lg"
                className="flex-1"
              >
                Post Vehicle
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => setSelectedCategory('')}
              >
                Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // PLACEHOLDER for other categories
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <button
          onClick={() => setSelectedCategory('')}
          className="mb-6 text-primary-600 hover:text-primary-700 dark:text-primary-400"
        >
          ← Back to categories
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {selectedCategory} Form
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Form coming soon for {selectedCategory}
        </p>
      </div>
    </div>
  );
}
