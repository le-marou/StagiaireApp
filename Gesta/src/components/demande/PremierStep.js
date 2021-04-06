import React, {useState , useContext} from 'react'
import {Button , TextField} from '@material-ui/core'
import {multiStepContext} from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/StepContext.js'
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

export default function PremiertStep() {
        const {setStep, userData , setUserData }= useContext(multiStepContext);
    return (
        <div>
            <div>
                    <TextField label ='Nom' style ={{width : '268px'}}  value = {userData['Nom']} onChange={(e)=>setUserData({...userData, "Nom" : e.target.value})} margin="normal" variable="outlined"  color="secondary"/>
            </div> 
            <div>
                    <TextField label ='Prénom' style ={{width : '268px'}}  value = {userData['Prénom']} onChange={(e)=>setUserData({...userData, "Prénom" : e.target.value})} margin="normal" variable ="outlined" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Date de naissance' style ={{width : '268px'}}  type ="date"  defaultValue="2021-04-01"  value = {userData['Date de naissance']} onChange={(e)=>setUserData({...userData, "Date de naissance" : e.target.value})} margin="normal" variable ="outlined" color="secondary"/>
            </div>
            <div>

                    <TextField  label="Sexe" style ={{width : '268px'}}  select margin="normal" variable ="outlined" color="secondary" value= {userData['']} onChange={(e)=>setUserData({...userData, "" : e.target.value})} >
                            <MenuItem value={'Homme'} >Homme</MenuItem><MenuItem value ={'Femme'} >Femme</MenuItem>
                </ TextField>
            </div>
            <div>
                    <TextField label ='Téléphone' style ={{width : '268px'}}  value = {userData['Téléphone']} onChange={(e)=>setUserData({...userData, "Téléphone" : e.target.value})} margin="normal" variable ="outlined" color="secondary"/>
            </div>
            <div>
                    <TextField label ='Email' style ={{width : '268px'}}  value = {userData['Email']} onChange={(e)=>setUserData({...userData, "Email" : e.target.value})} margin="normal" variable ="outlined" color="secondary"/>   
            </div>    
            <Button variant="contained" onClick={()=>setStep(2)} color="primary">Suivant</Button>
            
        </div>
    )
}