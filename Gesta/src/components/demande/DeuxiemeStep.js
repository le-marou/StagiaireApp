import React,{useState , useContext} from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
export default function DeuxiemeStep() {
        const {setStep, userData , setUserData }= useContext(multiStepContext);
    return (
        <div>
            <div>
                    <TextField label ='Specialité' style ={{width : '268px'}} value = {userData['Spécialité']} onChange={(e)=>setUserData({...userData, "Spécialité" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ="Nom de l'établissement" style ={{width : '268px'}} value = {userData["Nom de l'établissement"]} onChange={(e)=>setUserData({...userData, "Nom de l'établissement" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Filière ou option' style ={{width : '268px'}} value = {userData['Filière ou option']} onChange={(e)=>setUserData({...userData, "Filière ou option" : e.target.value})} margin="normal" variant="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ="Diplome ou titre pour lequel vous demandez le stage" style ={{width : '268px'}} value = {userData['Diplome ou titre pour lequel vous demandez le stage']} onChange={(e)=>setUserData({...userData, "Diplome ou titre pour lequel vous demandez le stage" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div> 
            <Button variant="contained" onClick={()=>setStep(1)} color="secondary">Précedent</Button> 
            <Button variant="contained" onClick={()=>setStep(3)} color="primary">Suivant</Button>
        </div>
    )
}
