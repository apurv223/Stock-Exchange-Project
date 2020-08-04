package com.example.stock.exchange.companydataservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.sql.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class StockPriceDTO {

    private int companyCode;
    private double price;
    private String stockExchange;
    private Date date;
}
