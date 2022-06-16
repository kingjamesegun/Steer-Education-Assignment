import { Change } from "../components/reportTable"

interface ReportsProps{
    name: string,
    percentage: number,
    price: number,
    performance: Change ,
    image:  string
}

export interface DataDetailsProps {
    firstName: string,
    image: string,
    id: number,
    reports: ReportsProps[],
}

export interface Props{
    data: Array<DataDetailsProps>
}