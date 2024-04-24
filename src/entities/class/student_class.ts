import { inject, injectable, named } from 'inversify'
import { Student, Class } from '../../interfaces'
import SERVICE_IDENTIFIER_VALUE from '../../constants/identifier'
import TAGS from '../../constants/tag'

@injectable()
export class StudentScore implements Class {
  @inject(SERVICE_IDENTIFIER_VALUE.STUDENT_NAME)
  @named(TAGS.ABROAD)
  public student1: Student
  @inject(SERVICE_IDENTIFIER_VALUE.STUDENT_NAME)
  @named(TAGS.NATIVE)
  public student2: Student

  public score() {
    let value = `SCORE 
        ${this.student1.score} (${this.student1.name})
        vs 
        ${this.student2.score} (${this.student2.name})`
    return value
  }
}
