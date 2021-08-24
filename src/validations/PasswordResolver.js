import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const schema = yup.object().shape({
    password: yup.string().required().min(8)

})

export default yupResolver(schema)