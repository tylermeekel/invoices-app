//Purpose: Reusable component to display Invoice in Invoices list

//IMPORTS
import React from "react";
import './Invoice.css'
import { ReactPropTypes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";


//enum to represent status of invoice
export enum InvoiceStatus {
    paid = "Paid",
    pending = "Pending",
    draft = "Draft",
}


//Define type for Invoice data
export type InvoiceData = {
    id: string,
    dueon: Date,
    payto: string,
    amount: number,
    status: InvoiceStatus,
}


//Function to convert a number value into currency representation
function convertToCurrency(amount:number){
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'cad'
    })
    return formatter.format(amount);
}


//Main function, simply returns JSX using props passed to component
export default function Invoice(props:InvoiceData){
    return (
        <div className="invoice-container">
            <div className="box id"><h3>#{props.id}</h3></div>
            <div className="box date"><h3>Due: {props.dueon.toDateString()}</h3></div>
            <div className="box payto"><h3>{props.payto}</h3></div>
            <div className="box amount"><h3>{convertToCurrency(props.amount)}</h3></div>
            <div className="box status"><h3>{props.status}</h3></div>
            <div className="box next-button"><FontAwesomeIcon icon={faChevronRight}/></div>
        </div>
    )
}