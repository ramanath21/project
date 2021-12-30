package com.example.demo.products;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")

public class Admincontroller {
@Autowired
private Adminrepo repo;

@PostMapping("/logg")
public ResponseEntity<?> loginUser(@RequestBody T_admin data){
	T_admin user=repo.findAllById(data.getId());
	if(user.getPswd().equals(data.getPswd()));
		return ResponseEntity.ok(user);
	
	
}






}
