package com.example.demo.products;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Adminrepo extends JpaRepository <T_admin,String>{

	T_admin findAllById(String id);

}
