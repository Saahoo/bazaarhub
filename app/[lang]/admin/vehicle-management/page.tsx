'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
<<<<<<< HEAD
import { vehicleData, cities, categories } from '@/lib/data/listing-options';
=======
import { vehicleData } from '@/lib/data/listing-options';
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)

type TabType = 'types' | 'makes' | 'models' | 'options' | 'engines';

export default function VehicleManagementPage() {
  const [activeTab, setActiveTab] = useState<TabType>('types');
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);
=======
>>>>>>> cddb703f (Initial commit: BazaarHub marketplace app with Next.js static export for GitHub Pages)
  const [message, setMessage] = useState('');

  // Vehicle Types
  const [types, setTypes] = useState<string[]>(vehicleData.types);
  const [newType, setNewType] = useState('');

  // Makes
  const [makes, setMakes] = useState<string[]>(Object.keys(vehicleData.makes));
  const [newMake, setNewMake] = useState('');

  // Models
  const [selectedMake, setSelectedMake] = useState('');
  const [models, setModels] = useState<string[]>([]);
  const [newModel, setNewModel] = useState('');

  // Options
  const [selectedMakeForOptions, setSelectedMakeForOptions] = useState('');
  const [selectedModelForOptions, setSelectedModelForOptions] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState('');

  // Engines
  const [engines, setEngines] = useState<string[]>(vehicleData.engines);
  const [newEngine, setNewEngine] = useState('');

  // Update models when make is selected
  useEffect(() => {
    if (selectedMake) {
      const makeData = vehicleData.makes[selectedMake as keyof typeof vehicleData.makes];
      if (makeData && 'models' in makeData) {
        setModels(makeData.models);
      }
    }
  }, [selectedMake]);

  // Update options when model is selected
  useEffect(() => {
    if (selectedMakeForOptions && selectedModelForOptions) {
      const makeData = vehicleData.makes[selectedMakeForOptions as keyof typeof vehicleData.makes];
      if (makeData && 'optionsByModel' in makeData) {
        const opts = makeData.optionsByModel[selectedModelForOptions as keyof typeof makeData.optionsByModel];
        setOptions(opts || []);
      }
    }
  }, [selectedMakeForOptions, selectedModelForOptions]);

  // Vehicle Types Management
  const handleAddType = () => {
    if (newType.trim() && !types.includes(newType)) {
      setTypes([...types, newType]);
      setNewType('');
      setMessage('Vehicle type added successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleRemoveType = (type: string) => {
    setTypes(types.filter(t => t !== type));
    setMessage('Vehicle type removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  // Makes Management
  const handleAddMake = () => {
    if (newMake.trim() && !makes.includes(newMake)) {
      setMakes([...makes, newMake]);
      setNewMake('');
      setMessage('Make added successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleRemoveMake = (make: string) => {
    setMakes(makes.filter(m => m !== make));
    setMessage('Make removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  // Models Management
  const handleAddModel = () => {
    if (selectedMake && newModel.trim() && !models.includes(newModel)) {
      setModels([...models, newModel]);
      setNewModel('');
      setMessage('Model added successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleRemoveModel = (model: string) => {
    setModels(models.filter(m => m !== model));
    setMessage('Model removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  // Options Management
  const handleAddOption = () => {
    if (selectedMakeForOptions && selectedModelForOptions && newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption('');
      setMessage('Option added successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleRemoveOption = (option: string) => {
    setOptions(options.filter(o => o !== option));
    setMessage('Option removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  // Engines Management
  const handleAddEngine = () => {
    if (newEngine.trim() && !engines.includes(newEngine)) {
      setEngines([...engines, newEngine]);
      setNewEngine('');
      setMessage('Engine added successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleRemoveEngine = (engine: string) => {
    setEngines(engines.filter(e => e !== engine));
    setMessage('Engine removed successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Vehicle Management
        </h1>

        {message && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-lg">
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
          {(['types', 'makes', 'models', 'options', 'engines'] as TabType[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium transition ${
                activeTab === tab
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Vehicle Types Tab */}
        {activeTab === 'types' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Vehicle Types
            </h2>

            {/* Add New Type */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Add New Vehicle Type
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Sedan, SUV, Truck"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddType()}
                />
                <Button onClick={handleAddType} size="lg">
                  Add
                </Button>
              </div>
            </div>

            {/* List Types */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current Types ({types.length})
              </h3>
              <div className="flex flex-wrap gap-3">
                {types.map(type => (
                  <div
                    key={type}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20
                               border border-primary-200 dark:border-primary-800 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white">{type}</span>
                    <button
                      onClick={() => handleRemoveType(type)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Makes Tab */}
        {activeTab === 'makes' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Vehicle Makes
            </h2>

            {/* Add New Make */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Add New Make
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newMake}
                  onChange={(e) => setNewMake(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Toyota, Honda, BMW"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddMake()}
                />
                <Button onClick={handleAddMake} size="lg">
                  Add
                </Button>
              </div>
            </div>

            {/* List Makes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current Makes ({makes.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {makes.map(make => (
                  <div
                    key={make}
                    className="flex items-center justify-between px-4 py-2 bg-primary-50 dark:bg-primary-900/20
                               border border-primary-200 dark:border-primary-800 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white">{make}</span>
                    <button
                      onClick={() => handleRemoveMake(make)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Models Tab */}
        {activeTab === 'models' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Vehicle Models
            </h2>

            {/* Select Make */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Make
              </label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select a make</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            {selectedMake && (
              <>
                {/* Add New Model */}
                <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Add New Model for {selectedMake}
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={newModel}
                      onChange={(e) => setNewModel(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                                 bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                                 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="e.g., Civic, Accord, CR-V"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddModel()}
                    />
                    <Button onClick={handleAddModel} size="lg">
                      Add
                    </Button>
                  </div>
                </div>

                {/* List Models */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Models for {selectedMake} ({models.length})
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {models.map(model => (
                      <div
                        key={model}
                        className="flex items-center justify-between px-4 py-2 bg-primary-50 dark:bg-primary-900/20
                                   border border-primary-200 dark:border-primary-800 rounded-lg"
                      >
                        <span className="text-gray-900 dark:text-white">{model}</span>
                        <button
                          onClick={() => handleRemoveModel(model)}
                          className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Options Tab */}
        {activeTab === 'options' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Vehicle Options/Trims
            </h2>

            {/* Select Make and Model */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Make
                  </label>
                  <select
                    value={selectedMakeForOptions}
                    onChange={(e) => setSelectedMakeForOptions(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a make</option>
                    {makes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Model
                  </label>
                  <select
                    value={selectedModelForOptions}
                    onChange={(e) => setSelectedModelForOptions(e.target.value)}
                    disabled={!selectedMakeForOptions}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                               bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                               focus:outline-none focus:ring-2 focus:ring-primary-500
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a model</option>
                    {selectedMakeForOptions && models.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {selectedMakeForOptions && selectedModelForOptions && (
              <>
                {/* Add New Option */}
                <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Add New Option for {selectedMakeForOptions} {selectedModelForOptions}
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                                 bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                                 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="e.g., SE, XLE, Limited, Sport"
                      onKeyPress={(e) => e.key === 'Enter' && handleAddOption()}
                    />
                    <Button onClick={handleAddOption} size="lg">
                      Add
                    </Button>
                  </div>
                </div>

                {/* List Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Options for {selectedMakeForOptions} {selectedModelForOptions} ({options.length})
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {options.map(option => (
                      <div
                        key={option}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20
                                   border border-primary-200 dark:border-primary-800 rounded-lg"
                      >
                        <span className="text-gray-900 dark:text-white">{option}</span>
                        <button
                          onClick={() => handleRemoveOption(option)}
                          className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold ml-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Engines Tab */}
        {activeTab === 'engines' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Engine Sizes
            </h2>

            {/* Add New Engine */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Add New Engine Size
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newEngine}
                  onChange={(e) => setNewEngine(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., 2.0L, 2.5L, 3.5L"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddEngine()}
                />
                <Button onClick={handleAddEngine} size="lg">
                  Add
                </Button>
              </div>
            </div>

            {/* List Engines */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current Engines ({engines.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {engines.map(engine => (
                  <div
                    key={engine}
                    className="flex items-center justify-between px-4 py-2 bg-primary-50 dark:bg-primary-900/20
                               border border-primary-200 dark:border-primary-800 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white text-sm">{engine}</span>
                    <button
                      onClick={() => handleRemoveEngine(engine)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 font-bold text-sm"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
