package com.project.management.task.controller;


import com.project.management.task.entity.Task;
import com.project.management.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/addtask")
    public Task addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @GetMapping("/gettask")
    public List<Task> getTask(){
        return taskService.getTask();
    }

    @GetMapping("/gettask/{id}")
    public Task getTaskById(@PathVariable Long id){
        return taskService.getTaskById(id);
    }

    @DeleteMapping("/deletetask/{id}")
    String deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
        return "Task Deleted Successfully!!";
    }

    @PutMapping("/updatetask/{id}")
    public Task updateTask(@PathVariable Long id , @RequestBody Task newtask){
        return taskService.updateTask(id , newtask);
    }
}
