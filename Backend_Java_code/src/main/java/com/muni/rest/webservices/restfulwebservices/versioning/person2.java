package com.muni.rest.webservices.restfulwebservices.versioning;

public class person2 {
	
	private Name name;

	public person2(Name name) {
		super();
		this.name = name;
	}

	public Name getName() {
		return name;
	}

	@Override
	public String toString() {
		return "person2 [name=" + name + "]";
	}

}
