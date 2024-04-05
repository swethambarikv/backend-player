import container from './config/container'
import SERVICE_IDENTIFIER_VALUE from './constants/identifier'
import { Class } from './interfaces'

let studentScore = container.get<Class>(SERVICE_IDENTIFIER_VALUE.STUDENT_CLASS)

console.log(studentScore.score())
