package com.nitc.BSS.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.model.BusSchedule.BusStatus;
import com.nitc.BSS.repository.BusScheduleRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class DriverScheduleController {

    @Autowired
    private BusScheduleRepository scheduleRepo;
    @GetMapping("/driver-schedule/{driverId}")
    public ResponseEntity<List<BusSchedule>> getDriverSchedule(@PathVariable String driverId) {
        List<BusSchedule> schedules = scheduleRepo.findByDriverId(driverId);
        return ResponseEntity.ok(schedules);
    }
    


    
    @PutMapping("/driver-schedule/update-status/{id}")
public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) {
    Optional<BusSchedule> optionalSchedule = scheduleRepo.findById(id);
    if (optionalSchedule.isPresent()) {
        BusSchedule schedule = optionalSchedule.get();
        schedule.setStatus(BusStatus.valueOf(status.toUpperCase()));
        scheduleRepo.save(schedule);
        return ResponseEntity.ok("Status updated");
    }
    return ResponseEntity.status(404).body("Schedule not found");
}

}
