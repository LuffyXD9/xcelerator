# Xlerator

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy config file:
```bash
copy config\config.example.json config\config.json
```

3. Update database credentials in `config/config.json`

4. Run migrations:
```bash
npx sequelize-cli db:migrate
```

5. Start development:
```bash
npm run dev
```

## API Endpoints

- `POST /api/users` - Create user
- `GET /api/users/:id` - Get user by ID
- `GET /api/users` - Get all users