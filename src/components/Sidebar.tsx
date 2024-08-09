import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";

export function Sidebar() {
const {data} = useGetLessonsQuery()

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-2 mb-2 borde-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8"> 
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAT={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}