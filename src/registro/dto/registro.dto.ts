import { CreatePacienteDto } from "../../paciente/dto/create-paciente.dto";
import { CreateReferenciaDto } from "../../referencia/dto/create-referencia.dto";

export class RegistroCompleteDto {
    paciente: CreatePacienteDto;
    referencia: CreateReferenciaDto;
  }