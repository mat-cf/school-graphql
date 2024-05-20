// Service, input, type, etc

import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./student.input";

@Resolver(_of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) {}

  @Mutation(_returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }


}
