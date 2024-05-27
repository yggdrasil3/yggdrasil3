//package usp.requests
//
//import usp.models.Aluno
//import kotlinx.serialization.Serializable
//import java.util.*
//
//@Serializable
//class AlunoRequest(
//    val nome: String,
//    val nusp: String,
//    val emailUSP: String,
//)
//
//fun AlunoRequest.toAluno(
//    id: UUID = UUID.randomUUID(),
//): Aluno {
//    return Aluno(
//        id = id,
//        nome = nome,
//        nusp = nusp,
//        emailUSP = emailUSP,
//    )
//}