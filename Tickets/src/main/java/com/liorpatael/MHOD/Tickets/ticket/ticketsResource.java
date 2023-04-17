package com.liorpatael.MHOD.Tickets.ticket;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ticketsResource {
	
	@Autowired
	private TicketsHardCodedService ticketService;
	
	@GetMapping("/sell-ticket/{username}")
	public List<Ticket> getAllTickets(@PathVariable String username){
		return ticketService.getTickets();
	}  
	@GetMapping("/sell-ticket/{username}/{name}")
	public Ticket getTticket(@PathVariable String name,@PathVariable String username){
		return ticketService.findByName(name);
	}
	 
	@PostMapping("/sell-ticket")
	public ResponseEntity<Ticket> newTicketForSell(@RequestBody Ticket ticket){
		ticketService.addTicket(ticket);   
		Ticket tic = new Ticket(ticket.getName(),ticket.getDescription(),ticket.getdate(),ticket.getPrice());
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("").buildAndExpand(ticket.getName()).toUri();
//		return ResponseEntity.created(uri).build();
		return ResponseEntity.status(HttpStatus.CREATED).body(tic);
	}

}
