// src/components/Layout/ImpactAreaSelection.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { DecisionContext, WheelOfLife, ImpactLevel } from '../../types';
import { useDecisionStore } from '../../state/store';

interface ImpactAreaForm {
  selectedAreas: WheelOfLife[];
}

export const ImpactAreaSelection: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ImpactAreaForm>();
  const { context, setContext, currentState, nextStep, previousStep } = useDecisionStore();

  // Watch selected areas for real-time updates
  const selectedAreas = watch('selectedAreas', []);

  const onSubmit = (data: ImpactAreaForm) => {
    console.log('[ImpactAreaSelection] Submitted data:', data);

    // Create impact levels object with HIGH impact for selected areas
    const impactLevels: { [key in WheelOfLife]: ImpactLevel } = {
        [WheelOfLife.CAREER]: ImpactLevel.NONE,
        [WheelOfLife.FINANCE]: ImpactLevel.NONE,
        [WheelOfLife.HEALTH]: ImpactLevel.NONE,
        [WheelOfLife.RELATIONSHIPS]: ImpactLevel.NONE,
        [WheelOfLife.PERSONAL_GROWTH]: ImpactLevel.NONE,
        [WheelOfLife.LIFESTYLE]: ImpactLevel.NONE,
        [WheelOfLife.ENVIRONMENT]: ImpactLevel.NONE,
        [WheelOfLife.CORE_VALUES]: ImpactLevel.NONE
      };
      
      const contextData: DecisionContext = {
      ...context!,
      impactedAreas: data.selectedAreas,
      impactLevels,
    };
    nextStep();
  };

  if (!context) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-red-600">Please provide decision context first.</p>
        <button
          onClick={() => previousStep()}
          className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Impact Areas</h2>
      <p className="text-gray-600 mb-6">
        Which areas of your life do you expect this decision to impact? Consider both direct and indirect effects.
      </p>

      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-medium mb-2">Your Decision:</h3>
        <p className="text-gray-600">{context.description}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(WheelOfLife).map((area) => {
            const currentSatisfaction = currentState?.[area] || 0;
            
            return (
              <div 
                key={area} 
                className={`p-4 border rounded-lg ${
                  selectedAreas.includes(area) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    value={area}
                    {...register('selectedAreas', {
                      required: 'Please select at least one area'
                    })}
                    className="mt-1 h-4 w-4 text-blue-600 rounded"
                  />
                  <div>
                    <span className="block font-medium">
                      {area.replace(/_/g, ' ')}
                    </span>
                    <span className="block text-sm text-gray-500">
                      Current satisfaction: <span className={`font-medium ${
                        currentSatisfaction < 5 ? 'text-red-600' : 
                        currentSatisfaction < 7 ? 'text-yellow-600' : 
                        'text-green-600'
                      }`}></span>{currentSatisfaction}/10
                    </span>
                  </div>
                </label>
              </div>
            );
          })}
        </div>

        {errors.selectedAreas && (
          <p className="text-sm text-red-600">
            {errors.selectedAreas.message}
          </p>
        )}

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={() => previousStep()}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            Back
          </button>
          
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};