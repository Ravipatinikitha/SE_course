package com.nitc.BSS.repository;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nitc.BSS.model.BusSchedule;
import com.nitc.BSS.model.BusSchedule.BusStatus;

@Repository
public interface BusScheduleRepository extends JpaRepository<BusSchedule, Long> {

    List<BusSchedule> findByStatusInOrderByStartTimeAsc(List<BusStatus> statuses);
    
    List<BusSchedule> findByStatus(BusStatus status);
    
    List<BusSchedule> findByDepartureLocationAndArrivalLocation(String departure, String arrival);
    
    List<BusSchedule> findByBusNameAndStatus(String busName, BusStatus status);
    
    List<BusSchedule> findByBusNameAndStatusAndStartTimeBetween(
        String busName, 
        BusStatus status,
        LocalTime start,
        LocalTime end);
    
    List<BusSchedule> findByStatusAndStartTimeBetween(
        BusStatus status,
        LocalTime start,
        LocalTime end);
    

    List<BusSchedule> findByDriverId(String driverId);

    // ✅ New method to fetch top 5 upcoming schedules
    List<BusSchedule> findTop5ByStatusOrderByIdAsc(BusSchedule.BusStatus status);


    Optional<BusSchedule> findFirstByDriverId(String driverId);
    @Query("SELECT s FROM BusSchedule s ORDER BY " +
    "CASE WHEN s.status = 'STARTED' THEN 0 WHEN s.status = 'NOT_STARTED' THEN 1 WHEN s.status = 'COMPLETED' THEN 2 ELSE 3 END, s.startTime ASC")
List<BusSchedule> findAllOrderByStatusAndTime();




}
