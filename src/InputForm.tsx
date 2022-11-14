//Purpose: Handle inputting of new Invoices, add data to Global State

//IMPORTS
import { faCircleXmark, faPlusCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InvoiceData, InvoiceStatus } from "./Invoice";
import React, { ChangeEvent, SyntheticEvent } from "react";
import './InputForm.css'
import { useGlobalState } from "./state";


//Setup type for Props
export type InputFormProps = {
    closeFunction: () => void,
    addFunction?: (d: InvoiceData) => void
}

//Main Function
export default function InputForm(props:InputFormProps){

    //Create state with base values, using the InvoiceData type
    const [formData, setFormData] = React.useState<InvoiceData>({
        id: "",
        dueon: new Date(),
        payto: "",
        amount: 0,
        status: InvoiceStatus.draft
    })

    //Create state for global invoice data
    const [allData, setAllData] = useGlobalState('data');

    //Function to update current form state
    function updateForm(e: ChangeEvent<HTMLInputElement>){
        let value: String | Number | Date //Setup temporary value to assign to new data
        
        //Checks if data needs to be reformatted, and reformats it based on the type of input
        if (e.target.name === 'amount') {
            value = Number(e.target.value)
        } else if (e.target.name === 'dueon'){
            value = new Date(e.target.value + "T00:00:00");
        }
         else {
            value = e.target.value
        }

        //Sets the new form data, including the new target and value
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: value
            }
            
        })
    }


    //Adds invoice to global invoice list.
    function addInvoice(){
        let newData = allData; //create temporary variable from old data
        newData.push(formData); //push form data onto new data
        setAllData(newData); //set all data with form data added on
        props.closeFunction() //close the input form screen
    }

    //Component JSX, contains input fields and icons to close and add invoices
    return(
        <div className="input-form-container">
            <div className="input-form">
                <FontAwesomeIcon icon={faCircleXmark} className="exit" onClick={props.closeFunction}/>
                <h2>Add an invoice</h2>
                <div className="field">
                    <label htmlFor="id">Invoice ID</label>
                    <input type="text" name="id" id="id" className="input" onChange={updateForm}/>
                </div>
                <div className="field">
                    <label htmlFor="dueon">Pay Date</label>
                    <input type="date" name="dueon" id="dueon" className="input" onChange={updateForm}/>
                </div>
                <div className="field">
                    <label htmlFor="payto">Pay To</label>
                    <input type="text" name="payto" id="payto" className="input" onChange={updateForm}/>
                </div>
                <div className="field">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" className="input" onChange={updateForm}/>
                </div>
                <FontAwesomeIcon className="add" icon={faPlusCircle} size="2x" onClick={addInvoice}/>
            </div>
        </div>
    )
}