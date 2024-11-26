// src/components/Layout/InitialContext.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { WheelOfLife, DecisionContext, ImpactLevel } from '../../types';
import { useDecisionStore } from '../../state/store';

// Add this interface for the form data
interface InitialContextForm {
  description: string;
  selectedAreas: WheelOfLife[];
}

export const InitialContext: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InitialContextForm>();
  const { setContext, nextStep } = useDecisionStore();

  // Create an array of all WheelOfLife values
  const wheelOfLifeAreas = [
    WheelOfLife.CAREER,
    WheelOfLife.FINANCE,
    WheelOfLife.HEALTH,
    WheelOfLife.RELATIONSHIPS,
    WheelOfLife.PERSONAL_GROWTH,
    WheelOfLife.RECREATION,
    WheelOfLife.ENVIRONMENT,
    WheelOfLife.SPIRITUALITY
  ];

  const onSubmit = (data: InitialContextForm) => {
    console.log('[InitialContext] Raw form data:', data);

    if (data.selectedAreas.length === 0) {
      console.error('[InitialContext] No areas selected');
      return;
    }

    // Set impact levels - all selected areas get HIGH impact
    const impactLevels = wheelOfLifeAreas.reduce<Record<WheelOfLife, ImpactLevel>>(
        (acc, area) => ({
            ...acc,
            [area]: ImpactLevel.NONE,
         }),
         {} as Record<WheelOfLife, ImpactLevel>
    );

    // Update impact levels for selected areas
    data.selectedAreas.forEach((area) => {
        impactLevels[area] = ImpactLevel.HIGH;
    });
  
    const contextData: DecisionContext = {
        description: data.description,
        impactedAreas: data.selectedAreas,
        impactLevels
    };
  
    console.log('[InitialContext] Processed context data:', contextData);
    setContext(contextData);
    nextStep();
};

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Decision Context</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Decision Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe your decision
          </label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            placeholder="Describe the decision you're trying to make..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        {/* Impact Areas Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Impacted Life Areas
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Select all areas that will be impacted by this decision. The first selected area will be considered the primary impact area.
          </p>
          <select
            multiple
            {...register('selectedAreas', { 
              required: 'At least one area must be selected',
              validate: value => value.length > 0 || 'Please select at least one area'
            })}
            className="w-full px-3 py-2 border rounded-md min-h-[200px]"
            size={Object.keys(WheelOfLife).length}
          >
            {Object.values(WheelOfLife).map((area) => (
              <option 
                key={area} 
                value={area}
                className="py-2 px-3 hover:bg-blue-50 cursor-pointer"
              >
                {area.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
          {errors.selectedAreas && (
            <p className="mt-1 text-sm text-red-600">{errors.selectedAreas.message}</p>
          )}
          <p className="mt-2 text-sm text-gray-500">
            Tip: Hold Ctrl (Cmd on Mac) to select multiple areas. The order of selection matters.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </form>
    </div>
  );
};