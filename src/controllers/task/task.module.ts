import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/schemas/task.schema';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { MalcolmXService } from 'src/middlewares/proxies/malcolmx.proxy';

@Module({
    imports: [MongooseModule.forFeature([{ name: "Tasks", schema: TaskSchema }])],
    providers: [TaskService, TaskResolver, MalcolmXService],
})
export class TaskModule { }
