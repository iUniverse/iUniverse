import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    //private boards : Board[] = [];
    constructor(private readonly boardRepository : BoardRepository){}

    async getAllBoards() : Promise<Board[]> { 
        return this.boardRepository.find()
    }

    async getBoardById(id : number) : Promise<Board> {
        const found = await this.boardRepository.findOne({where: {id}});
        
        //found === null
        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found; 
    }

    async createBoard(createBoardDto : CreateBoardDto) : Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto);
    }

    async deleteBoard(id : number) : Promise<void> {
        const result = await this.boardRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        console.log(result)
    }
    
    async updateBoardStatus(id : number, status : BoardStatus) : Promise<Board> {
        const board = await this.getBoardById(id);
        board.status = status;
        this.boardRepository.save(board);
        return board;
    }
}
