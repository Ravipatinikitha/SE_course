package com.nitc.BSS.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.model.User;
import com.nitc.BSS.repository.BusScheduleRepository;
import com.nitc.BSS.repository.UserRepository;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class DriverController {

    private final BusScheduleRepository busScheduleRepository;
    private final UserRepository userRepository;

    public DriverController(BusScheduleRepository busScheduleRepository, UserRepository userRepository) {
        this.busScheduleRepository = busScheduleRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/info/{driverId}")
    public ResponseEntity<?> getDriverInfo(@PathVariable String driverId) {
        Optional<BusSchedule> scheduleOpt = busScheduleRepository.findFirstByDriverId(driverId);
        Optional<User> userOpt = userRepository.findById(driverId);

        if (scheduleOpt.isEmpty() || userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Driver data not found");
        }

        Map<String, String> response = new HashMap<>();
        response.put("driverName", userOpt.get().getName());
        response.put("assignedBus", scheduleOpt.get().getBusName());

        return ResponseEntity.ok(response);
    }
}
