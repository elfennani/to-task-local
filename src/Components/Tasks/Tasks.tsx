import { TaskData } from "../../types";
import Section from "../Section";
import TaskItem from "./TaskItem";
import styles from "./Tasks.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import TasksContext from "../../contexts/TasksContext";

type Props = {};

const Tasks = (props: Props) => {
    const tasks = useContext(TasksContext);
    return (
        <Section
            title="My Tasks"
            sectionClassName={styles.taskContainer}
            className={styles.innerContainer}
            subtitle={`${tasks.filter((t) => t.done).length}/${
                tasks.length
            } done`}
            isList
        >
            {tasks
                .sort((a, b) => b.dateAdded - a.dateAdded)
                .sort((a, b) => {
                    if (a.done && !b.done) return 1;
                    if (!a.done && b.done) return -1;
                    return 0;
                })
                .map((task) => (
                    <TaskItem task={task} key={task.id} />
                ))}
        </Section>
    );
};

export default Tasks;
