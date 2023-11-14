import { 
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete, 
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignatureService } from './signature.service';

@ApiTags('signature')
@Controller('signature')
export class SignatureController {
    constructor(
        private readonly signatureService: SignatureService
    ) {}
}
