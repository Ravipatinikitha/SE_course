package com.nitc.BSS.dto;

import com.nitc.BSS.model.BusSchedule.BusStatus;

import lombok.Data;

@Data
public class StatusUpdateDTO {
    private BusStatus status;
}
