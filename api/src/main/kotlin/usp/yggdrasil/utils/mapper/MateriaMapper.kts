package package kotlin.usp.yggdrasil.utils.mapper

import kotlin.usp.yggdrasil.dto.MateriaDTO
import kotlin.usp.yggdrasil.entity.Materia

interface MateriaMapper: Mapper<MateriaDTO, Materia> {
    override fun fromEntity(entity: Materia) : MateriaDTO {
        return MovieDTO(
            entity.codigo,
            entity.nome,
            entity.tipo,
            entity.creditoAula,
            entity.creditoTrabalho,
            entity.requisitos
        )
    }

    override fun toEntity(domain: MateriaDTO): Materia {
        return Movie(
            domain.codigo,
            domain.nome,
            domain.tipo,
            domain.creditoAula,
            domain.creditoTrabalho,
            domain.requisitos
        )
    }
}