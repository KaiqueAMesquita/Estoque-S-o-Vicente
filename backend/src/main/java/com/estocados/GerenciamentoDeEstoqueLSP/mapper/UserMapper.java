package com.estocados.GerenciamentoDeEstoqueLSP.mapper;

import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserCreateDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.dto.UserDTO;
import com.estocados.GerenciamentoDeEstoqueLSP.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(UserCreateDTO dto);

    UserDTO toDTO(User user);


}
