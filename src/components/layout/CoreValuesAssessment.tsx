import React from 'react';
import { useForm } from 'react-hook-form';
import { useDecisionStore } from '../../state/store';

interface ValueCategory {
  name: string;
  values: string[];
}

interface CoreValuesForm {
  selectedValues: string[];
}

export const CoreValuesAssessment: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CoreValuesForm>();
  const { setCoreValues, nextStep, previousStep } = useDecisionStore();

  const selectedValues = watch('selectedValues', []);

  // Define value categories
  const valueCategories: ValueCategory[] = [
    {
      name: "Personal Development Values",
      values: [
        "Growth", "Learning", "Creativity", "Knowledge", "Curiosity",
        "Self-discipline", "Achievement", "Independence", "Self-expression", "Resilience"
      ]
    },
    {
      name: "Ethical and Moral Values",
      values: [
        "Integrity", "Honesty", "Fairness", "Justice", "Responsibility",
        "Accountability", "Humility", "Compassion", "Forgiveness", "Empathy"
      ]
    },
    {
      name: "Interpersonal Values",
      values: [
        "Kindness", "Loyalty", "Trust", "Respect", "Patience",
        "Open-mindedness", "Collaboration", "Generosity", "Supportiveness", "Tolerance"
      ]
    },
    {
      name: "Social and Community Values",
      values: [
        "Equality", "Inclusion", "Service", "Altruism", "Unity",
        "Citizenship", "Environmental stewardship", "Social justice", "Cultural respect", "Advocacy"
      ]
    },
    {
      name: "Achievement and Success Values",
      values: [
        "Ambition", "Excellence", "Leadership", "Perseverance", "Determination",
        "Innovation", "Focus", "Courage", "Risk-taking", "Competence"
      ]
    },
    {
      name: "Spiritual and Existential Values",
      values: [
        "Faith", "Hope", "Purpose", "Gratitude", "Mindfulness",
        "Enlightenment", "Serenity", "Connection", "Fulfillment", "Transcendence"
      ]
    },
    {
      name: "Lifestyle and Well-Being Values",
      values: [
        "Health", "Vitality", "Balance", "Simplicity", "Adventure",
        "Freedom", "Pleasure", "Beauty", "Flexibility", "Nature"
      ]
    },
    {
      name: "Family and Relationship Values",
      values: [
        "Family", "Friendship", "Love", "Marriage", "Community",
        "Tradition", "Commitment", "Stability", "Harmony", "Connection"
      ]
    },
    {
      name: "Work and Financial Values",
      values: [
        "Financial security", "Productivity", "Innovation", "Professionalism", "Work ethic",
        "Efficiency", "Reliability", "Resourcefulness", "Ambition", "Accountability"
      ]
    }
  ];

  const onSubmit = (data: CoreValuesForm) => {
    setCoreValues(data.selectedValues);
    nextStep();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Core Values Assessment</h2>
      <p className="text-gray-600 mb-6">
        Select the values that are most important to you. These will help align your decision with your personal values.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Values Selection */}
        <div className="space-y-6">
          {valueCategories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-700">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.values.map((value) => (
                  <label
                    key={value}
                    className={`
                      relative flex items-center p-3 rounded-lg border cursor-pointer
                      hover:bg-blue-50 transition-colors duration-200
                      ${selectedValues.includes(value) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
                    `}
                  >
                    <input
                      type="checkbox"
                      value={value}
                      {...register('selectedValues')}
                      className="sr-only"
                    />
                    <span className="text-sm">
                      {value}
                    </span>
                    {selectedValues.includes(value) && (
                      <svg
                        className="absolute top-1 right-1 w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Values Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Selected Values ({selectedValues.length})</h4>
          <div className="flex flex-wrap gap-2">
            {selectedValues.map((value) => (
              <span
                key={value}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {value}
              </span>
            ))}
          </div>
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