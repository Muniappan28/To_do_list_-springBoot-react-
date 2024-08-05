package com.muni.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins="http://localhost:3000",allowCredentials="true")
@RestController

public class helloworldcontroller {
	
	//@RequestMapping(method=RequestMethod.GET,path="helloworld")
	
	@GetMapping(path="/basicauth")
	public String basicAuthCheck() {
		return "Success";
	}
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World mmuniappan"; 
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello Worhld sss bean 1"); 
	}
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name)); 
	}	

}
