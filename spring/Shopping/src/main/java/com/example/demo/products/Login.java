package com.example.demo.products;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="login")
public class Login {
	
		String name;
	    @Id
		String id;
		String password;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Login(String name, String id, String password) {
			super();
			this.name = name;
			this.id = id;
			this.password = password;
		}
	public Login() {
	
	}
		
}
