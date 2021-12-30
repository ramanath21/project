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
public class OrderTableController {
	
	@Autowired
	OrderTableRepository repository;
	
	
	@GetMapping("/getod") 
	public List<OrderTable> getAllHeadphone()
	{
		return repository.findAll();
	}
	@PostMapping("/addo")
	public void saveEmployee(@RequestBody OrderTable e)
	{
	repository.save(e);
	}

}
