import { Props } from '../../types/dataType'
import Card from './Card'

const ExportChart = ({ data }: Props) => {
  return (
    <>
      {data.map(({ id, reports }) => {
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-10" key={id}>
            {reports.map(({ image, name }) => {
              return <Card image={image} name={name} key={image} />
            })}
          </div>
        )
      })}
    </>
  )
}

export default ExportChart
