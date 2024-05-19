package package kotlin.usp.yggdrasil.service

import kotlin.usp.yggdrasil.dto.MateriaDTO
import kotlin.usp.yggdrasil.dto.MateriaMapper


class MateriaServiceImpl (
    private val materiaRepository: MateriaRepository
) : MateriaService {
    override fun createMateria (MateriaDTO: MateriaDTO): MateriaDTO  {
        materiaRepository.save(materiaMapper.toEntity(materiaDTO))
    }
}