import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Task } from "./task.entity";

@CustomRepository(Task)
export class TaskRepository extends Repository<Task>{
    async LoadTask(): Promise<Array<Task>>{
        return await this.find();
    }
}