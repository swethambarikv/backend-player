import { inject, injectable } from 'inversify'

import SERVICE_IDENTIFIER_VALUE from '../../constants/identifier'
import { Subject, Student } from '../../interfaces'

@injectable()
export class StudentSample1 implements Student {
  public name: string
  public score: string
  public subject: Subject

  public constructor(
    @inject(SERVICE_IDENTIFIER_VALUE.STUDENT_SUBJECT) subject: Subject
  ) {
    this.name = 'Sample 1'
    this.score = '90'
    this.subject = subject
  }
}
