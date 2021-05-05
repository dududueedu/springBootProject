package com.drewdev.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.drewdev.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {}