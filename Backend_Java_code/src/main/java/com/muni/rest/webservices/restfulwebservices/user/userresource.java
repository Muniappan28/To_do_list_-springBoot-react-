package com.muni.rest.webservices.restfulwebservices.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
public class userresource {
	
	@Autowired
	private userdaoservice service;
	
	@GetMapping("/users")
	public List<user> retrieveallusers(){
		return service.findAll();
	}
	
	@GetMapping("/users/{id}")
	public user retrievespecific(@PathVariable int id){
		user u= service.findOne(id);
		if(u==null) {
			throw new UserNotFoundException("id: "+id);
		}
		return u;
		
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteuser(@PathVariable int id){
		 service.deleteById(id);
	}
	
	@PostMapping("/users")
	public void createuser(@Valid @RequestBody user user) {
		service.save(user);
	}
}
