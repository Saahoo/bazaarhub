// Vehicle data mapping with model-specific options
export const vehicleData = {
  types: ['SUV', 'Sedan', 'Pickup', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Minivan', 'Truck', 'Van'],
  
  makes: {
    Toyota: {
      models: ['Corolla', 'Corona', 'Camry', 'Prius', 'Land Cruiser', 'Highlander', 'Tacoma', 'Tundra', 'RAV4', 'Venza'],
      optionsByModel: {
        'Corolla': ['LE', 'SE', 'XSE', 'GR Corolla'],
        'Corona': ['GL', 'GLi', 'GLX'],
        'Camry': ['LE', 'SE', 'XSE', 'XLE', 'TRD'],
        'Prius': ['LE', 'XLE', 'Limited'],
        'Land Cruiser': ['Base', 'Premium', 'Ultra'],
        'Highlander': ['LE', 'XLE', 'Limited', 'Platinum'],
        'Tacoma': ['SR', 'SR5', 'TRD Sport', 'TRD Off-Road', 'Limited'],
        'Tundra': ['SR', 'SR5', 'Limited', 'Platinum', 'TRD Pro'],
        'RAV4': ['LE', 'XLE', 'Limited', 'Prime', 'Adventure'],
        'Venza': ['LE', 'XLE', 'Limited', 'Platinum'],
      }
    },
    Honda: {
      models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Insight', 'Fit', 'Ridgeline', 'Passport', 'HR-V'],
      optionsByModel: {
        'Civic': ['LX', 'Sport', 'EX', 'EX-T', 'Touring'],
        'Accord': ['LX', 'Sport', 'EX', 'EX-L', 'Touring'],
        'CR-V': ['LX', 'EX', 'EX-L', 'Sport Touring'],
        'Pilot': ['LX', 'EX', 'EX-L', 'Touring', 'Elite'],
        'Odyssey': ['LX', 'EX', 'EX-L', 'Touring'],
        'Insight': ['LX', 'EX', 'Touring'],
        'Fit': ['LX', 'Sport', 'EX', 'EX-L'],
        'Ridgeline': ['RTL', 'RTL-E', 'RTL-T', 'Black Edition'],
        'Passport': ['Sport', 'EX-L', 'Touring'],
        'HR-V': ['LX', 'EX', 'EX-L', 'Sport Touring'],
      }
    },
    GMC: {
      models: ['Sierra', 'Yukon', 'Terrain', 'Acadia', 'Canyon', 'Savana', 'Envoy', 'Denali'],
      optionsByModel: {
        'Sierra': ['Regular Cab', 'Double Cab', 'Crew Cab', 'Denali', 'AT4'],
        'Yukon': ['SLE', 'SLT', 'Denali', 'Denali Ultimate'],
        'Terrain': ['SLE', 'SLT', 'Denali', 'AT4'],
        'Acadia': ['SLE', 'SLT', 'Denali'],
        'Canyon': ['Regular Cab', 'Crew Cab', 'Denali', 'AT4'],
        'Savana': ['Cargo Van', 'Passenger Van'],
        'Envoy': ['SLE', 'SLT', 'Denali'],
        'Denali': ['Base', 'Premium', 'Ultimate'],
      }
    },
    Ford: {
      models: ['F-150', 'Mustang', 'Explorer', 'Edge', 'Escape', 'Ranger', 'Transit', 'Bronco'],
      optionsByModel: {
        'F-150': ['Regular Cab', 'SuperCab', 'SuperCrew', 'Raptor', 'Lariat'],
        'Mustang': ['EcoBoost', 'GT', 'Mach 1', 'Shelby GT500', 'Dark Horse'],
        'Explorer': ['Base', 'XLT', 'Limited', 'Platinum', 'ST'],
        'Edge': ['SE', 'SEL', 'Limited', 'Titanium'],
        'Escape': ['S', 'SE', 'SEL', 'Titanium'],
        'Ranger': ['Regular Cab', 'SuperCab', 'SuperCrew', 'FX4'],
        'Transit': ['Base', 'Medium', 'High Roof'],
        'Bronco': ['Base', 'Outer Banks', 'Big Bend', 'Badlands', 'Raptor'],
      }
    },
    BMW: {
      models: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'Z4', 'M3'],
      optionsByModel: {
        '3 Series': ['318i', '320i', '330i', '340i', 'M340i'],
        '5 Series': ['520i', '530i', '540i', '550i', 'M550i'],
        '7 Series': ['740i', '750i', '760i', 'M760i'],
        'X3': ['xDrive30i', 'xDrive40i', 'M40i', 'M'],
        'X5': ['xDrive40i', 'xDrive50i', 'M50i', 'M'],
        'Z4': ['sDrive20i', 'sDrive30i', 'M40i', 'M'],
        'M3': ['Base', 'Competition'],
      }
    },
    Mercedes: {
      models: ['C-Class', 'E-Class', 'S-Class', 'A-Class', 'GLE', 'GLA', 'GLC'],
      optionsByModel: {
        'C-Class': ['C300', 'C300 4MATIC', 'C63', 'C63 S'],
        'E-Class': ['E350', 'E450', 'E53 AMG', 'E63 S AMG'],
        'S-Class': ['S500', 'S580', 'S580e', 'S65 AMG'],
        'A-Class': ['A220', 'A250', 'A35 AMG'],
        'GLE': ['GLE350', 'GLE450', 'GLE53 AMG', 'GLE63 S AMG'],
        'GLA': ['GLA250', 'GLA35 AMG'],
        'GLC': ['GLC300', 'GLC43 AMG', 'GLC63 S AMG'],
      }
    },
    Audi: {
      models: ['A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7'],
      optionsByModel: {
        'A3': ['Premium', 'Premium Plus', 'Prestige', 'S3'],
        'A4': ['Premium', 'Premium Plus', 'Prestige', 'S4'],
        'A6': ['Premium', 'Premium Plus', 'Prestige', 'S6'],
        'A8': ['Premium', 'Premium Plus', 'Prestige', 'S8'],
        'Q3': ['Premium', 'Premium Plus', 'Prestige', 'SQ3'],
        'Q5': ['Premium', 'Premium Plus', 'Prestige', 'SQ5'],
        'Q7': ['Premium', 'Premium Plus', 'Prestige', 'SQ7'],
      }
    },
    Nissan: {
      models: ['Altima', 'Maxima', 'Qashqai', 'Rogue', 'Pathfinder', 'Frontier', 'Titan'],
      optionsByModel: {
        'Altima': ['2.5 S', '2.5 SV', '2.5 SL', '2.5 Platinum'],
        'Maxima': ['3.5 S', '3.5 SV', '3.5 SL', '3.5 Platinum'],
        'Qashqai': ['S', 'SV', 'SL', 'Platinum'],
        'Rogue': ['S', 'SV', 'SL', 'Platinum'],
        'Pathfinder': ['S', 'SV', 'SL', 'Platinum', 'Rock Creek'],
        'Frontier': ['S', 'SV', 'Crew Cab', 'SL'],
        'Titan': ['S Crew Cab', 'SV Crew Cab', 'SL Crew Cab', 'Platinum Reserve'],
      }
    },
    Hyundai: {
      models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Palisade'],
      optionsByModel: {
        'Elantra': ['Blue', 'SE', 'SEL', 'Limited', 'N'],
        'Sonata': ['SE', 'SEL', 'Limited', 'N Line'],
        'Tucson': ['SE', 'SEL', 'Limited', 'N Line'],
        'Santa Fe': ['SE', 'SEL', 'Limited', 'Calypso Red'],
        'Kona': ['SE', 'SEL', 'Limited', 'N Line'],
        'Palisade': ['SE', 'SEL', 'Limited', 'Calypso Red'],
      }
    },
    Kia: {
      models: ['Forte', 'Optima', 'Sportage', 'Sorento', 'Carnival', 'Niro'],
      optionsByModel: {
        'Forte': ['FE', 'S', 'EX', 'GT'],
        'Optima': ['LX', 'S', 'SX', 'SX Turbo'],
        'Sportage': ['LX', 'S', 'EX', 'SX Turbo'],
        'Sorento': ['L', 'S', 'EX', 'SX'],
        'Carnival': ['LX', 'EX', 'SX'],
        'Niro': ['FE', 'S', 'EX', 'SX Turbo'],
      }
    },
    Volkswagen: {
      models: ['Jetta', 'Passat', 'Golf', 'Tiguan', 'Touareg', 'Beetle'],
      optionsByModel: {
        'Jetta': ['S', 'SE', 'SEL', 'GLI'],
        'Passat': ['S', 'SE', 'SEL', 'V6 SE'],
        'Golf': ['S', 'SE', 'GTI', 'R'],
        'Tiguan': ['S', 'SE', 'SEL', 'R-Line'],
        'Touareg': ['V6 SE', 'V8 SE', 'V8 TDI', 'VR6 4Motion'],
        'Beetle': ['S', 'SE', 'SE Convertible', 'Final Edition'],
      }
    },
    Chevrolet: {
      models: ['Malibu', 'Cruze', 'Silverado', 'Equinox', 'Traverse', 'Blazer'],
      optionsByModel: {
        'Malibu': ['L', 'LS', 'LT', 'Premier'],
        'Cruze': ['L', 'LS', 'LT', 'RS'],
        'Silverado': ['Regular Cab', 'Double Cab', 'Crew Cab', 'Trail Boss'],
        'Equinox': ['L', 'LS', 'LT', 'Premier'],
        'Traverse': ['L', 'LS', 'LT', 'Premier'],
        'Blazer': ['L', 'LT', 'Premier', 'RS'],
      }
    },
    Mazda: {
      models: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5'],
      optionsByModel: {
        'Mazda3': ['2.0 Base', '2.5 Preferred', '2.5 Select', '2.5 Turbo'],
        'Mazda6': ['2.5 Base', '2.5 Preferred', '2.5 Turbo'],
        'CX-5': ['2.5 Base', '2.5 Preferred', '2.5 Core', '2.5 Turbo'],
        'CX-9': ['2.5 Base', '2.5 Preferred', '2.5 Turbo Premium'],
        'MX-5': ['Sport', 'Club', 'Grand Touring', 'RF'],
      }
    },
    Subaru: {
      models: ['Impreza', 'Legacy', 'Outback', 'Forester', 'Crosstrek', 'Ascent'],
      optionsByModel: {
        'Impreza': ['2.0 Base', '2.0 Premium', '2.0 Sport', '2.0 Limited'],
        'Legacy': ['2.5 Base', '2.5 Premium', '2.5 Sport', '2.5 Limited'],
        'Outback': ['2.5 Base', '2.5 Premium', '2.5 Limited', '2.5 Touring'],
        'Forester': ['Base', 'Premium', 'Sport', 'Limited'],
        'Crosstrek': ['Base', 'Premium', 'Sport', 'Limited'],
        'Ascent': ['Base', 'Premium', 'Limited', 'Touring'],
      }
    },
  },

  engines: ['1.2L', '1.4L', '1.6L', '1.8L', '2.0L', '2.2L', '2.4L', '2.5L', '2.7L', '3.0L', '3.2L', '3.5L', '3.8L', '4.0L', '4.2L', '4.5L', '5.0L', '5.3L', '6.0L', '6.2L'],

  colors: ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Brown', 'Beige', 'Gold', 'Orange', 'Purple'],
};

export const cities = [
  'Kabul',
  'Herat',
  'Kandahar',
  'Mazar-e-Sharif',
  'Jalalabad',
  'Kunduz',
  'Lashkar Gah',
  'Faizabad',
  'Baghlan',
  'Pul-e-Alam',
];

export const categories = ['Vehicles', 'Real Estate', 'Electronics'];
