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
public class HeadphoneController {
	@Autowired
	HeadphoneRepository repository;
	
	@GetMapping("/GetHeadphone") 
	public List<Headphone> getAllHeadphone()
	{
		return repository.findAll();
	}
	@PostMapping("/addh")
	public void saveEmployee(@RequestBody Headphone e)
	{
	repository.save(e);
	}
}
