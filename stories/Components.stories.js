import React from 'react';

import BackToPrev from '../comps/backtoprev';
import CustomButton from '../comps/custombutton';
import PageTitle from '../comps/pagetitle';
import CardPanel from '../comps/cardpanel';
import PanelTitle from '../comps/paneltitle';
import LogoHome from '../comps/logo_home';
import LogoSmall from '../comps/logo_small';
import QuizPopup from '../comps/quizpopup';

export default {
    title:"components",
};

export const MyBackToPrev = () => <BackToPrev />;
export const MyCustomButton = () => <CustomButton />;
export const MyPageTitle = () => <PageTitle />;
export const MyCardPanel = () => <CardPanel />;
export const MyPanelTitle = () => <PanelTitle />;

export const MyLogoHome = () => <LogoHome />;
export const MyLogoSmall = () => <LogoSmall />;
export const MyQuizPopup = () => <QuizPopup />;