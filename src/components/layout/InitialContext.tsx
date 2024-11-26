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

  const onSubmit = (formData: InitialContextForm) => {
    console.log('[InitialContext] Raw form data:', formData);

    if (formData.selectedAreas.length === 0) {
      console.error('[InitialContext] No areas selected');
      return;
    }

    // First selected area becomes primary, rest are secondary
    const primaryArea = formData.selectedAreas[0];
    const secondaryAreas = formData.selectedAreas.slice(1);

    // Initialize impactLevels with NONE for all areas
    const baseImpactLevels: Record<WheelOfLife, ImpactLevel> = {
        [WheelOfLife.CAREER]: ImpactLevel.NONE,
        [WheelOfLife.FINANCE]: ImpactLevel.NONE,
        [WheelOfLife.HEALTH]: ImpactLevel.NONE,
        [WheelOfLife.RELATIONSHIPS]: ImpactLevel.NONE,
        [WheelOfLife.PERSONAL_GROWTH]: ImpactLevel.NONE,
        [WheelOfLife.RECREATION]: ImpactLevel.NONE,
        [WheelOfLife.ENVIRONMENT]: ImpactLevel.NONE,
        [WheelOfLife.SPIRITUALITY]: ImpactLevel.NONE
      };

      // Update impact levels based on selection
    const impactLevels: Record<WheelOfLife, ImpactLevel> = {
        ...baseImpactLevels,
        [primaryArea]: ImpactLevel.HIGH,
        ...secondaryAreas.reduce((acc, area) => ({
          ...acc,
          [area]: ImpactLevel.MEDIUM
        }), {} as Record<WheelOfLife, ImpactLevel>)
      };
  
      const contextData: DecisionContext = {
        description: formData.description,
        primaryArea,
        secondaryAreas,
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