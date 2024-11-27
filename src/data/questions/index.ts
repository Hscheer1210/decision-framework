import { careerQuestions } from './careerQuestions';
import { financeQuestions } from './financeQuestions';
import { healthQuestions } from './healthQuestions';
import { relationshipQuestions } from './relationshipQuestions';
import { personalGrowthQuestions } from './personalGrowthQuestions';
import { lifestyleQuestions } from './lifestyleQuestions';
import { environmentQuestions } from './environmentQuestions';
import { coreValuesQuestions } from './coreValuesQuestions';
import { Question, WheelOfLife } from '../../types';

// Create a map of all question banks
const questionBanks = new Map<WheelOfLife, Question[]>([
  [WheelOfLife.CAREER, careerQuestions],
  [WheelOfLife.FINANCE, financeQuestions],
  [WheelOfLife.HEALTH, healthQuestions],
  [WheelOfLife.RELATIONSHIPS, relationshipQuestions],
  [WheelOfLife.PERSONAL_GROWTH, personalGrowthQuestions],
  [WheelOfLife.LIFESTYLE, lifestyleQuestions],
  [WheelOfLife.ENVIRONMENT, environmentQuestions],
  [WheelOfLife.CORE_VALUES, coreValuesQuestions],
]);

export default questionBanks;