// src/components/Layout/ObjectiveMetrics.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { ObjectiveMetrics } from '../../types';
import { useDecisionStore } from '../../state/store';

export const ObjectiveMetricsForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ObjectiveMetrics>();
  const { setObjectiveMetrics, nextStep, previousStep } = useDecisionStore();

  const onSubmit = (data: ObjectiveMetrics) => {
    console.log('[ObjectiveMetrics] Submitting data:', data);
    try {
      setObjectiveMetrics(data);
      console.log('[ObjectiveMetrics] Data successfully set');
      nextStep();
    } catch (error) {
      console.error('[ObjectiveMetrics] Error setting metrics:', error);
    }
  };

  // Add validation logging
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.warn('[ObjectiveMetrics] Form validation errors:', errors);
    }
  }, [errors]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Objective Metrics</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Financial Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Financial Impact</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Immediate Costs
            </label>
            <input
              type="number"
              {...register('financial.immediate.costs', { required: 'Required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.financial?.immediate?.costs && (
              <p className="mt-1 text-sm text-red-600">
                {errors.financial.immediate.costs.message}
              </p>
            )}
          </div>

          {/* Add more financial fields */}
        </section>

        {/* Time Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Time Requirements</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Setup Time (hours)
            </label>
            <input
              type="number"
              {...register('time.immediate.setup', { required: 'Required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.time?.immediate?.setup && (
              <p className="mt-1 text-sm text-red-600">
                {errors.time.immediate.setup.message}
              </p>
            )}
          </div>

          {/* Add more time fields */}
        </section>

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