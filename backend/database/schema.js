export const createTables = async (pool) => {
  const tables = [
    // Products table
    `CREATE TABLE IF NOT EXISTS products (
      product_id SERIAL PRIMARY KEY,
      product_name VARCHAR(100) NOT NULL,
      description TEXT,
      stock INT NOT NULL,
      category VARCHAR(50),
      price NUMERIC(10, 2) NOT NULL,
      img_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Users table
    `CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Orders table
    `CREATE TABLE IF NOT EXISTS orders (
      order_id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(user_id),
      total_amount NUMERIC(10, 2) NOT NULL,
      status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,

    // Order items table
    `CREATE TABLE IF NOT EXISTS order_items (
      item_id SERIAL PRIMARY KEY,
      order_id INT REFERENCES orders(order_id),
      product_id INT REFERENCES products(product_id),
      quantity INT NOT NULL,
      price NUMERIC(10, 2) NOT NULL
    )`,

    // Categories table
    `CREATE TABLE IF NOT EXISTS categories (
      category_id SERIAL PRIMARY KEY,
      category_name VARCHAR(50) UNIQUE NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  ];

  try {
    for (const table of tables) {
      await pool.query(table);
    }
    console.log("All tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
};
