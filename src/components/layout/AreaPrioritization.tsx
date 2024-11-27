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

  const selectedTimeframe = watch('timeframe');
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
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What is your primary focus?
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['short-term', 'long-term'].map((timeframe) => (
                <label 
                    key={timeframe}
                    className={`
                        relative flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                        ${selectedTimeframe === timeframe
                            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                            : 'border-gray-200 hover:bg-gray-50'}
                    `}
                >                
                    <input
                        type="radio"
                        value={timeframe}
                        {...register('timeframe', { required: 'Please select a timeframe' })}
                        className="sr-only"
                    />
                    <div className="text-center">
                        <span className={`block font-medium ${selectedTimeframe === timeframe ? 'text-blue-600' : 'text-gray-900'}`}>
                            {timeframe === 'short-term' ? 'Short-term Outcomes' : 'Long-term Impact'}
                        </span>
                        <span className={`text-sm ${selectedTimeframe === timeframe ? 'text-blue-500' : 'text-gray-500'}`}>
                            {timeframe === 'short-term' ? 'Next 1-2 years' : '3+ years'}
                        </span>
                    </div>
                    {selectedTimeframe === timeframe && (
                        <div className="absolute top-2 right-2 text-blue-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </label>
            ))}
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