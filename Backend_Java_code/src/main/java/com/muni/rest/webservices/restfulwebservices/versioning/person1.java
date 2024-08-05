package com.muni.rest.webservices.restfulwebservices.versioning;

public class person1 {
	private String name;

	public person1(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return "person [name=" + name + "]";
	}
	

}
