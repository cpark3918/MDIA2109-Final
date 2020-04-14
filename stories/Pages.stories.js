import React from 'react';

import LifeStages from '../pages/lifestage';
import DogSize from '../pages/dogsize';
import Topic from '../pages/topic';
import Maintenance from '../pages/maintenance ';
import Health from '../pages/health';
import Training from '../pages/training';
import CommandInfo from '../pages/commandinfo';
import TrainingQuizPopUp from '../pages/quizpopup';
import TrainingQuizQ1 from '../pages/trainingquizq1';
import TrainingQuizQ2 from '../pages/trainingquizq2';
import TrainingQuizQ3 from '../pages/trainingquizq3';
import TrainingQuizResults from '../pages/trainingquizresults';
import MaintenanceQuizQ1 from '../pages/maintenancequizq1';
import MaintenanceQuizQ2 from '../pages/maintenancequizq2';
import MaintenanceQuizQ3 from '../pages/maintenancequizq3';
import MaintenanceQuizResults from '../pages/maintenancequizresults';

import Home from '../pages/home';
import About from '../pages/about';
import Tutorial01 from '../pages/tutorial1';
import Tutorial02 from '../pages/tutorial2';
import Tutorial03 from '../pages/tutorial3';
import Tutorial04 from '../pages/tutorial4';
import Tutorial05 from '../pages/tutorial5';
import Resources from '../pages/resources';

export default {
    title:"Pages",
};

export const MyLifeStages = () => <LifeStages />;
export const MyDogSize = () => <DogSize />;
export const MyTopic = () => <Topic />;
export const MyMaintenance = () => <Maintenance />;
export const MyHealth = () => <Health />;
export const MyTraining = () => <Training />;
export const MyCommandInfo = () => <CommandInfo />;
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