package com.nitc.BSS.service;

import java.util.List;

import com.nitc.BSS.dto.BusScheduleDTO;

public interface DriverScheduleService {
    List<BusScheduleDTO> getDriverSchedule(String driverId);
}