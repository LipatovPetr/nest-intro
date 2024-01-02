import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [TestModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
