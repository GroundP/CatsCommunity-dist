"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const user_decorator_1 = require("../../common/decorators/user.decorator");
const jwt_guard_1 = require("../../auth/jwt/jwt.guard");
const login_request_dto_1 = require("../../auth/dto/login.request.dto");
const auth_service_1 = require("../../auth/auth.service");
const cats_dto_1 = require("../dto/cats.dto");
const cats_request_dto_1 = require("../dto/cats.request.dto");
const success_interceptor_1 = require("../../common/interceptors/success.interceptor");
const cats_service_1 = require("../services/cats.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cats_schema_1 = require("../cats.schema");
const nestjs_multer_extended_1 = require("nestjs-multer-extended");
let CatsController = class CatsController {
    constructor(catsService, authService) {
        this.catsService = catsService;
        this.authService = authService;
    }
    getCurrentCat(cat) {
        return cat.readOnlyData;
    }
    async signUp(body) {
        console.log(body);
        return await this.catsService.signUp(body);
    }
    logIn(data) {
        return this.authService.jwtLogin(data);
    }
    uploadCatImg(files, cat) {
        console.log(files);
    }
    getAllCat() {
        return this.catsService.getAllCat();
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: '현재 고양이 가져오기' }),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_schema_1.Cat]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getCurrentCat", null);
__decorate([
    swagger_1.ApiResponse({
        status: 500,
        description: 'Server Error...',
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: '성공!',
        type: cats_dto_1.ReadOnlyCatDto,
    }),
    swagger_1.ApiOperation({ summary: '회원가입' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_request_dto_1.CatRequestDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "signUp", null);
__decorate([
    swagger_1.ApiOperation({ summary: '로그인' }),
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "logIn", null);
__decorate([
    swagger_1.ApiOperation({ summary: '업로드' }),
    common_1.UseInterceptors(nestjs_multer_extended_1.AmazonS3FileInterceptor('image', {
        dynamicPath: 'cats',
    })),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post('upload'),
    __param(0, common_1.UploadedFile()),
    __param(1, user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cats_schema_1.Cat]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "uploadCatImg", null);
__decorate([
    swagger_1.ApiOperation({ summary: '모든 고양이 가져오기' }),
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAllCat", null);
CatsController = __decorate([
    common_1.Controller('cats'),
    common_1.UseInterceptors(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        auth_service_1.AuthService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map