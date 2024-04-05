import { inject, injectable } from 'inversify'

import SERVICE_IDENTIFIER_VALUE from '../../constants/identifier'
import { Subject, Student } from '../../interfaces'

@injectable()
export class StudentSample2 implements Student {
  public name: string
  public score: string
  public subject: Subject

  public constructor(
    @inject(SERVICE_IDENTIFIER_VALUE.STUDENT_SUBJECT) subject: Subject
  ) {
    this.name = 'Sample 2'
    this.score = '100'
    this.subject = subject
  }
}
