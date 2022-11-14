import { InvoiceData, InvoiceStatus } from "./Invoice";

export const exampleData:InvoiceData[] = [
    {
        id: "AB123",
        dueon: new Date(2022, 6, 2),
        payto: "Grillian Grimble",
        amount: 10000.50,
        status: InvoiceStatus.draft
    },
    {
        id: "CDCDC",
        dueon: new Date(2024, 9, 3),
        payto: "Choms Chims",
        amount: 250000.00,
        status: InvoiceStatus.pending
    },
    {
        id: "AB123",
        dueon: new Date(2022, 6, 2),
        payto: "Kevin Costner",
        amount: 10000.00,
        status: InvoiceStatus.paid
    },
    {
        id: "AB123",
        dueon: new Date(2022, 6, 2),
        payto: "Kevin Costner",
        amount: 10000.00,
        status: InvoiceStatus.paid
    },
]