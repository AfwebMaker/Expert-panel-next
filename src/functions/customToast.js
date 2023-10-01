
//toast
import toast from 'react-hot-toast';
//toast component
import Alert from '@/app/_components/Alert'

const customToast = (status, title, description) => {
    toast.custom(conf => (<Alert conf={conf} status={status} title={title} description={description} />))
}

export default customToast;