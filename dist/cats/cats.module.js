"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = void 0;
const config_1 = require("@nestjs/config");
const comments_schema_1 = require("./../comments/comments.schema");
const auth_module_1 = require("./../auth/auth.module");
const cats_schema_1 = require("./cats.schema");
const mongoose_1 = require("@nestjs/mongoose");
const cats_service_1 = require("./services/cats.service");
const cats_controller_1 = require("./controllers/cats.controller");
const common_1 = require("@nestjs/common");
const cats_repository_1 = require("./cats.repository");
const platform_express_1 = require("@nestjs/platform-express");
const nestjs_multer_extended_1 = require("nestjs-multer-extended");
let CatsModule = class CatsModule {
};
CatsModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            platform_express_1.MulterModule.register({
                dest: './upload',
            }),
            nestjs_multer_extended_1.MulterExtendedModule.register({
                awsConfig: {
                    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
                    region: process.env.AWS_S3_REGION,
                },
                bucket: process.env.AWS_S3_BUCKET_NAME,
                basePath: 'cis',
                fileSize: 1 * 1024 * 1024,
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
                { name: cats_schema_1.Cat.name, schema: cats_schema_1.CatSchema },
            ]),
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        controllers: [cats_controller_1.CatsController],
        providers: [cats_service_1.CatsService, cats_repository_1.CatsRepository],
        exports: [cats_service_1.CatsService, cats_repository_1.CatsRepository],
    })
], CatsModule);
exports.CatsModule = CatsModule;
//# sourceMappingURL=cats.module.js.map