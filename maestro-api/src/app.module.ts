import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/event.entity';
import { EventsModule } from './events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import { SchoolModule } from './school/school.module';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// Modules are boxes with specific tools. They divide app in several pieces.

@Module({
  imports: [
    // Allows using env variables
    ConfigModule.forRoot({
      // env vars can now be accessed anywhere
      isGlobal: true,
      // envFilePath: '',
      // ignoreEnvFile: true,
      load: [ormConfig],
    }),
    // Using the TypeORM module
    /**
     * Object–relational mapping in computer science is a programming technique for converting data between type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.
     * For integrating with SQL and NoSQL databases, Nest provides the @nestjs/typeorm package. Nest uses TypeORM because it's the most mature Object Relational Mapper (ORM) available for TypeScript. Since it's written in TypeScript, it integrates well with the Nest framework.
     */
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
    }),
    EventsModule,
    SchoolModule,
    SongsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_NAME',
      useValue: 'Nest Events Backend',
    },
  ],
})
export class AppModule {}
