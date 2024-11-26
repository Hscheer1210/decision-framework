// src/components/Layout/CurrentStateEvaluation.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { WheelOfLife } from '../../types';
import { useDecisionStore } from '../../state/store';

interface CurrentStateForm {
  satisfaction: Record<WheelOfLife, number>;
}

export const CurrentStateEvaluation: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CurrentStateForm>();
  const { setCurrentState, nextStep } = useDecisionStore();

  const onSubmit = (data: CurrentStateForm) => {
    console.log('[CurrentStateEvaluation] Submitted data:', data);
    setCurrentState(data.satisfaction);
    nextStep();
  };

  const getSatisfactionGuide = (value: number): string => {
    if (value <= 3) return 'Significant improvement needed';
    if (value <= 5) return 'Room for improvement';
    if (value <= 7) return 'Moderately satisfied';
    if (value <= 9) return 'Quite satisfied';
    return 'Extremely satisfied';
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Life Satisfaction Assessment</h2>
      <p className="text-gray-600 mb-6">
        Before we analyze your decision, let's establish your current satisfaction levels in different areas of life.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {Object.values(WheelOfLife).map((area) => (
          <div key={area} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {area.replace(/_/g, ' ')}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                {...register(`satisfaction.${area}`, {
                  required: 'Required',
                  min: 0,
                  max: 10
                })}
                className="flex-grow"
                title={getSatisfactionGuide(watch(`satisfaction.${area}`) || 0)}
              />
              <span className="w-12 text-center">
                {watch(`satisfaction.${area}`) || 0}
              </span>
            </div>
            {errors.satisfaction?.[area] && (
              <p className="text-sm text-red-600">
                {errors.satisfaction[area].message}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
};