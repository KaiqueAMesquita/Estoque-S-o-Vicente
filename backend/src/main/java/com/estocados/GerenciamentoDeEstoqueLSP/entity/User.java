package com.estocados.GerenciamentoDeEstoqueLSP.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table( name= "User" )
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "us_id")
    private Long id;


    @Column(name = "us_name", length = 50, nullable = false)
    private String name;

    @Column(name = "us_password",length = 15, nullable = false)
    private String password;

    @Column(name = "us_role", nullable = false)
    private Integer role;

}
