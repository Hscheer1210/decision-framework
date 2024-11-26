import React from 'react';
import { useForm } from 'react-hook-form';
import { WheelOfLife } from '../../types';
import { useDecisionStore } from '../../state/store';

interface PrioritizationForm {
  timeframe: 'short-term' | 'long-term';
  priorities: WheelOfLife[];
}

export const AreaPrioritization: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PrioritizationForm>();
  const { setAreaPriorities, nextStep, previousStep } = useDecisionStore();

  const selectedPriorities = watch('priorities', []);

  const onSubmit = (data: PrioritizationForm) => {
    setAreaPriorities({
      timeframe: data.timeframe,
      topPriorities: data.priorities
    });
    nextStep();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Your Priorities</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Timeframe Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            What is your primary focus?
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                value="short-term"
                {...register('timeframe', { required: 'Please select a timeframe' })}
                className="sr-only"
              />
              <div className="text-center">
                <span className="block font-medium">Short-term Outcomes</span>
                <span className="text-sm text-gray-500">Next 1-2 years</span>
              </div>
            </label>
            
            <label className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
              <input
                type="radio"
                value="long-term"
                {...register('timeframe', { required: 'Please select a timeframe' })}
                className="sr-only"
              />
              <div className="text-center">
                <span className="block font-medium">Long-term Impact</span>
                <span className="text-sm text-gray-500">3+ years</span>
              </div>
            </label>
          </div>
          {errors.timeframe && (
            <p className="text-sm text-red-600">{errors.timeframe.message}</p>
          )}
        </div>

        {/* Priority Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select your top 3 priorities in order of importance
          </label>
          <select
            multiple
            {...register('priorities', {
              required: 'Please select your priorities',
              validate: value => value.length === 3 || 'Please select exactly 3 priorities'
            })}
            className="w-full px-3 py-2 border rounded-md"
            size={Object.keys(WheelOfLife).length}
          >
            {Object.values(WheelOfLife).map((area) => (
              <option
                key={area}
                value={area}
                disabled={selectedPriorities.length >= 3 && !selectedPriorities.includes(area)}
                className="py-2 px-3 hover:bg-blue-50 cursor-pointer"
              >
                {area.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
          {errors.priorities && (
            <p className="text-sm text-red-600">{errors.priorities.message}</p>
          )}
          <p className="text-sm text-gray-500">
            Select in order of importance. Your first selection will be your top priority.
          </p>
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