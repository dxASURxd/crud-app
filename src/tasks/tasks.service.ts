import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'first',
            descriptoin: 'some task',
            status: TaskStatus.PENDING
        }
    ]

    getAllTasks() {
        return this.tasks;
    }

    createTask( title:string, descriptoin:string) {
        const task = {
            id: v4(),
            title,
            descriptoin,
            status: TaskStatus.PENDING,
        } 
        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter( task => task.id !== id)
    }

    getTaskById(id: string ) : Task{
        return this.tasks.find((task) => task.id === id);
    }

    updateTask(id:string, updatedFields: any) {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map((task) => (task.id === id? newTask : task) );
        return newTask;
    }
}
