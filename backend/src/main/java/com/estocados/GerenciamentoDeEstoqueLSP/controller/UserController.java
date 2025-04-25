package com.estocados.GerenciamentoDeEstoqueLSP.controller;


import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserCreateDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserCreateDTO dto){
        return ResponseEntity.ok(userService.createUser(dto));
    }

}
