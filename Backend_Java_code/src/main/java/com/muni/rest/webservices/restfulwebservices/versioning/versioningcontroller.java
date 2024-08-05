package com.muni.rest.webservices.restfulwebservices.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class versioningcontroller {
	
	@GetMapping("/v1/person")
	public person1 getfirstversion() {
		return new person1(" muni selvam");
	}
	
	@GetMapping("/v2/person")
	public person2 getsecondversion() {
		System.out.println("JIOIIOIII");
		return new person2(new Name("muni","selam"));
	}


}
