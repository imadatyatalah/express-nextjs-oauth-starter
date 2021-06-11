-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "github_avatar_url" TEXT,
    "github_name" TEXT NOT NULL,
    "github_email" TEXT,
    "github_username" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users.github_email_unique" ON "users"("github_email");

-- CreateIndex
CREATE UNIQUE INDEX "users.github_username_unique" ON "users"("github_username");

-- CreateIndex
CREATE UNIQUE INDEX "users.github_id_unique" ON "users"("github_id");
