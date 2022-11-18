import Icon from '../../assets/img/icone1.svg';
import axios from "axios";
import "./style.css";
import { BASE_URL } from "../../utils/request"
import { toast } from 'react-toastify';


type Props = {
  saleId: number;
}

function handleClick(id :number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response =>{
    toast.info("SMS Enviado com sucesso");
  })
}


function NotificationButton({saleId}: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={Icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;





