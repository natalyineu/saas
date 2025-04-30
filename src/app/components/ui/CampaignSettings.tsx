'use client';

import React, { useState } from 'react';

interface SettingItemProps {
  label: string;
  value: string | number;
  type?: 'text' | 'number' | 'select' | 'toggle';
  options?: string[];
  editable?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  value,
  type = 'text',
  options = [],
  editable = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleEdit = () => {
    if (editable) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the value to your backend
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="text-sm text-gray-700">{label}</div>
      <div className="flex items-center">
        {isEditing ? (
          <div className="flex items-center">
            {type === 'select' ? (
              <select
                className="text-sm border rounded px-2 py-1 mr-2 w-40"
                value={currentValue.toString()}
                onChange={(e) => setCurrentValue(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === 'toggle' ? (
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={currentValue === 'Enabled'}
                  onChange={(e) => setCurrentValue(e.target.checked ? 'Enabled' : 'Disabled')}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            ) : (
              <input
                type={type}
                className="text-sm border rounded px-2 py-1 mr-2 w-40"
                value={currentValue.toString()}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
            )}
            <button
              onClick={handleSave}
              className="text-xs px-2 py-1 bg-primary-purple text-white rounded hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="text-sm font-medium mr-3">{currentValue}</span>
            {editable && (
              <button
                onClick={handleEdit}
                className="text-xs text-gray-500 hover:text-primary-purple"
              >
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface CampaignSettingsProps {
  className?: string;
}

const CampaignSettings: React.FC<CampaignSettingsProps> = ({ className }) => {
  return (
    <div className={`campaign-settings ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">Campaign Settings</h3>
        <p className="text-sm text-gray-600 mb-4">
          Configure your campaign parameters and preferences
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h4 className="text-md font-semibold mb-3">Basic Information</h4>
        <SettingItem label="Campaign Name" value="Coffee Shop Campaign" editable={true} />
        <SettingItem label="Campaign Type" value="Local Business" type="select" options={['Local Business', 'E-commerce', 'Brand Awareness']} editable={true} />
        <SettingItem label="Status" value="Active" type="select" options={['Active', 'Paused', 'Ended']} editable={true} />
        <SettingItem label="Start Date" value="May 15, 2023" editable={true} />
        <SettingItem label="End Date" value="Open-ended" editable={true} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h4 className="text-md font-semibold mb-3">Budget & Bidding</h4>
        <SettingItem label="Daily Budget" value="$25.00" type="number" editable={true} />
        <SettingItem label="Bidding Strategy" value="Maximize Conversions" type="select" options={['Maximize Conversions', 'Maximize Clicks', 'Target CPA']} editable={true} />
        <SettingItem label="Bid Adjustment" value="Enabled" type="toggle" editable={true} />
        <SettingItem label="Budget Pacing" value="Standard" type="select" options={['Standard', 'Accelerated']} editable={true} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h4 className="text-md font-semibold mb-3">Targeting</h4>
        <SettingItem label="Location" value="5-mile radius from Downtown" editable={true} />
        <SettingItem label="Age Range" value="25-40" editable={true} />
        <SettingItem label="Interests" value="Coffee, Breakfast, Work/Study" editable={true} />
        <SettingItem label="Time Scheduling" value="7am-8pm, All days" editable={true} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h4 className="text-md font-semibold mb-3">Ad Content</h4>
        <SettingItem label="Ad Format" value="Image + Text" type="select" options={['Image + Text', 'Video', 'Carousel']} editable={true} />
        <SettingItem label="Ad Rotation" value="Optimize for best performing" type="select" options={['Optimize for best performing', 'Rotate evenly']} editable={true} />
        <SettingItem label="A/B Testing" value="Enabled" type="toggle" editable={true} />
      </div>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 mr-2 border border-primary-purple text-primary-purple rounded hover:bg-primary-purple hover:text-white transition-colors">
          Discard Changes
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded hover:shadow-md transition-shadow">
          Save All Changes
        </button>
      </div>
    </div>
  );
};

export default CampaignSettings; 