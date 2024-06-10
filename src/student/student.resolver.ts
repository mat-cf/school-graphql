import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./student.input";

@Resolver(_of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService
  ) {}
 
  @Query(_returns => StudentType)
  student(
    @Args('id') id: string
  ) {
    return this.studentService.getStudent(id);
  }

  @Query(_returns => [StudentType])
  allStudents() {
    return this.studentService.getAllStudents();
  }

  @Mutation(_returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

}
