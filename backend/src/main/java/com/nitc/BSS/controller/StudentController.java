
package com.nitc.BSS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.dto.BusScheduleDTO;
import com.nitc.BSS.repository.BusScheduleRepository;
import com.nitc.BSS.service.BusScheduleService;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private BusScheduleRepository busScheduleRepository;

    @Autowired
    private BusScheduleService busScheduleService; // ✅ ADD THIS

    @GetMapping("/api/student-dashboard")
    public ResponseEntity<List<BusScheduleDTO>> getUpcomingBuses() {
        return ResponseEntity.ok(busScheduleService.getUpcomingBuses());
    }

    @CrossOrigin(origins = "http://localhost:3000")

    
    @GetMapping("/api/bus-schedule")
public ResponseEntity<List<BusScheduleDTO>> getAllSchedules() {
    List<BusScheduleDTO> schedules = busScheduleService.getAllSchedules();
    return ResponseEntity.ok(schedules);
}



}
