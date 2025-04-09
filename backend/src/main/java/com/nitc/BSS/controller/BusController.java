package com.nitc.BSS.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.dto.BusScheduleDTO;
import com.nitc.BSS.service.BusScheduleService;

@RestController
@RequestMapping("/api/buses")
public class BusController {
    
    private final BusScheduleService busScheduleService;
    
    public BusController(BusScheduleService busScheduleService) {
        this.busScheduleService = busScheduleService;
    }
    
    @GetMapping("/upcoming")
    public List<BusScheduleDTO> getUpcomingBuses() {
        return busScheduleService.getUpcomingBuses();
    }

    @GetMapping("/running")
    public List<BusScheduleDTO> getRunningBuses() {
        return busScheduleService.getRunningBuses();
    }

    @GetMapping("/{id}")
    public BusScheduleDTO getBusById(@PathVariable Long id) {
        return busScheduleService.getBusById(id);
    }

    @GetMapping("/route")
    public List<BusScheduleDTO> getBusesByRoute(
            @RequestParam String departure,
            @RequestParam String arrival) {
        return busScheduleService.getBusesByRoute(departure, arrival);
    }

    // ✅ Removed LocalDate filter
    @GetMapping("/history")
    public List<BusScheduleDTO> getBusHistory(
            @RequestParam(required = false) String busName) {
        return busScheduleService.getBusHistory(busName);
    }
}
