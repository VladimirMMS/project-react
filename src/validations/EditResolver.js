import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles'


const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    role: yup.string().oneOf(Object.keys(roles))

})

export default yupResolver(schema)