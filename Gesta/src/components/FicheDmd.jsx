import React ,{component , useContext} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import PremiertStep from "./demande/PremierStep";
import DeuxiemeStep from "./demande/DeuxiemeStep";
import TroisiemeStep from "./demande/TroisiemeStep";
import QuatriemeStep from "./demande/QuatriemeStep";
import CinquiemeStep from "./demande/CinquiemeStep";
import {Stepper , StepLabel, Step,} from '@material-ui/core'
import SixiemeStep from "./demande/SixiemeStep";
import bg3 from "../assets/img/bg3.png";
import bg4 from "../assets/img/bg4.png";
import {multiStepContext} from "../StepContext.js"

export default function FicheDmd() {
  const{ currentStep, finalData }= useContext(multiStepContext);
  function showStep(step){
    console.log (step);
    switch(step){
         case 1 :
        return <PremiertStep/>
         case 2 :
          return <DeuxiemeStep/>
          case 3 :
          return <TroisiemeStep/>
          case 4 :
          return <QuatriemeStep/>
          case 5 :
          return <CinquiemeStep/>
          case 6 :
          return <SixiemeStep/>
    }
  }
  return (
    <>
    <main class="ccontainer">
      <img src={bg3} alt="/" class="bg3" />
      <img src={bg4} alt="/" class="bg4" />
      <div class="form-dock"><form class="dorm">
        <p class="title"><h1>Demande de stage</h1></p>
        <div className ='App'>
      <header className="App-header">
        <div className="center-stepper">
      <Stepper style = {{width : '95%'}}activeStep ={currentStep -1 } orientation ="horizontal">
      <Step ><StepLabel></StepLabel></Step>
      <Step><StepLabel></StepLabel></Step>
      <Step><StepLabel></StepLabel></Step>
      <Step><StepLabel></StepLabel></Step>
      <Step><StepLabel></StepLabel></Step>
      <Step><StepLabel></StepLabel></Step>
      </Stepper>
      </div>    
    {showStep(currentStep)}
    </header>
    </div>
        
        </form>
      </div>
    </main>
  
    </>
  )
}