package com.project.management.task.service;

import com.project.management.task.entity.Task;
import com.project.management.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;


    public Task addTask(Task task) {
        return taskRepository.save(task);

    }

    public List<Task> getTask() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).get();
    }

    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }

    public Task updateTask(Long id, Task newtask) {
        Task task = taskRepository.findById(id).get();

        task.setTaskName(newtask.getTaskName());
        task.setTaskDetails(newtask.getTaskDetails());

        return taskRepository.save(task);

    }

}
