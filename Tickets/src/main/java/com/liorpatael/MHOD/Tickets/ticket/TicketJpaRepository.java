package com.liorpatael.MHOD.Tickets.ticket;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketJpaRepository extends JpaRepository<Ticket, String> {
	List<Ticket> findByUsername(String username);
}
