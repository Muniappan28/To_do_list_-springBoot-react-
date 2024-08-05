package com.muni.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.muni.rest.webservices.restfulwebservices.todo.Todo;
@RestController
public class TodoResource {
	
	private TodoService todoservice;
	public TodoResource(TodoService todoservice) {
		this.todoservice=todoservice;
	}

	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username) {
		return todoservice.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrieveTodo(@PathVariable String username,@PathVariable int id) {
		return todoservice.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username,@PathVariable int id,@RequestBody Todo todo ) {
		todoservice.updateTodo(todo);
		return todo;
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable int id) {
		 todoservice.deleteById(id);
		 System.out.println("ji ");
		 return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/users/{username}/todos")
	public Todo createTodo(@PathVariable String username,@RequestBody Todo todo) {
		Todo createdtodo=todoservice.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		return createdtodo;
	}
	
}
