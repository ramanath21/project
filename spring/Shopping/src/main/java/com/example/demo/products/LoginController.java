package com.example.demo.products;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")


@RestController
@RequestMapping("/api")


public class LoginController {
	
		@Autowired
		LoginRepository repository;
	    @PostMapping("/login")
		public void saveLogin(@RequestBody Login ee)
		{
		repository.save(ee);
		}
		@PostMapping("/log")
		public ResponseEntity<?> loginUser(@RequestBody Login data){
			Login user=repository.findAllById(data.getId());
		
			if((user.getPassword().equals(data.getPassword())) && (user.getId().equals(data.getId())));
				 return ResponseEntity.ok(user);
				 
		
			
		}

	}


