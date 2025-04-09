
package com.nitc.BSS.controller;

import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.repository.BusScheduleRepository;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class StudentController {

    @Autowired
    private BusScheduleRepository busScheduleRepository;

    @GetMapping("/api/student-dashboard")
    public List<BusSchedule> getUpcomingBuses() {
        LocalTime now = LocalTime.now();  // ✅ time-only
        return busScheduleRepository.findTop5ByStartTimeAfterOrderByStartTimeAsc(now);
    }
    


}
