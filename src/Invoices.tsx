//Purpose: Component to contain a list of all data

import React from "react";
import Invoice from "./Invoice";
import { InvoiceData, InvoiceStatus } from "./Invoice";
import { exampleData } from "./exampleData";
import './Invoices.css'

export default function Invoices(){
    const [data, setData] = React.useState<InvoiceData[]>(exampleData);
    //const [data, setData] = useGlobalState('data'); Wait to test out and swap with above.
    
    //Maps inputted data to Invoice components
    const mappedData = data.map(i => {
        return (
           <Invoice id={i.id} dueon={i.dueon} amount={i.amount} payto={i.payto} status={i.status} />
        )
    })


    //returns JSX with mapped components list.
    return (
        <div className="invoices">
            {mappedData}
        </div>
    )
}