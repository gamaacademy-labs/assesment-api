import { Controller, Get, Post, Request ,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private authService: AuthService
    ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user
  }
}
