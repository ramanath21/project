package com.example.demo.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class LaptopController {
	@Autowired
	LaptopRepository repository;
	
	@GetMapping("/GetLaptop") 
	public List<Laptop> getAllLaptop()
	{
		return repository.findAll();
	}
	@PostMapping("/addl")
	public void saveEmployee(@RequestBody Laptop e)
	{
	repository.save(e);
	}

}
