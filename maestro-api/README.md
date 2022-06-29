Changelog for this branch:

- Exploring database relations (one to one, etc)
# Notes

## Database Relationships

Every relationship has a principal end and a dependent end. The end with the foreign key is the dependent end.

There are kinds of relationships:

- One to One relationships (1:1)
- One to Many relationships (1:n)
- Many to Many relationships (n:n)

Three main rules:

- One to One: Two primary keys. The relationship must be between the primary keys (or candidate keys) of both the tables. That is, one of the primary key will be the foreign key as well.
- One to Many: One primary key. The relationship must be between a primary key (or candidate key) field and a non-unique field.
- Many to Many: No primary key. Both ends must be non-unique, one of them being a foreign key as well. Alternate key can be used instead of the primary key.



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
