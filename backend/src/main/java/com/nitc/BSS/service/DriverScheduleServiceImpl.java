package com.nitc.BSS.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nitc.BSS.dto.BusScheduleDTO;
import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.repository.BusScheduleRepository;

@Service
public class DriverScheduleServiceImpl implements DriverScheduleService {

    private final BusScheduleRepository busScheduleRepository;

    public DriverScheduleServiceImpl(BusScheduleRepository busScheduleRepository) {
        this.busScheduleRepository = busScheduleRepository;
    }

    @Override
    public List<BusScheduleDTO> getDriverSchedule(String driverId) {
        return busScheduleRepository.findByDriverId(driverId).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    private BusScheduleDTO convertToDTO(BusSchedule bus) {
        BusScheduleDTO dto = new BusScheduleDTO();
        dto.setId(bus.getId());
        dto.setBusName(bus.getBusName());
        dto.setDepartureLocation(bus.getDepartureLocation());
        dto.setArrivalLocation(bus.getArrivalLocation());
        dto.setStartTime(bus.getStartTime().toString());
        dto.setEndTime(bus.getEndTime().toString());
        dto.setStatus(bus.getStatus().name());
        return dto;
    }
}