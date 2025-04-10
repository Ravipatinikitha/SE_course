package com.nitc.BSS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.service.DriverService;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @GetMapping("/info/{driverId}")
    public ResponseEntity<?> getDriverInfo(@PathVariable String driverId) {
        return driverService.getDriverInfo(driverId);
    }
}
