import { CatRequestDto } from './dto/cats.request.dto';
import { Cat } from './cats.schema';
import { Model, Types } from 'mongoose';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    existsEmail(email: string): Promise<boolean>;
    create(cat: CatRequestDto): Promise<Cat>;
    findCatByEmail(email: string): Promise<Cat | null>;
    findCatByIdWithoutPW(id: string | Types.ObjectId): Promise<Cat | null>;
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    findAll(): Promise<Cat[]>;
}
