package com.muni.rest.webservices.restfulwebservices.exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.muni.rest.webservices.restfulwebservices.user.UserNotFoundException;

@ControllerAdvice
public class customizedresponseentityexceptionhandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex,WebRequest request) throws Exception{
		ErrorDetails error=new ErrorDetails(LocalDate.now(),ex.getMessage(),request.getDescription(false));
	  return	new ResponseEntity<ErrorDetails>(error,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public final ResponseEntity<ErrorDetails> UsernotfoundExceptions(Exception ex,WebRequest request) throws Exception{
		ErrorDetails error=new ErrorDetails(LocalDate.now(),ex.getMessage(),request.getDescription(false));
	  return	new ResponseEntity<ErrorDetails>(error,HttpStatus.NOT_FOUND);
	}
	

}
