package com.muni.rest.webservices.restfulwebservices.user;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class userdaoservice {
	
	private static List<user> users=new ArrayList<>();
	
	private static int count=0;
	static {
		users.add(new user(++count,"a",LocalDate.now().minusYears(30)));
		users.add(new user(++count,"b",LocalDate.now().minusYears(25)));
		users.add(new user(++count,"c",LocalDate.now().minusYears(20)));
	}
	
	public List<user> findAll(){
		return users;
	}
	
	public user findOne(int id) {
		Predicate<? super user> predicate =user->user.getId().equals(id);
		return users.stream().filter(predicate).findFirst().orElse(null);
	}
	public void deleteById(int id) {
		Predicate<? super user> predicate =user->user.getId().equals(id); 
		users.removeIf(predicate);
	}

	public user save(user user) {
		user.setId(++count);
		users.add(user);
		return user;
		
	}

}
