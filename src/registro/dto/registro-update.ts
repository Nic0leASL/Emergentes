// src/registro/dto/registro-update.dto.ts
import { UpdatePacienteDto } from '../../paciente/dto/update-paciente.dto';
import { UpdateReferenciaDto } from '../../referencia/dto/update-referencia.dto';

export class UpdateRegistroDto {
  paciente: UpdatePacienteDto;
  referencia: UpdateReferenciaDto;
}
