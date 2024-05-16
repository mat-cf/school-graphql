import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(_of => LessonType)
export class LessonResolver {

  @Query(_returns => LessonType)
  Lesson() {
    return {
      id: 'aodawoj2',
      name: 'Physics class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    };
  }
}
