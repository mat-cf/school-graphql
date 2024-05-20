import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";

@Resolver(_of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}
  @Query(_returns => LessonType)
  Lesson() {
    return {
      id: 'aodawoj2',
      name: 'Physics class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    };
  }

  @Mutation(_returns => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }

}


