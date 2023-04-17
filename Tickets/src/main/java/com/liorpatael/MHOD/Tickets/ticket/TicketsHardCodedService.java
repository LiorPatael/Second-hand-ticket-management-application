package com.liorpatael.MHOD.Tickets.ticket;

import java.io.Console;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TicketsHardCodedService {
	private static ArrayList<Ticket> tickets = new ArrayList<>();
	
	
	static {
		tickets.add(new Ticket("Lior","מוכר כרטיס למשחק נגד מכבי תל אביב",new Date(),90));
		tickets.add(new Ticket("David","מוכר כרטיס למשחק נגד מכבי נתניה",new Date(),120));
		tickets.add(new Ticket("Dudi","מוכר כרטיס למשחק נגד הפועל באר שבע",new Date(),300));
	}
	public List<Ticket> getTickets() {
		return this.tickets;
	}
	public Ticket findByName(String name) {
		for(Ticket ticket: tickets) {
			if(ticket.getName()==name) {
				
				return ticket;
			}
		}
		return null;
	}
	public void addTicket(Ticket ticket) {
		tickets.add(ticket);
	}
}
