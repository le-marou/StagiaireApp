import React ,{useState , useContext} from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
export default function TroisiemeStep() {
    const {setStep, userData , setUserData }= useContext(multiStepContext);
    return (
        <div>
            <div>
                    <TextField label ='Diplome obtenu' style ={{width : '268px'}} value = {userData['Diplome obtenu']} onChange={(e)=>setUserData({...userData, "Diplome obtenu" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ="Année d'etude" style ={{width : '268px'}} type ="date"  defaultValue="2021-04-01" value = {userData["Année d'etude"]} onChange={(e)=>setUserData({...userData, "Année d'etude" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ="Etablissements" style ={{width : '268px'}} value = {userData['Etablissements']} onChange={(e)=>setUserData({...userData, "Etablissements" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>   
            <Button variant="contained" onClick={()=>setStep(2)} color="secondary">Précedent</Button>
            <Button variant="contained" onClick={()=>setStep(4)} color="primary">Suivant</Button>
        </div>
    )
}
