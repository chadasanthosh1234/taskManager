package com.cts.taskManager.serviceImpl;

import java.util.Date;
import java.util.List;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.cts.taskManager.repositories.TaskRepository;
import com.cts.taskManager.util.Task;

@Repository
public class TaskServiceImpl implements TaskRepository {

    @Autowired
    private MongoTemplate mongoTemplate;
    
    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    
    @Override
    public Task findById(String Id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(Id));
        return mongoTemplate.findOne(query, Task.class);
    }
    
    
    @Override
    public Task addTask(Task task) {
        return mongoTemplate.save(task);
    }

    @Override
    public List<Task> findAllTasks() {
        return mongoTemplate.findAll(Task.class);
    }


    @Override
    public List<Task> searchTask(Task task) {

        Query query = new Query();
        
        if(task.getName()!= null && !task.getName().isEmpty()){
            query.addCriteria(Criteria.where("name").is(task.getName()));
        }
        
        if(task.getParentTaskName() != null && !task.getParentTaskName().isEmpty()) {
            Task parentTask = findByTaskName(task.getParentTaskName());
            query.addCriteria(Criteria.where("parentTaskId").is(parentTask.getId()));
        }
        
        if(task.getPriorityFrom() != null && task.getPriorityTo() != null) {
            query.addCriteria(Criteria.where("priority").gt(task.getPriorityFrom())
                         .orOperator(Criteria.where("priority").lt(task.getPriorityTo())));
        }

        if(task.getStartDate() != null) {
             Date startDatePreviousDate = getFormattedDate(task.getStartDate(),-1);
             Date startDateNextDate = getFormattedDate(task.getStartDate(),+1);
                    query.addCriteria(Criteria.where("startDate").gt(startDatePreviousDate)
                                 .andOperator(Criteria.where("startDate").lt(startDateNextDate)));
        }
        if(task.getEndDate() != null) {
             Date endDatePreviousDate = getFormattedDate(task.getEndDate(),-1);
             Date endDateNextDate = getFormattedDate(task.getEndDate(),+1);
                    query.addCriteria(Criteria.where("endDate").gt(endDatePreviousDate)
                                 .andOperator(Criteria.where("endDate").lt(endDateNextDate)));
        }
      
        
        return mongoTemplate.find(query, Task.class);
    }


    private Date getFormattedDate(Date inputDate, int i) {
        Date formattedInputDate = null;
        try {
            String inputDateStringFormat = dateFormat.format(inputDate);
            Date formattedDate = dateFormat.parse(inputDateStringFormat);
            Calendar cal = Calendar.getInstance();
            cal.setTime(formattedDate);
            cal.add(Calendar.DATE, i);
            String formattedDateString = dateFormat.format(cal.getTime());
            formattedInputDate = dateFormat.parse(formattedDateString);
        }
        catch(Exception e) {
            
        }
        return formattedInputDate;
    }


    private Task findByTaskName(String name) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is(name));
        return mongoTemplate.findOne(query, Task.class);
        
    }

}
