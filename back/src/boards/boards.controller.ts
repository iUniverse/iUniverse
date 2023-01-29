import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { pipe } from 'rxjs/internal/util/pipe';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';


@Controller('boards')
export class BoardsController {
    //boardsService : BoardsService;
    constructor(private boardService : BoardsService){}

    @Get()
    getAllBoards() : Promise<Board[]> {
        return this.boardService.getAllBoards()
    }

    @Get('/:id')
    getBoardById(@Param('id') id : string) : Promise<Board> {
        return this.boardService.getBoardById(Number(id))
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto : CreateBoardDto) : Promise<Board> {
        return this.boardService.createBoard(createBoardDto)
    }


    @Delete(':/id')
    deleteBoard(@Param('id', ParseIntPipe) id : number) : Promise<void> {
        return this.boardService.deleteBoard(id);
    }

 

}
