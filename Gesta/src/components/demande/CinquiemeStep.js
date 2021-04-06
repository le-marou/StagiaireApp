import React,{useState , useContext} from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
export default function CinquiemeStep() {
const {setStep, userData , setUserData }= useContext(multiStepContext);

    return (
        <div>
            <div>
                    <TextField label ="le Domaine de stage souhaité" style ={{width : '268px'}} value = {userData['le Domaine de stage souhaité']} onChange={(e)=>setUserData({...userData, "le Domaine de stage souhaité" : e.target.value})} margin="normal" variant="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Date de fin souhaitée'  style ={{width : '268px'}} type ="date"  defaultValue="2021-04-01" value = {userData['Date de fin souhaitée']} onChange={(e)=>setUserData({...userData, "Date de fin souhaitée" : e.target.value})} margin="normal" variant="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Date de début souhaitée' style ={{width : '268px'}} type ="date"  defaultValue="2021-04-01" value = {userData['Date de début souhaitée']} onChange={(e)=>setUserData({...userData, "Date de début souhaitée" : e.target.value})} margin="normal" variant="standard" color="secondary"/>   
            </div>
            <Button variant="contained" onClick={()=>setStep(4)} color="secondary">Précedent</Button>    
            <Button variant="contained" onClick={()=>setStep(6)} color="primary">Suivant</Button>
        </div>
    )
}
