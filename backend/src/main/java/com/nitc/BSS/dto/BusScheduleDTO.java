package com.nitc.BSS.dto;

public class BusScheduleDTO {
    private Long id;
    private String driverId;
    private String busName;
    private String departureLocation;
    private String arrivalLocation;
    private String startTime;
    private String endTime;
    private String status;
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    public String getDriverId() {
        return driverId;
    }
    
    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }
    public String getBusName() {
        return busName;
    }
    
    public void setBusName(String busName) {
        this.busName = busName;
    }
    
    public String getDepartureLocation() {
        return departureLocation;
    }
    
    public void setDepartureLocation(String departureLocation) {
        this.departureLocation = departureLocation;
    }
    
    public String getArrivalLocation() {
        return arrivalLocation;
    }
    
    public void setArrivalLocation(String arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }
    
    public String getStartTime() {
        return startTime;
    }
    
    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
    
    public String getEndTime() {
        return endTime;
    }
    
    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
}