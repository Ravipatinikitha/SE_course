package com.nitc.BSS.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.model.User;
import com.nitc.BSS.repository.BusScheduleRepository;
import com.nitc.BSS.repository.UserRepository;

@Service
public class DriverService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BusScheduleRepository busScheduleRepository;

    public ResponseEntity<?> getDriverInfo(String driverId) {
        User user = userRepository.findById(driverId).orElse(null);
        if (user == null || !user.getRole().equals("ROLE_DRIVER")) {
            return ResponseEntity.status(404).body(Map.of("error", "Driver not found"));
        }

        BusSchedule schedule = busScheduleRepository.findTopByDriverIdAndStatusNotOrderByStartTimeAsc(
                driverId,
                BusSchedule.BusStatus.COMPLETED
        );

        String assignedBus = (schedule != null) ? schedule.getBusName() : "Not Assigned";

        return ResponseEntity.ok(Map.of(
                "driverName", user.getName(),
                "assignedBus", assignedBus
        ));
    }
}
