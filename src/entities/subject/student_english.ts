import { inject, injectable } from 'inversify'

import SERVICE_IDENTIFIER_VALUE from '../../constants/identifier'
import { Student, Subject } from '../../interfaces'

@injectable()
export class English implements Student {
  public score: string
  public name: string
  public subject: Subject
  public constructor(
    @inject(SERVICE_IDENTIFIER_VALUE.STUDENT_SUBJECT) subject: Subject
  ) {
    this.name = 'Sample 1'
    this.score = '90'
    this.subject = subject
  }
}
