//package usp.service
//
//import kotlinx.coroutines.Dispatchers
//import org.jetbrains.exposed.sql.*
//import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
//import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
//import org.jetbrains.exposed.sql.transactions.transaction
//import usp.service.AlunoService.Aluno
//import java.util.*
//
//class AlunoService (database: Database) {
//    private object Aluno : Table() {
//        val id = uuid("id")
//        val nome = varchar("nome", 50)
//        val nusp = varchar("nusp", 10)
//        val emailUSP = varchar("email_usp", 100)
//
//        override val primaryKey = PrimaryKey(id)
//    }
//
//    init {
//        transaction(database) {
//            SchemaUtils.create(Aluno)
//        }
//    }
//
//    private suspend fun <T> dbQuery(block: suspend() -> T): T =
//        newSuspendedTransaction (Dispatchers.IO) { block() }
//
//    suspend fun findAll(): List<Aluno> = dbQuery {
//        Alunos.selectAll()
//            .map { row -> row.toAluno() }
//    }
//
//    suspend fun findById(id: UUID): Aluno? {
//        return dbQuery {
//            Alunos.select { Aluno.id eq id }
//                .map { row -> row.toAluno() }
//                .singleOrNull()
//        }
//    }
//
//    suspend fun save(aluno: Aluno): Aluno = dbQuery {
//        Alunos.insertIgnore {
//            it[id] = aluno.id
//            it[nome] = aluno.nome
//            it[nusp] = aluno.nusp
//            it[emailUSP] = aluno.emailUSP
//        }.let {
//            Aluno(
//                id = it[Alunos.id],
//                nome = it[Alunos.nome],
//                nusp = it[Alunos.nusp],
//                emailUSP = it[Alunos.emailUSP],
//            )
//        }
//    }
//
//    suspend fun delete(id: UUID) {
//        dbQuery {
//            Alunos.deleteWhere { Alunos.id.eq(id) }
//        }
//    }
//
//    private fun ResultRow.toAluno() = Aluno(
//        id = this[Alunos.id],
//        nome = this[Aluno.nome],
//        nusp = this[Aluno.nusp],
//        emailUSP = this[Aluno.emailUSP],
//    )
//}