//Purpose: Displays main page content

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MainContent.css'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Invoices from "./Invoices";
import { useGlobalState } from './state';

//Define type for properties of component
type MainContentProps = {
    addInvoiceFunc: () => void,
}


//Main Function
export default function MainContent(props: MainContentProps){

    //Gathers global state of invoice data
    const [data, setData] = useGlobalState('data');

    //Returns main page content
    return (
        <div className="main-content">
            <div className="content-top">
                <div className="title-info">
                    <h1>Invoices</h1>
                    <h2 className="total-invoices">There are {data.length} total invoices</h2>
                </div>
                <div className="filter-new">
                    <button className="button" onClick={props.addInvoiceFunc}><FontAwesomeIcon icon={faPlusCircle}/> Add Invoice</button>
                </div>
            </div>
            <Invoices />
        </div>
    )
}