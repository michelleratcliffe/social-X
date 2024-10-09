const dbConnecitonString = process.env.DB_URL;

export const db = new pg.Pool({
connectionString: dbConnectionString,
})