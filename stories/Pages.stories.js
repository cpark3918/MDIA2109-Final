import React from 'react';

import LifeStages from '../pages/lifestage';
import DogSize from '../pages/dogsize';
import Topic from '../pages/topic';
import Maintenance from '../pages/maintenance';
import Health from '../pages/health';
import Training from '../pages/training';
import CommandInfoPuppy from '../pages/commandinfopuppy';
import CommandInfoAdult from '../pages/commandinfoadult';
import CommandInfoSenior from '../pages/commandinfosenior';
import SocializingInfoPuppy from '../pages/socializinginfopuppy';
import SocializingInfoAdult from '../pages/socializinginfoadult';
import SocializingInfoSenior from '../pages/socializinginfosenior';
import TrainingQuizPopUp from '../pages/trainingquizpopup';
import TrainingQuizQ1 from '../pages/trainingquizq1';
import TrainingQuizQ2 from '../pages/trainingquizq2';
import TrainingQuizQ3 from '../pages/trainingquizq3';
import TrainingQuizResults from '../pages/trainingquizresults';
import MaintenanceQuizQ1 from '../pages/maintenancequizq1';
import MaintenanceQuizQ2 from '../pages/maintenancequizq2';
import MaintenanceQuizQ3 from '../pages/maintenancequizq3';
import ExerciseInfoPuppy from '../pages/exerciseinfopuppy';
import ExerciseInfoAdult from '../pages/exerciseinfoadult';
import ExerciseInfoSenior from '../pages/exerciseinfosenior';
import FoodInfoPuppy from '../pages/foodinfopuppy';
import FoodInfoAdult from '../pages/foodinfoadult';
import FoodInfoSenior from '../pages/foodinfosenior';
import MaintenanceQuizResults from '../pages/maintenancequizresults';

import Home from '../pages/home';
import About from '../pages/about';
import Tutorial01 from '../pages/tutorial1';
import Tutorial02 from '../pages/tutorial2';
import Tutorial03 from '../pages/tutorial3';
import Tutorial04 from '../pages/tutorial4';
import Tutorial05 from '../pages/tutorial5';
import Resources from '../pages/resources';
import MedicalPuppy from '../pages/medical_puppy';
import MedicalAdult from '../pages/medical_adult';
import MedicalSenior from '../pages/medical_senior';
import CheckupsPuppy from '../pages/checkups_puppy';
import CheckupsAdult from '../pages/checkups_adult';
import CheckupsSenior from '../pages/checkups_senior';
import HealthQuizPopUp from '../pages/healthquizpopup';
import HealthQuiz01 from '../pages/healthquizq1';
import HealthQuiz02 from '../pages/healthquizq2';
import HealthQuiz03 from '../pages/healthquizq3';
import HealthQuizResults from '../pages/healthquizresults';

export default {
    title:"Pages",
};

export const MyLifeStages = () => <LifeStages />;
export const MyDogSize = () => <DogSize />;
export const MyTopic = () => <Topic />;
export const MyMaintenance = () => <Maintenance />;
export const MyExerciseInfoPuppy = () => <ExerciseInfoPuppy />;
export const MyExerciseInfoAdult = () => <ExerciseInfoAdult />;
export const MyExerciseInfoSenior = () => <ExerciseInfoSenior />;
export const MyFoodInfoPuppy = () => <FoodInfoPuppy />;
export const MyFoodInfoAdult = () => <FoodInfoAdult />;
export const MyFoodInfoSenior = () => <FoodInfoSenior />;
export const MyHealth = () => <Health />;
export const MyTraining = () => <Training />;
export const MyCommandInfoPuppy = () => <CommandInfoPuppy />;
export const MyCommandInfoAdult = () => <CommandInfoAdult />;
export const MyCommandInfoSenior = () => <CommandInfoSenior />;
export const MySocializingInfoPuppy = () => <SocializingInfoPuppy />;
export const MySocializingInfoAdult = () => <SocializingInfoAdult />;
export const MySocializingInfoSenior = () => <SocializingInfoSenior />;
export const MyTrainingQuizPopUp = () => <TrainingQuizPopUp />;
export const MyTrainingQuizQ1 = () => <TrainingQuizQ1 />;
export const MyTrainingQuizQ2 = () => <TrainingQuizQ2 />;
export const MyTrainingQuizQ3 = () => <TrainingQuizQ3 />;
export const MyTrainingQuizResults = () => <TrainingQuizResults />;
export const MyMaintenanceQuizQ1 = () => <MaintenanceQuizQ1 />;
export const MyMaintenanceQuizQ2 = () => <MaintenanceQuizQ2 />;
export const MyMaintenanceQuizQ3 = () => <MaintenanceQuizQ3 />;
export const MyMaintenanceQuizResults = () => <MaintenanceQuizResults />;

export const HomePage = () => <Home />;
export const AboutPage = () => <About />;
export const TutorialPage01 = () => <Tutorial01 />;
export const TutorialPage02 = () => <Tutorial02 />;
export const TutorialPage03 = () => <Tutorial03 />;
export const TutorialPage04 = () => <Tutorial04 />;
export const TutorialPage05 = () => <Tutorial05 />;
export const ResourcesPage = () => <Resources />;
export const CheckupsPuppyPage= () => <CheckupsPuppy />;
export const CheckupsAdultPage= () => <CheckupsAdult />;
export const CheckupsSeniorPage= () => <CheckupsSenior />;
export const MedicalPuppyPage= () => <MedicalPuppy />;
export const MedicalAdultPage= () => <MedicalAdult />;
export const MedicalSeniorPage= () => <MedicalSenior />;
export const HealthQuizPopUpPage = () => <HealthQuizPopUp />;
export const HealthQuizQuestion1 = () => <HealthQuiz01 />
export const HealthQuizQuestion2 = () => <HealthQuiz02 />
export const HealthQuizQuestion3 = () => <HealthQuiz03 />
export const HealthQuizResultsPage = () => <HealthQuizResults />;