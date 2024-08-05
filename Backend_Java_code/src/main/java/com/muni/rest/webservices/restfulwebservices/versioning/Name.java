package com.muni.rest.webservices.restfulwebservices.versioning;

public class Name {
	
	private String firstname;
	private String secondname;
	public Name(String firstname, String secondname) {
		super();
		this.firstname = firstname;
		this.secondname = secondname;
	}
	public String getFirstname() {
		return firstname;
	}
	public String getSecondname() {
		return secondname;
	}
	@Override
	public String toString() {
		return "Name [firstname=" + firstname + ", secondname=" + secondname + "]";
	}
	
	

}
