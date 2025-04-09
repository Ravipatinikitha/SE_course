package com.nitc.BSS.service;

import java.util.List;

import com.nitc.BSS.dto.BusScheduleDTO;
import com.nitc.BSS.model.BusSchedule;


public interface BusScheduleService {
    List<BusScheduleDTO> getUpcomingBuses();
    List<BusScheduleDTO> getRunningBuses();
    BusScheduleDTO getBusById(Long id);
    List<BusScheduleDTO> getBusesByRoute(String departure, String arrival);
    List<BusScheduleDTO> getBusHistory(String busName);
    BusScheduleDTO convertToDTO(BusSchedule bus);
}