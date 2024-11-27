// src/components/Layout/SubjectiveAssessment.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { SubjectiveMetrics, WheelOfLife, TimeFrame, Question, QuestionType } from '../../types';
import { useDecisionStore } from '../../state/store';
import { QuestionController } from '../../controllers/QuestionController';
import { AnalysisService } from '../../services/AnalysisService';

export const SubjectiveAssessment: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SubjectiveMetrics>();
  const { 
    context, 
    priorities,
    coreValues,
    currentState,
    objectiveMetrics,
    setSubjectiveMetrics, 
    setAnalysisResults, 
    nextStep, 
    previousStep,
    addError 
  } = useDecisionStore();
  
  const questionController = new QuestionController();
  const analysisService = new AnalysisService();

  React.useEffect(() => {
    console.log('[SubjectiveAssessment] Current context:', context);
    console.log('[SubjectiveAssessment] Current objective metrics:', objectiveMetrics);
  }, [context, objectiveMetrics]);

  const questions = React.useMemo(() => {
    if (!context || !priorities || !coreValues) {
      console.warn('[SubjectiveAssessment] Cannot generate questions - missing context');
      return [];
    }

    try {
      const generatedQuestions = questionController.generateQuestionSequence(
        priorities.timeframe as TimeFrame,
        priorities.topPriorities,
        coreValues,
      );
      console.log('[SubjectiveAssessment] Questions generated:', generatedQuestions.length);
      return generatedQuestions;
    } catch (error) {
      console.error('[SubjectiveAssessment] Error in question generation:', error);
      return [];
    }
  }, [context, priorities, coreValues]);

  const onSubmit = async (data: SubjectiveMetrics) => {
    console.log('[SubjectiveAssessment] Form submitted with data:', data);

    try {
      if (!context || !objectiveMetrics || !currentState) {
        const error = 'Missing required data for analysis';
        console.error('[SubjectiveAssessment] Error:', error);
        addError(error);
        return;
      }

        // Add timestamps to responses
        const timestampedResponses = Object.entries(data.responses).reduce(
            (acc, [id, response]) => ({
                ...acc,
                [id]: {
                    ...response,
                    timestamp: new Date()
                }
            }),
            {}
        );

        const formattedData: SubjectiveMetrics = {
            ...data,
            responses: timestampedResponses
        };

        // Combine current state with responses
      const subjectiveData: SubjectiveMetrics = {
        currentState: currentState,
        responses: data.responses
      };

      setSubjectiveMetrics(subjectiveData);
      console.log('[SubjectiveAssessment] Subjective metrics set');

      const results = analysisService.generateAnalysis(
        context,
        objectiveMetrics,
        subjectiveData
      );
      
      setAnalysisResults(results);
      nextStep();
    } catch (error) {
      console.error('[SubjectiveAssessment] Error in submission:', error);
      addError(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };

  // Add validation for required context
  if (!context || !objectiveMetrics || !currentState) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-red-600">
          Please complete the previous steps before proceeding to the subjective assessment.
        </p>
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
      <h2 className="text-2xl font-bold mb-6">Impact Assessment</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Dynamic Questions */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold">Questionnaire</h3>
          
          {questions.map((question) => (
            <div key={question.id} className="space-y-3 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {question.text}
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  {question.description}
                </p>
              </div>
              
              {question.type === 'scale' && question.scaleParams && (
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{question.scaleParams.minLabel}</span>
                    <span className="text-center">{question.scaleParams.midLabel}</span>
                    <span>{question.scaleParams.maxLabel}</span>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="range"
                      min={question.scaleParams.min}
                      max={question.scaleParams.max}
                      step="1"
                      {...register(`responses.${question.id}.value` as const, {
                        required: question.required,
                        setValueAs: (v: string) => Number(v)
                      })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    
                    <div className="relative w-full h-6 mt-2">
                      {question.scaleParams.markers.map((marker) => (
                        <div
                          key={marker.value}
                          className="absolute transform -translate-x-1/2 text-xs text-gray-500"
                          style={{
                            left: `${(marker.value / question.scaleParams!.max) * 100}%`,
                            top: '0'
                          }}
                        >
                          {marker.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-right text-sm text-gray-500">
                    Current value: {watch(`responses.${question.id}.value`) || 5}
                  </div>
                </div>
              )}

              {question.type === 'multiselect' && (
                <select
                  multiple
                  {...register(`responses.${question.id}.value` as const, {
                    required: question.required
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  {question.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {question.type === 'text' && (
                <input
                  type="text"
                  {...register(`responses.${question.id}.value` as const, {
                    required: question.required
                  })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              )}
              
              {errors.responses?.[question.id] && (
                <p className="text-sm text-red-600">
                  This field is required
                </p>
              )}
            </div>
          ))}
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
            Generate Analysis
          </button>
        </div>
      </form>
    </div>
  );
};