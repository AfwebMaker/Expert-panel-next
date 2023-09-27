
//toast
import toast from 'react-hot-toast';
//toast component
import Alert from '@/app/_components/Alert'

const customToast = (status, massage) => {
    toast.custom(conf => (<Alert conf={conf} status={status} massage={massage} />))
}

export default customToast;