import { CustomRepository } from 'src/typeorm-ex.decorator'
import { Repository } from 'typeorm'
import { Board } from './board.entity'
import { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

//@EntityRepository(Board) --> typeORM 0.3 부터 없어짐
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
    async createBoard(createBoardDto : CreateBoardDto) : Promise<Board> {
        const {title, description} = createBoardDto;
        const board = this.create({
            title,
            description,
            status : BoardStatus.PUBLIC
        })

        await this.save(board); // db에 만들어진 객체를 저장
        return board
    }
}