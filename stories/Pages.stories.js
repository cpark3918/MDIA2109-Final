import React from 'react';

import LifeStages from '../pages/lifestage';
import DogSize from '../pages/dogsize';
import Topic from '../pages/topic';
import Maintenance from '../pages/maintenance ';
import Health from '../pages/health';
import Training from '../pages/training';
import TrainingQuizPopUp from '../pages/quizpopup';
import TrainingQuizQ1 from '../pages/trainingquizq1';
import TrainingQuizQ2 from '../pages/trainingquizq2';
import TrainingQuizQ3 from '../pages/trainingquizq3';
import TrainingQuizResults from '../pages/trainingquizresults';

import Home from '../pages/home';
import About from '../pages/about';

export default {
    title:"Pages",
};

export const MyLifeStages = () => <LifeStages />;
export const MyDogSize = () => <DogSize />;
export const MyTopic = () => <Topic />;
export const MyMaintenance = () => <Maintenance />;
export const MyHealth = () => <Health />;
export const MyTraining = () => <Training />;
export const MyTrainingQuizPopUp = () => <TrainingQuizPopUp />;
export const MyTrainingQuizQ1 = () => <TrainingQuizQ1 />;
export const MyTrainingQuizQ2 = () => <TrainingQuizQ2 />;
export const MyTrainingQuizQ3 = () => <TrainingQuizQ3 />;
export const MyTrainingQuizResults = () => <TrainingQuizResults />;
export const HomePage = () => <Home />;
export const AboutPage = () => <About />;
