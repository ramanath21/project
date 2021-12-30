package com.example.demo.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
public class CartController {
	@Autowired
	CartRepository repository;
	
	@PostMapping("/addc")
	public void saveEmployee(@RequestBody Cart e)
	{
	repository.save(e);
	}
	@GetMapping("/geto") 
	public List<Cart> getAllHeadphone()
	{
		return repository.findAll();
	}

	@PostMapping("/deleteuser/{id}")
	 public void deleteStudent( @PathVariable String id)
	 {
	 	repository.deleteById(id);
	 }

}
