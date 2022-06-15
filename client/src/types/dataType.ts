interface ReportsProps{
    name: string,
    percentage: 12,
    price: 103
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