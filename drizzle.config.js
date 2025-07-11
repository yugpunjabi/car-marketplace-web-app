/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_EwgpFPl42BMo@ep-fragrant-unit-a8mopeug-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
    }
};
