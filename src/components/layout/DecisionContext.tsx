// src/components/Layout/DecisionContext.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDecisionStore } from '../../state/store';
import { WheelOfLife, ImpactLevel } from '../../types'; 

interface DecisionContextForm {
  description: string;
}

export const DecisionContext: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<DecisionContextForm>();
  const { setContext, nextStep, previousStep } = useDecisionStore();

  const onSubmit = (data: DecisionContextForm) => {
    console.log('[DecisionContext] Submitted data:', data);
    
    // Initialize impactLevels with NONE for all areas
    const initialImpactLevels: Record<WheelOfLife, ImpactLevel> = {
        [WheelOfLife.CAREER]: ImpactLevel.NONE,
        [WheelOfLife.FINANCE]: ImpactLevel.NONE,
        [WheelOfLife.HEALTH]: ImpactLevel.NONE,
        [WheelOfLife.RELATIONSHIPS]: ImpactLevel.NONE,
        [WheelOfLife.PERSONAL_GROWTH]: ImpactLevel.NONE,
        [WheelOfLife.LIFESTYLE]: ImpactLevel.NONE,
        [WheelOfLife.ENVIRONMENT]: ImpactLevel.NONE,
        [WheelOfLife.CORE_VALUES]: ImpactLevel.NONE
    };

    setContext({
      description: data.description,
      impactedAreas: [],
      impactLevels: {}   
    });
    nextStep();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Decision Context</h2>
      <p className="text-gray-600 mb-6">
        Please describe the decision you're evaluating. Try to be as specific as possible.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What decision are you trying to make?
          </label>
          <textarea
            {...register('description', { 
              required: 'Please provide a description of your decision',
              minLength: {
                value: 20,
                message: 'Please provide more detail about your decision'
              }
            })}
            className="w-full px-3 py-2 border rounded-md min-h-[150px]"
            placeholder="Example: I'm considering whether to accept a job offer in a different city. The role offers better pay but would require relocating away from my current support network..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

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