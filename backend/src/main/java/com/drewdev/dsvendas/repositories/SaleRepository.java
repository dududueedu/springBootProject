package com.drewdev.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.drewdev.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {}