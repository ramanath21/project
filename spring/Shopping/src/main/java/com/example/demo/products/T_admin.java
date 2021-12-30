package com.example.demo.products;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_admin")
public class T_admin {
	@Id
 String id;
 String aname;
 String pswd;
 String eml;
 
 
 public T_admin(String id, String aname, String pswd, String eml) {
	super();
	this.id = id;
	this.aname = aname;
	this.pswd = pswd;
	this.eml = eml;
}


public String getId() {
	return id;
}


public void setId(String id) {
	this.id = id;
}


public String getAname() {
	return aname;
}


public void setAname(String aname) {
	this.aname = aname;
}


public String getPswd() {
	return pswd;
}


public void setPswd(String pswd) {
	this.pswd = pswd;
}


public String getEml() {
	return eml;
}


public void setEml(String eml) {
	this.eml = eml;
}


public T_admin() {
	 
 }
 
 
 
 
}
