import React ,{useState , useContext}from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
export default function SixiemeStep() {
const {setStep, userData , setUserData , submitData }= useContext(multiStepContext);

    return (
        <div>
            <div>
                    <TextField label ='Recommandations' value = {userData['Recommandations']} onChange={(e)=>setUserData({...userData, "Recommandations" : e.target.value})} margin="normal" variant ="outlined" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Message' value = {userData['Message']} onChange={(e)=>setUserData({...userData, "Message" : e.target.value})} margin="normal" variant ="outlined" color="secondary"/>
            </div>    
            <Button variant="contained" onClick={()=>setStep(5)} color="secondary">Précedent</Button>
            <Button variant="contained" onClick={()=>setStep(submitData)} color="primary">Suivant</Button>
        </div>
    )
}
