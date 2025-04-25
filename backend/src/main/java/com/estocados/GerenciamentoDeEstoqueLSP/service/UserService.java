package com.estocados.GerenciamentoDeEstoqueLSP.service;


import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserCreateDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.entity.User;
import com.estocados.GerenciamentoDeEstoqueLSP.mapper.UserMapper;
import com.estocados.GerenciamentoDeEstoqueLSP.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserMapper mapper;

    public UserDTO createUser(UserCreateDTO dto){
        User user = mapper.toEntity(dto);
        return mapper.toDTO(repository.save(user));
    }

//    public User createUser(User user){
//        return repository.save(user);
//    }

}
