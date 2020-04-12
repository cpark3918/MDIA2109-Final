import React from 'react';

import LifeStages from '../pages/lifestage';
import DogSize from '../pages/dogsize';
import Topic from '../pages/topic';
import Maintenance from '../pages/maintenance ';
import Health from '../pages/health';
import Training from '../pages/training';
import TrainingQuizPopUp from '../pages/quizpopup';

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
