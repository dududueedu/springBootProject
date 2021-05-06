package com.drewdev.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drewdev.dsvendas.dto.SaleDTO;
import com.drewdev.dsvendas.service.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleControler {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> page = service.findAll(pageable);
		return ResponseEntity.ok(page);
	}	
}