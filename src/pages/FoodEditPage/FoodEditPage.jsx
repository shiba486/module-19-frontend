
import UpdateFood from './../../components/UpdateFood'
import { useParams } from 'react-router-dom'


const FoodEditPage = () => {
    const {id} = useParams()
  return (
   
      <UpdateFood id={id}/>
   
  )
}

export default FoodEditPage
