package com.liorpatael.MHOD.Tickets.ticket;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Ticket {
	@Id
	@GeneratedValue
	private String name;
	
	private String description;
	private Date date; 
	private int price;
	
	private String username;
	protected Ticket() {}
	
	public Ticket(String name,String description, Date date, int price) {
		this.name=name;
		this.description=description;
		this.date=date;
		this.price=price;
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

	public Date getdate() {
		return date;
	}

	public void setdate(Date date) { 
		this.date = date;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
	
//	insert into ticket(name, description, current_date,price)
//	values('Lior', 'מוכר כרטיס נגד הצהבת', sysdate(),200);
//	insert into ticket(name, description, date,price)
//	values('David', 'מוכר כרטיס נגד הפועל חיפה', sysdate(),200);
//	insert into ticket(name, description, date,price)
//	values('Dudi', 'מוכר כרטיס נגד מכבי נתניה', sysdate(),70);
}
