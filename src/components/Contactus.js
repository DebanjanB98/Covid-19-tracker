import React from 'react';
import Footer from './Footer';

class Contactus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            patientName: '',
            patientAge: null,
            contact: '',
            patientState: '',
            Gender: '',
            Requirement: '',
            Info: '' ,          
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=(event)=>{
       
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit=(event)=>{
        
        event.preventDefault();
        alert('____Patient Details____ \nName: '+ this.state.patientName+' \n Age: '+ this.state.patientAge + '\n Contact No.: '+ this.state.contact+ '\n State: '+this.state.patientState+' \n Gender: '+ this.state.Gender+ '\n Requirement: '+ this.state.Requirement);
        
    }
    render(){
        return(
            <>

            
            <form className="Contactus" style={{alignItems: "stretch"}} onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type="text" name='patientName' placeholder='Patient Name' onChange={this.handleChange} />
                    
                </div>
                <br />
                <div>
                    <label htmlFor='age'>Age: </label>
                    <input type="number" style={{minWidth: "100px"}} name='patientAge' placeholder='Patient Age' value={this.state.patientAge} onChange={this.handleChange} min="1" max="105"/>
                </div>
                <br />
                <div>
                    <label htmlFor='contact'>Contact No.: </label>
                    <input type="text" name='contact' placeholder='Phone Number' value={this.state.contact} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor='state'>State: </label>
                    <input type="text" name='patientState' style={{width: "200px"}} placeholder='State where patient resides' value={this.state.patientstate} onChange={this.handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor='gender'>Gender: </label>
                    <select type="text" name='Gender' value={this.state.Gender} onChange={this.handleChange}>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                        <option value="Others"> Others </option>
                    </select>
                 
                </div>
                <br />
                <div>
                    <label htmlFor='require'>Requirement: </label>
                    <select type="text" name='Requirement' value={this.state.Requirement} onChange={this.handleChange}>
                        <option value="Remdesivir"> Remdesivir </option>
                        <option value="Oxygen Supply"> Oxygen Supply </option>
                        <option value="Bed with ventilation"> Bed with ventilation </option>
                        <option value="Normal COVID bed"> Normal Covid Bed </option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor='info'>Additional Info: </label>
                    <textarea name='Info' placeholder='Type any additional information about patient you want us to know' value={this.state.Info} onChange={this.handleChange} />
                </div>
                <br />                
               
                <input type="submit" value="Submit" style={{borderRadius: "5px" ,minWidth:"100px    ", backgroundColor: "blue", color:"white"}} />
            </form>
            
            <Footer />
            </>
        );
    }
}

export default Contactus;