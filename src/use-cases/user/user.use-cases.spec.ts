import { Test, TestingModule } from '@nestjs/testing';
import { UserUseCases } from './user.use-case';
import { CreateUserDto, IDataServices, UpdateUserDto, User } from 'src/core';
import { UserFactoryService } from './user.factory.service';

describe('UserUseCases', () => {
  describe('Test jest', () => {
    it('should return true', async () => {
      expect(true).toEqual(true);
    });
  });

  describe('UserUseCases', () => {
    let service: UserUseCases;
    let mockDataServices: Partial<IDataServices>;
    let mockUserFactoryService: UserFactoryService;

    beforeEach(async () => {
      mockDataServices = {
        users: {
          getAll: jest.fn().mockResolvedValue([
            {
              firstname: 'JoseTest',
              lastname: 'CamachoTest',
              username: 'sircokoTest',
              email: 'sircokotest@gmail.com',
              password: '123456',
            },
          ]),
          get: jest.fn().mockResolvedValue({}),
          create: jest.fn().mockResolvedValue({}),
          update: jest.fn().mockResolvedValue({}),
          delete: jest.fn().mockResolvedValue({}),
        },
      };
      mockUserFactoryService = {
        createNewUser: jest
          .fn()
          .mockImplementation((createUserDto: CreateUserDto) => {
            const newUser = new User();
            newUser.email = createUserDto.email;
            newUser.firstname = createUserDto.firstname;
            newUser.lastname = createUserDto.lastname;
            newUser.password = createUserDto.password;
            newUser.username = createUserDto.username;
            return newUser;
          }),
        updateUser: jest
          .fn()
          .mockImplementation((updateUserDto: UpdateUserDto) => {
            const newUser = new User();
            newUser.email = updateUserDto.email;
            newUser.firstname = updateUserDto.firstname;
            newUser.lastname = updateUserDto.lastname;
            return newUser;
          }),
      };

      const module: TestingModule = await Test.createTestingModule({
        providers: [
          UserUseCases,
          { provide: IDataServices, useValue: mockDataServices },
          { provide: UserFactoryService, useValue: mockUserFactoryService },
        ],
      }).compile();

      service = module.get<UserUseCases>(UserUseCases);
    });

    it('can create an instance of userUseCases', async () => {
      expect(service).toBeDefined;
    });

    it('should get all users', async () => {
      const result = await service.getAllUsers();
      jest
        .spyOn(mockDataServices.users, 'getAll')
        .mockImplementation(() => Promise.resolve(result));
      expect(await service.getAllUsers()).toEqual([
        {
          firstname: 'JoseTest',
          lastname: 'CamachoTest',
          username: 'sircokoTest',
          email: 'sircokotest@gmail.com',
          password: '123456',
        },
      ]);
    });
  });
});
