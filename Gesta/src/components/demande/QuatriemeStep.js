import React, {useState , useContext} from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
export default function QuatriemeStep() {
const {setStep, userData , setUserData }= useContext(multiStepContext);

    return (
        <div>
            <div>
                    <TextField label ='Langue' style ={{width : '268px'}} value = {userData['Langue']} onChange={(e)=>setUserData({...userData, "Langue" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Dégre de maitrise' style ={{width : '268px'}} value = {userData['Dégre de maitrise']}  onChange={(e)=>setUserData({...userData, "Dégre de maitrise" : e.target.value})} margin="normal" variant ="standard" color="secondary"/>
            </div>   
            <Button variant="contained" onClick={()=>setStep(3)} color="secondary">Précedent</Button> 
            <Button variant="contained" onClick={()=>setStep(5)} color="primary">Suivant</Button>
        </div>
    )
}
