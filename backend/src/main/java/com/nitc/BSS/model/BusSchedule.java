package com.nitc.BSS.model;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "bus_schedule")
@Data
public class BusSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bus_name")
    private String busName;

    @Column(name = "departure_location")
    private String departureLocation;

    @Column(name = "arrival_location")
    private String arrivalLocation;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BusStatus status = BusStatus.NOT_STARTED;

    @Column(name = "driver_id", nullable = false)
    private String driverId;

    // Optional: If you want object mapping to User entity
    // @ManyToOne
    // @JoinColumn(name = "driver_id", referencedColumnName = "id", insertable = false, updatable = false)
    // private User driver;

    public enum BusStatus {
        NOT_STARTED, STARTED, COMPLETED

    }

}


