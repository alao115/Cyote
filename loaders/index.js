import expressLoader from './express'
import dbLoader from './db'
import { success, error, info } from 'consola'

export default ({ app }) => {

    dbLoader()
        .then(() => success("Loading database loader successfully"))
        .catch(err => {
            error(err)
            process.exit()
        })

    expressLoader({ app })
        .then(() => success("Loading express loader successfully"))

}