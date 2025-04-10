package com.nitc.BSS.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nitc.BSS.dto.BusScheduleDTO;
import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.model.BusSchedule.BusStatus;
import com.nitc.BSS.repository.BusScheduleRepository;


@Service
public class BusScheduleServiceImpl implements BusScheduleService {

    private final BusScheduleRepository busScheduleRepository;

    public BusScheduleServiceImpl(BusScheduleRepository busScheduleRepository) {
        this.busScheduleRepository = busScheduleRepository;
    }

    @Override
    public List<BusScheduleDTO> getUpcomingBuses() {
        List<BusSchedule> notStartedBuses = busScheduleRepository.findTop5ByStatusOrderByIdAsc(BusSchedule.BusStatus.NOT_STARTED);

        return notStartedBuses.stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    

    @Override
    public List<BusScheduleDTO> getRunningBuses() {
        return busScheduleRepository
            .findByStatus(BusStatus.STARTED)
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    @Override
    public BusScheduleDTO getBusById(Long id) {
        return busScheduleRepository.findById(id)
            .map(this::convertToDTO)
            .orElseThrow(() -> new RuntimeException("Bus not found with id: " + id));
    }

    @Override
    public List<BusScheduleDTO> getBusesByRoute(String departure, String arrival) {
        return busScheduleRepository
            .findByDepartureLocationAndArrivalLocation(departure, arrival)
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

public List<BusScheduleDTO> getBusHistory(String busName) {
    List<BusSchedule> buses;

    if (busName != null) {
        buses = busScheduleRepository.findByBusNameAndStatus(busName, BusStatus.COMPLETED);
    } else {
        buses = busScheduleRepository.findByStatus(BusStatus.COMPLETED);
    }

    return buses.stream()
        .map(this::convertToDTO)
        .collect(Collectors.toList());
}


@Override
public BusScheduleDTO convertToDTO(BusSchedule bus) {
    BusScheduleDTO dto = new BusScheduleDTO();
    dto.setId(bus.getId());
    dto.setBusName(bus.getBusName());
    dto.setDepartureLocation(bus.getDepartureLocation());
    dto.setArrivalLocation(bus.getArrivalLocation());
    dto.setStartTime(bus.getStartTime().toString());
    dto.setEndTime(bus.getEndTime().toString());
    dto.setStatus(bus.getStatus().name());
    dto.setDriverId(bus.getDriverId()); // 🔥 NEW
    return dto;
}

@Override
public List<BusScheduleDTO> getAllSchedules() {
    List<BusSchedule> schedules = busScheduleRepository.findAll();
    return schedules.stream()
        .map(this::convertToDTO)
        .collect(Collectors.toList());
}




}