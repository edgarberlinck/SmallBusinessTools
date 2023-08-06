## Installation

```bash
# Install packages
npm install

npx prisma generate
```

## Local database
```bash
#create .env file with your local database credentials

# Run migration
npx prisma migrate dev

# Run db seed
npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
