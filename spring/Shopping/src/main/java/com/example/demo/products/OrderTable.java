package com.example.demo.products;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ordertable")
public class OrderTable {
	@Id
	String id;
	String name;
	String description;
	String cost;
	String uname;
	String address;
	String phone;
	String mode;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public OrderTable(String id, String name, String description, String cost, String uname, String address,
			String phone, String mode) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.cost = cost;
		this.uname = uname;
		this.address = address;
		this.phone = phone;
		this.mode = mode;
	}
	public OrderTable() {
	
	}

	

}
