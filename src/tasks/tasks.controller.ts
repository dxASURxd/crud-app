import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskservice: TasksService){}

    @Get()
    getAllTasks(){
        return this.taskservice.getAllTasks();
    }

    @Post()
    createTask( @Body() newTask: CreateTaskDto ){
        return this.taskservice.createTask(newTask.title, newTask.descriptoin)
    }

    @Delete(':id')
    deleteTasks(@Param('id') id: string)
    {
        this.taskservice.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto){
        return this.taskservice.updateTask(id, updateFields)
    }

}