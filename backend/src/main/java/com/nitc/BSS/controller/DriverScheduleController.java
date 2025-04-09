package com.nitc.BSS.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.repository.BusScheduleRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class DriverScheduleController {

    @Autowired
    private BusScheduleRepository scheduleRepo;

    @GetMapping("/driver-schedule")
    public ResponseEntity<List<BusSchedule>> getDriverSchedule(Principal principal) {
        String driverId = principal.getName();
        List<BusSchedule> schedules = scheduleRepo.findByDriverId(driverId);
        return ResponseEntity.ok(schedules);
    }
}
